---
title: disc - Operaciones con imágenes de disco
description: Crear, inspeccionar e insertar imágenes .DSK
---

## Sinopsis

```bash
cpc disc create|info|insert
```

## Descripción

Grupo de comandos para gestionar imágenes de disco: crear una nueva imagen, inspeccionar cabeceras o insertar una .DSK existente en una unidad.

## Ejemplos

```bash
cpc disc create mi_disco.dsk
cpc disc info mi_disco.dsk
cpc disc insert mi_disco.dsk A
```

## Notas

- El comando usa el `discManager` del proyecto (envoltorio de iDSK) para operar sobre imágenes .DSK.
- Las rutas pueden ser relativas o absolutas. El helper `system.process_dsk_name` normaliza los nombres usados por el código.
- Si un disco ya existe, `create` avisará y omitirá la recreación a menos que lo elimines primero.
