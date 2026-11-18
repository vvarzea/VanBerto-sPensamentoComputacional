/* VanBerto's · editor de blocos partilhado (Blockly) para a Fábrica de Carros, a Fábrica de Brinquedos e o Cão Robô.
   O Blockly (Google, licença Apache-2.0) desenha e gere os blocos; este ficheiro liga-o ao motor dos jogos,
   que continua a trabalhar com a lista simples de comandos (prog) e o VB.build/VB.hint do vb-core.js. */
window.VBEditor=(function(){
 function create(cfg){
  const B=Blockly,SIMPLE=Object.keys(cfg.blocks),CONDS=cfg.conds||{},WHILES=cfg.whiles||{};
  const PY=cfg.py,OPEN=cfg.open;
  let allowed=[],lastIds=[],ws=null,loading=false,startBlock=null,changeCb=null,lockedNow=false;
  const keysAllowed=obj=>{const a=Object.keys(obj).filter(k=>allowed.includes(k));return a.length?a:Object.keys(obj)};
  const opts=obj=>keysAllowed(obj).map(k=>[obj[k].t,k]);
  /* ---- definição dos blocos ---- */
  SIMPLE.forEach(k=>{B.Blocks['vb_'+k]={init:function(){
   this.appendDummyInput().appendField(cfg.blocks[k].t);
   this.setPreviousStatement(true,null);this.setNextStatement(true,null);this.setColour(cfg.blocks[k].c);this.setTooltip(cfg.blocks[k].tip||'')}}});
  B.Blocks.vb_start={init:function(){
   this.appendDummyInput().appendField(cfg.startText||'quando carregar em ▶ Executar');
   this.setNextStatement(true,null);this.setColour(cfg.startColor||'#b08a2a');this.setDeletable(false);this.setMovable(false);this.setTooltip('O programa começa aqui.')}};
  B.Blocks.vb_rep={init:function(){
   this.appendDummyInput().appendField('repete').appendField(new B.FieldNumber(2,1,cfg.repMax||5,1),'N').appendField('vezes');
   this.appendStatementInput('DO');this.setPreviousStatement(true,null);this.setNextStatement(true,null);this.setColour(cfg.repColor||'#8e4ec6');this.setTooltip('Repete os blocos que estão lá dentro.')}};
  B.Blocks.vb_if={init:function(){
   this.appendDummyInput().appendField('se').appendField(new B.FieldDropdown(()=>opts(CONDS)),'C').appendField('faz');
   this.appendStatementInput('DO');this.setPreviousStatement(true,null);this.setNextStatement(true,null);this.setColour(cfg.ctrlColor||'#2b8a9e');this.setTooltip('Só faz o que está lá dentro se a condição for verdadeira.')}};
  B.Blocks.vb_ifelse={init:function(){
   this.appendDummyInput().appendField('se').appendField(new B.FieldDropdown(()=>opts(CONDS)),'C').appendField('faz');
   this.appendStatementInput('DO');this.appendStatementInput('ELSE').appendField('senão');
   this.setPreviousStatement(true,null);this.setNextStatement(true,null);this.setColour(cfg.ctrlColor||'#2b8a9e');this.setTooltip('Se a condição for falsa, faz o que está em «senão».')}};
  B.Blocks.vb_while={init:function(){
   this.appendDummyInput().appendField('enquanto').appendField(new B.FieldDropdown(()=>opts(WHILES)),'C').appendField('faz');
   this.appendStatementInput('DO');this.setPreviousStatement(true,null);this.setNextStatement(true,null);this.setColour(cfg.whileColor||'#c2410c');this.setTooltip('Repete enquanto a condição for verdadeira.')}};
  /* ---- tema e área de trabalho ---- */
  const theme=B.Theme.defineTheme('vberto',{name:'vberto',base:B.Themes.Zelos,startHats:true,
   fontStyle:{family:"Nunito,'Nunito Sans',system-ui,-apple-system,'Segoe UI',Roboto,sans-serif",weight:'800',size:12},
   componentStyles:{workspaceBackgroundColour:'#fffdf5',toolboxBackgroundColour:'#f6efd9',flyoutBackgroundColour:'#f6efd9',flyoutOpacity:1,scrollbarColour:'#c9bd97',insertionMarkerColour:'#1e1b4b',insertionMarkerOpacity:.25}});
  function toolboxDef(){
   const c=[];let ifDone=false,whDone=false;
   allowed.forEach(k=>{
    if(cfg.blocks[k])c.push({kind:'block',type:'vb_'+k,gap:10});
    else if(k==='rep')c.push({kind:'block',type:'vb_rep',gap:10});
    else if(CONDS[k]&&!ifDone){ifDone=true;c.push({kind:'block',type:'vb_if',gap:10});if(allowed.includes('else'))c.push({kind:'block',type:'vb_ifelse',gap:10})}
    else if(WHILES[k]&&!whDone){whDone=true;c.push({kind:'block',type:'vb_while',gap:10})}
   });
   return {kind:'flyoutToolbox',contents:c};
  }
  function ensureStart(){
   if(startBlock&&!startBlock.disposed)return;
   startBlock=ws.newBlock('vb_start');startBlock.initSvg();startBlock.render();startBlock.moveBy(14,14);
  }
  function init(){
   if(ws)return;
   if(B.Msg&&B.setLocale)try{B.setLocale(B.Msg)}catch(e){}
   ws=B.inject(cfg.host,{toolbox:toolboxDef(),renderer:'zelos',theme,sounds:false,trashcan:true,media:cfg.media||'media/',
    zoom:{controls:true,wheel:false,pinch:true,startScale:(cfg.host.clientWidth&&cfg.host.clientWidth<520?.62:.85),maxScale:1.5,minScale:.5,scaleSpeed:1.15},
    move:{scrollbars:true,drag:true,wheel:true},grid:{spacing:26,length:2,colour:'#e4d9b8',snap:false}});
   ensureStart();
   ws.addChangeListener(B.Events.disableOrphans);
   ws.addChangeListener(e=>{
    if(loading||e.isUiEvent)return;
    if(e.type===B.Events.BLOCK_CREATE||e.type===B.Events.BLOCK_DELETE||e.type===B.Events.BLOCK_MOVE||e.type===B.Events.BLOCK_CHANGE){
     clearTimeout(init._t);init._t=setTimeout(()=>{if(changeCb)changeCb(getProg())},0)}});
   new ResizeObserver(()=>{try{B.svgResize(ws)}catch(e){}}).observe(cfg.host);
  }
  /* ---- API ---- */
  function setAllowed(list){
   allowed=list.slice();init();
   ws.updateToolbox(toolboxDef());
   /* as listas das caixas de seleção dependem dos tokens permitidos */
   try{B.svgResize(ws)}catch(e){}
  }
  function getProg(){
   const prog=[],ids=[];
   const push=(t,id)=>{prog.push(t);ids.push(id||null)};
   (function walk(b){
    while(b){
     const t=b.type;
     if(t==='vb_rep'){push({k:'rep',n:+b.getFieldValue('N')||2},b.id);walk(b.getInputTargetBlock('DO'));push({k:'end'})}
     else if(t==='vb_if'||t==='vb_ifelse'){push({k:b.getFieldValue('C')},b.id);walk(b.getInputTargetBlock('DO'));if(t==='vb_ifelse'){push({k:'else'},b.id);walk(b.getInputTargetBlock('ELSE'))}push({k:'end'})}
     else if(t==='vb_while'){push({k:b.getFieldValue('C')},b.id);walk(b.getInputTargetBlock('DO'));push({k:'end'})}
     else if(t.indexOf('vb_')===0&&t!=='vb_start')push({k:t.slice(3)},b.id);
     b=b.getNextBlock();
    }})(startBlock?startBlock.getNextBlock():null);
   lastIds=ids;return {prog,ids};
  }
  function load(prog){
   init();loading=true;
   try{
    ensureStart();
    ws.getTopBlocks(false).forEach(b=>{if(b!==startBlock)b.dispose(false)});
    const first=startBlock.getNextBlock();if(first)first.dispose(false);
    const tree=VB.build(prog,OPEN);
    const mk=(node)=>{
     const k=node.t.k;let b;
     if(k==='rep'){b=ws.newBlock('vb_rep');b.setFieldValue(String(node.t.n||2),'N')}
     else if(CONDS[k]){b=ws.newBlock(node.e?'vb_ifelse':'vb_if');b.setFieldValue(k,'C')}
     else if(WHILES[k]){b=ws.newBlock('vb_while');b.setFieldValue(k,'C')}
     else b=ws.newBlock('vb_'+k);
     b.initSvg();
     if(b.getInput('DO'))chain(node.b||[],b.getInput('DO').connection);
     if(b.getInput('ELSE'))chain(node.e||[],b.getInput('ELSE').connection);
     return b};
    const chain=(nodes,conn)=>{let prev=null;nodes.forEach(n=>{const b=mk(n);if(prev)prev.nextConnection.connect(b.previousConnection);else conn.connect(b.previousConnection);prev=b})};
    chain(tree,startBlock.nextConnection);
    ws.getAllBlocks(false).forEach(b=>{try{b.render()}catch(e){}});
   }finally{loading=false}
   B.svgResize(ws);
   try{B.common.setSelected(null)}catch(e){}
   try{ws.scrollbar&&ws.scroll(0,0)}catch(e){}
   return getProg();
  }
  function highlight(i){
   try{B.common.setSelected(null)}catch(e){}
   ws.getAllBlocks(false).forEach(b=>{const s=b.getSvgRoot&&b.getSvgRoot();if(s)s.classList.remove('vb-run')});
   if(i==null)return;const id=lastIds[i];if(!id)return;
   const b=ws.getBlockById(id),s=b&&b.getSvgRoot();if(s)s.classList.add('vb-run');
  }
  function lock(v){lockedNow=v;cfg.host.classList.toggle('vb-locked',v)}
  /* Python: texto + em que linha está cada comando (para acender a linha que está a correr) */
  function pyMap(prog){
   let ind=0,po=false;const lines=[],lineOf=[];
   prog.forEach((b,i)=>{
    if(b.k==='else'){ind=Math.max(0,ind-1);lines.push('    '.repeat(ind)+'else:');lineOf[i]=lines.length-1;ind++;po=true;return}
    if(b.k==='end'){if(po)lines.push('    '.repeat(ind)+'pass');ind=Math.max(0,ind-1);po=false;return}
    const sp='    '.repeat(ind);
    if(b.k==='rep'){lines.push(sp+'for i in range('+b.n+'):');lineOf[i]=lines.length-1;ind++;po=true;return}
    lines.push(sp+PY[b.k]);lineOf[i]=lines.length-1;
    if(OPEN.includes(b.k)){ind++;po=true}else po=false});
   return {lines,lineOf};
  }
  function orphans(){return ws?ws.getTopBlocks(false).filter(b=>b!==startBlock).length:0}
  function resize(){if(ws)try{B.svgResize(ws)}catch(e){}}
  return {setAllowed,getProg,load,highlight,lock,pyMap,resize,orphans,onChange:fn=>{changeCb=fn},get ws(){return ws}};
 }
 return {create};
})();
