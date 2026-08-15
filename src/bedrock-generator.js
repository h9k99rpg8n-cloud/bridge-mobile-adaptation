(() => {
  const bool = (block, field) => block.getFieldValue(field) === 'TRUE';
  const num = (block, field) => Number(block.getFieldValue(field));
  function normalizePart(value, fallback) {
    const cleaned = String(value || '').trim().toLowerCase().replace(/\s+/g,'_').replace(/[^a-z0-9_.-]/g,'');
    return cleaned || fallback;
  }
  function componentFor(block) {
    switch (block.type) {
      case 'bedrock_health': { const max=Math.max(1,num(block,'MAX')); return ['minecraft:health',{value:Math.min(Math.max(1,num(block,'VALUE')),max),max}]; }
      case 'bedrock_physics': return ['minecraft:physics',{has_gravity:bool(block,'GRAVITY'),has_collision:bool(block,'COLLISION')}];
      case 'bedrock_collision_box': return ['minecraft:collision_box',{width:num(block,'WIDTH'),height:num(block,'HEIGHT')}];
      case 'bedrock_movement': return ['minecraft:movement',{value:num(block,'VALUE')}];
      case 'bedrock_movement_basic': return ['minecraft:movement.basic',{max_turn:num(block,'MAX_TURN')}];
      case 'bedrock_navigation_generic': return ['minecraft:navigation.generic',{can_walk:bool(block,'WALK'),can_swim:bool(block,'SWIM'),can_open_doors:bool(block,'DOORS'),can_pass_doors:bool(block,'DOORS')}];
      case 'bedrock_jump_static': return ['minecraft:jump.static',{jump_power:num(block,'POWER')}];
      case 'bedrock_type_family': { const family=String(block.getFieldValue('FAMILIES')||'').split(',').map(x=>x.trim()).filter(Boolean); return ['minecraft:type_family',{family:family.length?family:['mob']}]; }
      case 'bedrock_random_stroll': return ['minecraft:behavior.random_stroll',{priority:num(block,'PRIORITY'),speed_multiplier:num(block,'SPEED')}];
      case 'bedrock_look_at_player': return ['minecraft:behavior.look_at_player',{priority:num(block,'PRIORITY'),target_distance:num(block,'DISTANCE'),probability:num(block,'PROBABILITY')}];
      case 'bedrock_nearest_player': return ['minecraft:behavior.nearest_attackable_target',{priority:num(block,'PRIORITY'),must_see:bool(block,'MUST_SEE'),reselect_targets:true,entity_types:[{filters:{test:'is_family',subject:'other',value:'player'},max_dist:num(block,'DISTANCE')}]}];
      case 'bedrock_melee_attack': return ['minecraft:behavior.melee_attack',{priority:num(block,'PRIORITY'),speed_multiplier:num(block,'SPEED'),track_target:bool(block,'TRACK')}];
      case 'bedrock_attack_damage': return ['minecraft:attack',{damage:num(block,'DAMAGE')}];
      case 'bedrock_custom_component': { const key=String(block.getFieldValue('KEY')||'').trim(); if(!key) throw new Error('El componente avanzado necesita un identificador.'); let value; try{value=JSON.parse(String(block.getFieldValue('JSON')||'{}'));}catch{throw new Error(`JSON inválido dentro de ${key}.`);} return [key,value]; }
      default: return null;
    }
  }
  function generate(workspace, metadata={}) {
    const roots=workspace.getTopBlocks(true).filter(block=>block.type==='bedrock_entity_root');
    const warnings=[];
    if(!roots.length) throw new Error('Agrega un bloque “Entidad” para generar el JSON.');
    if(roots.length>1) warnings.push('Hay más de una entidad raíz; se exportará únicamente la primera.');
    const root=roots[0];
    const namespace=normalizePart(metadata.namespace||root.getFieldValue('NAMESPACE'),'custom');
    const identifier=normalizePart(metadata.entityId||root.getFieldValue('IDENTIFIER'),'entity');
    const formatVersion=String(metadata.formatVersion||'1.26.20').trim()||'1.26.20';
    const components={}; const duplicateKeys=new Set();
    let current=root.getInputTargetBlock('COMPONENTS');
    while(current){ const component=componentFor(current); if(component){const [key,value]=component;if(Object.prototype.hasOwnProperty.call(components,key))duplicateKeys.add(key);components[key]=value;} current=current.getNextBlock(); }
    if(duplicateKeys.size) warnings.push(`Componentes repetidos: ${[...duplicateKeys].join(', ')}. Se usó el último valor.`);
    return {json:{format_version:formatVersion,'minecraft:entity':{description:{identifier:`${namespace}:${identifier}`,is_spawnable:bool(root,'SPAWNABLE'),is_summonable:bool(root,'SUMMONABLE')},components}},warnings,namespace,identifier};
  }
  window.BedrockGenerator={generate,normalizePart};
})();
