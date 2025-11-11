---
title: disc create - Crear un nuevo .DSK o insertarlo en una unidad
description: Crear una nueva imagen de disco virtual y, opcionalmente, insertarla en A o B
---

## Sinopsis

```bash
cpc disc create <nombre_disco> [-A | -B]
```

## Descripción

Crea una nueva imagen de disco virtual `.DSK`. Si se proporciona `-A` o `-B`, la imagen creada (o existente) se insertará en la unidad especificada.

Si ya existe un archivo con ese nombre, el comando avisará y no sobrescribirá la imagen existente.

## Argumentos

- `nombre_disco` — Requerido. Nombre del archivo de disco a crear (por ejemplo `mi_disco.dsk`).

## Opciones

- `-A, --drive-a` — Inserta el disco en la unidad A tras crearlo
- `-B, --drive-b` — Inserta el disco en la unidad B tras crearlo

## Ejemplos

```bash
# Crear un nuevo archivo de disco en la carpeta actual
cpc disc create mi_disco.dsk

# Crear e insertar en la unidad A
cpc disc create mi_disco.dsk -A

# Crear e insertar en la unidad B
cpc disc create mi_disco.dsk -B
```

## Comportamiento

- Si se especifican `-A` y `-B` a la vez, el comando rechazará la llamada y pedirá solo una opción de unidad.
- El comando utiliza el helper `discManager.new()` (envoltorio de iDSK) para crear la imagen.
- Tras crear/insertar, se muestra la tabla de unidades.
