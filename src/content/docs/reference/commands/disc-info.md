---
title: disc info - Mostrar información detallada de un disco
description: Inspeccionar un archivo .DSK y mostrar metadatos y contenido
---

## Sinopsis

```bash
cpc disc info [nombre_disco] [-A | -B]
```

## Descripción

Muestra información detallada sobre un archivo `.DSK`. Si no se proporciona un nombre de disco, o se usan `-A`/`-B`, el comando mostrará la información del disco insertado actualmente en la unidad seleccionada.

La salida incluye metadatos del disco y una vista formateada generada por el helper `discManager.info_disc()`.

## Argumentos y opciones

- `nombre_disco` — Opcional. Nombre del archivo de disco a inspeccionar.
- `-A, --drive-a` — Mostrar info del disco en la unidad A
- `-B, --drive-b` — Mostrar info del disco en la unidad B

## Ejemplos

```bash
# Mostrar info del disco montado en la unidad por defecto
cpc disc info

# Mostrar info de un archivo de disco concreto
cpc disc info mi_disco.dsk

# Mostrar info del disco en la unidad A
cpc disc info -A
```

## Casos de error

- Si una unidad no tiene disco insertado, el comando imprime `Drive X: disc missing` y sale.
- Si el archivo referenciado no existe, se muestra un error.
