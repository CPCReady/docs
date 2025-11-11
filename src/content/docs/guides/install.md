---
title: Instalación
description: Cómo instalar CPCReady en tu sistema
---

## Instalación

**CPCReady** funciona principalmente en Linux. También puede utilizarse en Windows mediante WSL o ejecutándose en una máquina virtual.

## Requisitos

| Software | URL | Versión |
| ------ | ------ | ------ |
| Python | https://www.python.org/downloads/ | 3.8 o superior (recomendado ≥3.10) |
| Visual Studio Code | https://code.visualstudio.com/ | Latest |

Comprueba que `pip` está instalado:

```bash
pip3 --version
```

## Instalar CPCReady

```bash
pip3 install cpcready
```

Comprobar la versión instalada:

```bash
cpcready --version
```

## Actualizar CPCReady

```bash
pip3 install cpcready --upgrade
```

## Recomendación: Visual Studio Code

Para mejorar la experiencia de desarrollo se recomienda usar Visual Studio Code e instalar extensiones útiles como `cpcready.basic-language-extension` y `ms-vscode.live-server`.
