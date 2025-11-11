---
title: drive B - Montar un disco en la unidad B
description: Asignar un archivo .DSK a la unidad virtual B
---

## Sinopsis

```bash
cpc drive B <archivo_disco>
```

## Descripción

Monta un archivo `.DSK` en la unidad virtual B. El comando valida la ruta y actualiza la configuración para que operaciones posteriores usen el disco montado.

## Argumentos

- `archivo_disco` — Ruta al archivo .DSK a montar (requerido)

## Ejemplos

```bash
# Montar disco en la carpeta actual
cpc drive B juegos.dsk

# Montar disco con ruta absoluta
cpc drive B /Users/usuario/cpc/backup.dsk
```

## Notas

- Si el archivo no existe, el comando mostrará un error y no modificará la configuración.
- Usa `cpc drive status` para verificar el disco montado.
