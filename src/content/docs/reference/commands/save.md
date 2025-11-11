---
title: save - Guardar archivos en discos virtuales
description: Copiar archivos del host a imágenes .DSK con opciones de tipo
---

## Sinopsis

```bash
cpc save <file_name> [tipo] [direccion_load] [direccion_exec] [-A|-B]
```

## Descripción

Guarda un archivo del sistema host en el disco virtual montado. Soporta tipos: ASCII (por defecto), BASIC tokenizado (`a`), protegido (`p`) y binario (`b`, requiere dirección de carga).

## Ejemplos

```bash
cpc save program.bas
cpc save program.bas a
cpc save loader.bin b 4000
cpc save -B data.txt
```

## Notas

- Los binarios requieren una dirección de carga (load address).
- El comando usa el usuario CP/M configurado al guardar.
