---
title: era - Borrar archivos en discos virtuales
description: Eliminar archivos usando comodines estilo CP/M
---

## Sinopsis

```bash
cpc era <patrón_de_archivo> [-A|-B]
```

## Descripción

Elimina archivos del disco virtual montado. Soporta comodines como `*` y `?`. Úsalo con precaución.

## Ejemplos

```bash
cpc era antiguo.bas
cpc era *.BAK
cpc era *.*
```

## Notas

- Si no se encuentra un archivo, el comando emitirá una advertencia y continuará.
- Los archivos protegidos no pueden borrarse.
