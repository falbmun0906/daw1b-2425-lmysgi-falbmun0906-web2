# daw1b-2425-lmysgi-falbmun0906-web2
Proyecto 2 - Desarrollo con Estándares Web - Francisco Alba Muñoz - 1º DAW-B

# Proyecto Web: Pawfect Store

Este proyecto representa una tienda online y plataforma para amantes de mascotas, desarrollada con el objetivo de proporcionar una experiencia de usuario clara, accesible y adaptativa. Incluye información sobre adopciones, servicios, contacto y registro para una comunidad exclusiva.

## 🐾 Descripción del Proyecto

El proyecto consiste en un sitio web de cuatro páginas interconectadas:
1. **Página principal**: Introducción y resumen del sitio.
2. **Página de productos**: Listado detallado de categorías disponibles.
3. **Página de 'Sobre nosotros'**: Ubicación de la empresa y FAQ.
4. **Página de blog**: Formulario para unirse a la comunidad y sección de adopciones.

Cada página está diseñada con HTML5 y CSS3, aplicando estándares modernos de maquetación, accesibilidad y diseño responsive.

---

## 🌟 Características Principales

- **Estructura semántica**: Uso de etiquetas como `<header>`, `<main>`, `<section>`, `<article>` para una organización clara del contenido.
- **Formulario funcional**: Incluye validación en campos requeridos, como correo, nombre, dirección y otros.
- **Diseño adaptable**: Implementación de media queries para garantizar una experiencia óptima en diferentes dispositivos.
- **Dark Mode**: Diseño básico con soporte para modo oscuro.
- **Animaciones y transiciones**: Mejora de la experiencia visual con efectos en botones, imágenes y menús.
- **Multimedia enriquecida**: Uso de imágenes optimizadas para ilustrar contenido.

---

## 📁 Estructura del Proyecto

El repositorio tiene la siguiente estructura:

![Estructura del proyecto](assets/miscelanea/tree.png)

---

## 🚀 Cómo Visualizar el Proyecto

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/falbmun0906/daw1b-2425-lmysgi-falbmun0906-web2/
   ```
2. **Abrir el proyecto**:
   Navega a la carpeta descargada y abre el archivo `index.html` en tu navegador preferido.
3. **Navegación**:
   Utiliza el menú de navegación para explorar las diferentes páginas.

---

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y jerarquizada.
- **CSS3**: Estilos organizados bajo la metodología BEM.
- **Font Awesome**: Iconos para mejorar la interfaz.
- **Google Maps**: Integración para mostrar la ubicación del negocio.

---

## ✅ Validaciones Realizadas

- **HTML**: Código validado con [W3C Validator](https://validator.w3.org/) sin errores.
- **CSS**: Hoja de estilos revisada para cumplir con los estándares de calidad.
<p>
    <a href="http://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="http://jigsaw.w3.org/css-validator/images/vcss"
            alt="¡CSS Válido!" />
    </a>
</p>

### Validación del Proyecto

#### Instrucciones de Validación

Para asegurar que el proyecto funcione correctamente, se siguieron los siguientes pasos de validación:

1. Validación del Código

a. Validación de HTML
El código HTML fue validado utilizando la herramienta [W3C HTML Validator](https://validator.w3.org/). Para ello, se realizó lo siguiente:
- Se copió el código HTML de los archivos y se verificó en el validador en línea.
- Se corrigieron los errores y advertencias que se detectaron durante la validación.

b. Validación de CSS
Se utilizó la herramienta [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) para validar el código CSS:
- El código CSS se pegó en la herramienta.
- Se solucionaron los problemas encontrados, asegurando que el CSS cumple con los estándares.

2. Validación de Funcionalidad

a. Validación Manual
Se realizaron pruebas manuales en el proyecto para verificar su funcionalidad:
- Se probó la navegación, asegurándose de que todos los enlaces y botones funcionaran correctamente.
- Se comprobó que el diseño fuera responsivo y adecuado para diferentes tamaños de pantalla.
- Se validaron los formularios y las interacciones, asegurando que todos los datos se enviaran correctamente.

3. Validación de Accesibilidad

Se realizaron pruebas de accesibilidad utilizando [axe](https://www.deque.com/axe/) y [Lighthouse](https://developers.google.com/web/tools/lighthouse):
- Se verificó el contraste de color para asegurar que fuera adecuado para usuarios con discapacidades visuales.
- Se probó la navegación por teclado, garantizando que todos los elementos interactivos fueran accesibles sin mouse.

4. Validación de Desempeño

El rendimiento del proyecto fue validado con la herramienta [Google Lighthouse](https://developers.google.com/web/tools/lighthouse):
- Se revisaron aspectos como el tiempo de carga, el tamaño de los archivos, y la optimización de imágenes.
- Se validó el uso adecuado de caché para mejorar el desempeño.

#### Descripción de la Validación del Proyecto

El proyecto fue validado exhaustivamente mediante el uso de herramientas automáticas y pruebas manuales para asegurar su correcto funcionamiento, accesibilidad y rendimiento. Todos los problemas encontrados durante la validación fueron solucionados para garantizar una experiencia de usuario óptima y un código libre de errores.

---

## 🔍 Detalles Relevantes

- El formulario de registro incluye ocho campos validados: NIF/DNI, nombre, apellidos, dirección, código postal, localidad, país y correo electrónico.
- Cada página está diseñada para ser visualmente atractiva y fácilmente navegable.
- El proyecto está optimizado para tiempos de carga rápidos gracias al uso eficiente de recursos.

---

## Problemas encontrados: Utilización de SVG.

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

# FASE 2: Manipulación del DOM con JavaScript

## Descripción  
Este proyecto muestra ejemplos prácticos de manipulación del DOM utilizando **JavaScript moderno** (ES6+). El código está organizado en funciones reutilizables para seleccionar, modificar, crear y eliminar elementos del DOM, además de aplicar estilos dinámicamente.  

## Funcionalidades  

### 1. Seleccionar y acceder a elementos del DOM  

La función **`selectElements`** demuestra cómo acceder a elementos del DOM mediante distintos métodos:  

(Enlaza desde GitHub el enlace permanente a `selectElements`)  

**Métodos utilizados:**  
- `getElementById()`  
- `getElementsByClassName()`  
- `querySelector()`  
- `querySelectorAll()`  

### 2. Crear y añadir elementos dinámicamente  

La función **`addJoinButton`** crea un nuevo botón y lo añade al contenedor de la newsletter:  

(Enlaza desde GitHub el enlace permanente a `addJoinButton`)  

**Métodos utilizados:**  
- `document.createElement()` — Crea un nuevo elemento.  
- `element.appendChild()` — Añade el elemento creado como hijo del contenedor.  
- `classList.add()` — Añade clases CSS dinámicamente.  

### 3. Modificar contenido y atributos de elementos existentes  

La función **`modifyContentAndAttributes`** cambia el texto del título de la newsletter y actualiza el placeholder del campo de email:  

(Enlaza desde GitHub el enlace permanente a `modifyContentAndAttributes`)  

**Métodos utilizados:**  
- `textContent` — Modifica el contenido de texto de un elemento.  
- `setAttribute()` — Cambia atributos de un elemento (como el placeholder).  

### 4. Eliminar elementos del DOM  

La función **`removeFirstFAQ`** elimina el primer elemento FAQ, validando que el contenedor y el ítem existan:  

(Enlaza desde GitHub el enlace permanente a `removeFirstFAQ`)  

**Métodos utilizados:**  
- `querySelector()` — Seleccionar elementos.  
- `remove()` — Elimina directamente un elemento del DOM.  
- `contains()` — Verifica si un elemento contiene otro (para evitar errores).  

### 5. Manipular estilos dinámicamente  

La función **`addHeaderHoverEffects`** cambia dinámicamente el color de fondo del header al pasar el ratón:  

(Enlaza desde GitHub el enlace permanente a `addHeaderHoverEffects`)  

**Métodos utilizados:**  
- `addEventListener()` — Añadir eventos (`mouseover`, `mouseout`).  
- `style` — Modificar propiedades CSS directamente desde JavaScript.  

Este proyecto ofrece una introducción clara y estructurada a la manipulación del DOM en JavaScript moderno.  
Cada función está diseñada para ser reutilizable, manteniendo el código limpio y fácil de escalar.

