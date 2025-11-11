---
title: drive A - Montar un disco en la unidad A
description: Asignar un archivo .DSK a la unidad virtual A
---

## Sinopsis

```bash
cpc drive A <archivo_disco>
```

## Descripción

Monta un archivo `.DSK` en la unidad virtual A. El comando valida la ruta y actualiza la configuración para que operaciones posteriores (cat, save, list) usen el disco montado.

## Argumentos

- `archivo_disco` — Ruta al archivo .DSK a montar (requerido)

## Ejemplos

```bash
# Montar disco en la carpeta actual
cpc drive A mi_disco.dsk

# Montar disco con ruta absoluta
cpc drive A /Users/usuario/cpc/system.dsk
```

## Notas

- Si el archivo no existe, el comando mostrará un error y no modificará la configuración.
- Usa `cpc drive status` para verificar el disco montado.
