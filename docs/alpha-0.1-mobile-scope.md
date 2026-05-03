# Alpha 0.1 — Mobile Adaptation Scope

Esta alfa define la primera capa móvil para adaptar bridge. a iPhone, Android y navegadores móviles.

## Objetivo de Alpha 0.1

Crear una base clara para que bridge. sea más cómodo en móvil sin reescribir su motor ni cambiar su lógica interna.

## Funciones incluidas

### 1. Modo móvil

- Detectar pantallas pequeñas.
- Usar una interfaz mobile-first.
- Priorizar edición en vertical y horizontal.
- Evitar paneles demasiado pequeños.

### 2. Botones grandes

- Botones táctiles mínimos de 44 px.
- Separación suficiente entre acciones.
- Evitar botones pequeños pegados.
- Acciones importantes siempre visibles.

### 3. Barra rápida JSON

Barra táctil para insertar símbolos comunes:

```txt
{ } [ ] " " : , _ / .
```

Uso principal:

- Editar JSON desde teclado móvil.
- Corregir bloques, items y entidades.
- Reducir errores al escribir desde iPhone.

### 4. Paneles simplificados

- Vista de archivos más limpia.
- Alternar entre editor, explorador y preview.
- Menos paneles abiertos al mismo tiempo.
- Prioridad al archivo actual.

### 5. Guía de exportación iPhone

- Documentar problemas de Safari.
- Explicar exportación manual.
- Explicar uso de Archivos de iPhone.
- Explicar pruebas en Minecraft Bedrock iOS.

### 6. Layout vertical/horizontal

- Vertical: edición rápida, formularios y JSON corto.
- Horizontal: edición fuerte, vista de archivos y preview.
- Mantener controles táctiles accesibles.

## Lo que NO entra en Alpha 0.1

- No se reescribe bridge.
- No se cambia la lógica de proyectos.
- No se cambia el sistema de addons.
- No se modifica el compilador/exportador todavía.

## Resultado esperado

Un prototipo documentado y una primera interfaz HTML/CSS/JS que demuestre cómo podría sentirse bridge. adaptado a móvil.
