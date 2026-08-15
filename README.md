# Bedrock Blocks Lab — Alpha 0.1

Editor visual **mobile-first** para crear contenido de Minecraft Bedrock mediante Google Blockly. Este repositorio nació como `bridge-mobile-adaptation`, pero la implementación es propia y usa bridge. solo como referencia conceptual de flujo de trabajo.

## Qué funciona en Alpha 0.1

- Google Blockly 13.2.0 en navegador, con renderer Zelos y gestos táctiles.
- Proyecto local con nombre, namespace, identificador y `format_version` editable.
- Bloque raíz de entidad de Behavior Pack.
- Componentes visuales para vida, física, caja de colisión, familias, movimiento, navegación, salto y varias conductas de IA.
- Plantilla **Básica** y plantilla **Perseguidor**.
- Generación en vivo de JSON Bedrock.
- Descarga del archivo de entidad `.json`.
- Guardado automático en `localStorage` usando la serialización JSON moderna de Blockly.
- Exportación/importación del proyecto visual `.bedrockblocks.json`.
- Interfaz responsive para teléfono, tablet y escritorio.

## Objetivo del proyecto

Blockbench seguirá haciendo el trabajo pesado de modelado, UV y animación. Bedrock Blocks Lab se enfoca en estructurar el Add-On: componentes, comportamientos, eventos, archivos Bedrock y, más adelante, empaquetado BP/RP y `.mcaddon`.

## Próximos pasos

1. Proyectos completos Behavior Pack + Resource Pack.
2. Bloques visuales para bloques, items, recetas y eventos.
3. Importación de geometrías `.geo.json` y visor 3D de solo lectura.
4. Partículas y sonidos.
5. Extension API para registrar nuevas categorías y bloques visuales.
6. Exportación `.mcaddon`.

## Nota

Minecraft y bridge. son marcas/proyectos de terceros. Esta herramienta no es un producto oficial de Mojang, Microsoft ni bridge-core.
