# daw1b-2425-lmysgi-falbmun0906-web2
Proyecto 2 - Desarrollo con Estándares Web - Francisco Alba Muñoz - 1º DAW-B

## Problema con utilización de SVG.

### 1. Introducción al problema
Cuando intentaba cargar el archivo SVG como fondo de la página mediante la propiedad background-image, la imagen no se mostraba y el navegador devolvía el error:
Failed to load resource: net::ERR_FILE_NOT_FOUND.

Esto indicaba que el archivo no estaba siendo encontrado en la ruta especificada.

### 2. Diagnóstico del problema
Después de revisar el código y la estructura de carpetas del proyecto, me di cuenta de que la ruta definida en el CSS:

```css
background-image: url(/css/sssurf.svg);
```

era incorrecta. El error estaba en que la ruta no correspondía a la ubicación real del archivo dentro de la jerarquía del proyecto.

El problema surge porque:

El prefijo / hace que el navegador busque la ruta desde la raíz del proyecto.
Esto no coincidía con la ubicación real del archivo en mi sistema de carpetas.

### 3. La solución aplicada
Revisé la estructura de archivos y ubiqué la carpeta y el archivo correctos. El archivo sssurf.svg estaba en ../assets/backgrounds/.
Cambié la ruta en el CSS a:

```css
background-image: url(../assets/backgrounds/sssurf.svg);
```

Esto resolvió el problema porque:

La ruta relativa ../ indica que debe subir un nivel desde la ubicación del archivo CSS.
El navegador pudo encontrar correctamente el archivo SVG y cargarlo como fondo.
