---
title: drive eject - Expulsar discos de las unidades
description: Quitar las asignaciones de disco de ambas unidades
---

## Sinopsis

```bash
cpc drive eject
```

## Descripción

Expulsa (desasigna) discos de las unidades virtuales A y B. La configuración se actualiza para que las unidades queden vacías. El comando es idempotente.

## Ejemplos

```bash
# Expulsar discos de ambas unidades
cpc drive eject
```

**Salida típica:**

```text
✓ Drive A: expulsado
✓ Drive B: expulsado
```

## Notas

- No elimina los archivos `.DSK` del disco — solo quita la asignación en la configuración de unidades.
- Usa `cpc drive status` para confirmar que las unidades están vacías.
