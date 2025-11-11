---
title: disc insert - Insertar una .DSK existente en una unidad
description: Insertar una imagen de disco existente en la unidad A o B
---

## Sinopsis

```bash
cpc disc insert <nombre_disco> -A|-B
```

## Descripción

Inserta un archivo `.DSK` existente en una unidad virtual específica. El comando comprueba que el archivo existe y actualiza la configuración de la unidad.

## Argumentos

- `nombre_disco` — Requerido. Ruta/nombre del `.DSK` a insertar.

## Opciones

- `-A, --drive-a` — Insertar en la unidad A
- `-B, --drive-b` — Insertar en la unidad B

## Ejemplos

```bash
# Insertar disco en la unidad A
cpc disc insert mi_disco.dsk -A

# Insertar disco en la unidad B usando una ruta relativa
cpc disc insert ../disks/juego.dsk -B
```

## Validación

- El comando rechazará la llamada si no se especifica ni `-A` ni `-B`.
- Si no se encuentra el archivo de disco se muestra un error.
- Si se proporcionan `-A` y `-B` a la vez, el comando informa un error y sale.
