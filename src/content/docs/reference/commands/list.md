---
title: list - Mostrar contenido o desensamblar binarios
description: Mostrar listados BASIC o desensamblar archivos binarios
---

## Sinopsis

```bash
cpc list <file_name> [-A|-B]
```

## Descripción

Muestra el contenido de archivos BASIC con resaltado de sintaxis o desensambla archivos binarios guardando la salida en un `.asm`.

## Ejemplos

```bash
cpc list program.bas
cpc list loader.bin
```

## Salida

- BASIC: Impreso en terminal con resaltado de sintaxis
- BINARIO: Guardado en `<name>_listing.asm`
