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

### Lenguajes de script relacionados con la web:
JavaScript es el principal lenguaje de programación utilizado para la creación de aplicaciones web interactivas en el lado del cliente. Otros lenguajes de script como **HTML** y **CSS** se utilizan para estructurar el contenido y estilizar la apariencia de las páginas, pero es JavaScript el que permite la interacción dinámica con el usuario, como responder a eventos, manipular el contenido y el diseño de la página en tiempo real, y realizar tareas asincrónicas como las peticiones a servidores.

### Características clave de JavaScript moderno (ES6+):
Con la llegada de **ECMAScript 6 (ES6)**, también conocido como JavaScript moderno, se introdujeron varias mejoras en la sintaxis y funcionalidad del lenguaje. Estas actualizaciones incluyen características que simplifican el desarrollo, mejoran la legibilidad del código y permiten escribir aplicaciones más eficientes y fáciles de mantener.

#### Variables `let` y `const`:
Estas nuevas formas de declarar variables ayudan a gestionar mejor el alcance y la mutabilidad de las mismas. `let` se usa para declarar variables cuyo valor puede cambiar, mientras que `const` se utiliza para declarar valores constantes que no deben ser reasignados.

#### Funciones Flecha (`=>`):
Esta sintaxis de función más compacta reemplaza la palabra clave `function` y ofrece ventajas como la eliminación de la confusión con el contexto de `this`. Las **arrow functions** son especialmente útiles cuando se trabaja con funciones anónimas o callbacks.

#### Template Literals:
La interpolación de cadenas con las **template literals** permite incorporar variables directamente dentro de cadenas de texto sin necesidad de concatenarlas. Esto simplifica la construcción de strings complejos, mejorando la legibilidad y reduciendo la probabilidad de errores.

### Razón para usar sintaxis moderna (ES6+):
El uso de la sintaxis moderna de JavaScript, como las funciones flecha y las nuevas formas de declarar variables, tiene varios beneficios. Facilita la escritura de código más limpio y conciso, reduce la posibilidad de errores comunes, y permite una mayor claridad al gestionar el contexto de `this` dentro de las funciones. Además, la utilización de plantillas literales mejora la manipulación de cadenas de texto al permitir una inclusión más intuitiva de valores dentro de ellas.

JavaScript moderno (ES6+) no solo mejora la eficiencia del desarrollo, sino que también hace que el código sea más fácil de leer, mantener y escalar, lo que es esencial para aplicaciones web interactivas y dinámicas.

## Funcionalidades  

### 1. Seleccionar y acceder a elementos del DOM  

La función **`selectElements`** demuestra cómo acceder a elementos del DOM mediante distintos métodos:  

https://github.com/falbmun0906/daw1b-2425-lmysgi-falbmun0906-web2/blob/5f418ced930f07b7ff1089dda3b7ae96768d37c2/js/script.js#L7-L25

**Métodos utilizados:**  
- `getElementById()`  
- `getElementsByClassName()`  
- `querySelector()`  
- `querySelectorAll()`  

### 2. Crear y añadir elementos dinámicamente  

La función **`addJoinButton`** crea un nuevo botón y lo añade al contenedor de la newsletter:  

https://github.com/falbmun0906/daw1b-2425-lmysgi-falbmun0906-web2/blob/5f418ced930f07b7ff1089dda3b7ae96768d37c2/js/script.js#L31-L46

**Métodos utilizados:**  
- `document.createElement()` — Crea un nuevo elemento.  
- `element.appendChild()` — Añade el elemento creado como hijo del contenedor.  
- `classList.add()` — Añade clases CSS dinámicamente.  

### 3. Modificar contenido y atributos de elementos existentes  

La función **`modifyContentAndAttributes`** cambia el texto del título de la newsletter y actualiza el placeholder del campo de email:  

https://github.com/falbmun0906/daw1b-2425-lmysgi-falbmun0906-web2/blob/5f418ced930f07b7ff1089dda3b7ae96768d37c2/js/script.js#L52-L68

**Métodos utilizados:**  
- `textContent` — Modifica el contenido de texto de un elemento.  
- `setAttribute()` — Cambia atributos de un elemento (como el placeholder).  

### 4. Eliminar elementos del DOM  

La función **`removeFirstFAQ`** elimina el primer elemento FAQ, validando que el contenedor y el ítem existan:  

https://github.com/falbmun0906/daw1b-2425-lmysgi-falbmun0906-web2/blob/5f418ced930f07b7ff1089dda3b7ae96768d37c2/js/script.js#L74-L91

**Métodos utilizados:**  
- `querySelector()` — Seleccionar elementos.  
- `remove()` — Elimina directamente un elemento del DOM.  
- `contains()` — Verifica si un elemento contiene otro (para evitar errores).  

### 5. Manipular estilos dinámicamente  

# 5. Activar y Desactivar el Modo Oscuro/Claro

La funcionalidad de **modo oscuro** y **modo claro** permite al usuario alternar entre diferentes esquemas de colores en la página, activando un fondo oscuro o claro según la preferencia. Estas funciones modifican propiedades CSS directamente y cambian íconos, creando una experiencia visual dinámica.

**Código:**  

https://github.com/falbmun0906/daw1b-2425-lmysgi-falbmun0906-web2/blob/0fa2937d287008b319f12563eb5e2f3cf72e3913/js/script.js#L98-L150

### Función **`activateDarkMode`**

Esta función activa el modo oscuro en la página. Cambia los colores del esquema general de la interfaz, el fondo de la página y el encabezado, así como el ícono en el interruptor de modo oscuro (de sol a luna).

**Métodos utilizados:**

- `style.setProperty()` — Modifica las propiedades CSS dinámicamente.
- `classList.add()` y `classList.remove()` — Cambia las clases del ícono para actualizar la imagen del sol a la luna.

**Comportamiento:**

1. **Esquema de colores:**  
   Ajusta los valores de las variables CSS del `:root` para aplicar un esquema de colores más oscuro.

2. **Fondo de la página:**  
   Cambia la imagen de fondo del `body` y el encabezado a una versión más oscura.

3. **Ícono del interruptor:**  
   Cambia el ícono de modo oscuro del sol a la luna (iconos `fa-sun` a `fa-moon`).

https://github.com/falbmun0906/daw1b-2425-lmysgi-falbmun0906-web2/blob/0fa2937d287008b319f12563eb5e2f3cf72e3913/js/script.js#L98-L117

### Función **`activateLightMode`**

Esta función restaura el modo claro. Restaura el esquema de colores, los fondos de la página y del encabezado, y cambia el ícono del interruptor de luna a sol.

**Métodos utilizados:**

- `style.setProperty()` — Modifica las propiedades CSS dinámicamente.
- `classList.add()` y `classList.remove()` — Cambia las clases del ícono para actualizar la imagen de la luna al sol.

**Comportamiento:**

1. **Esquema de colores:**  
   Restaura las variables CSS del `:root` a colores más claros.

2. **Fondo de la página:**  
   Restaura las imágenes de fondo del `body` y el encabezado a las versiones originales (más claras).

3. **Ícono del interruptor:**  
   Cambia el ícono de modo oscuro de la luna al sol (iconos `fa-moon` a `fa-sun`).

https://github.com/falbmun0906/daw1b-2425-lmysgi-falbmun0906-web2/blob/0fa2937d287008b319f12563eb5e2f3cf72e3913/js/script.js#L120-L139

### Función **`darkModeToggle.addEventListener('change')`**

Esta función se activa cuando el interruptor de modo oscuro (checkbox) cambia de estado (es decir, cuando el usuario lo marca o desmarca). Dependiendo del estado del interruptor, se activa el modo oscuro o el modo claro.

**Métodos utilizados:**

- `addEventListener()` — Escucha el evento de cambio (`change`) en el interruptor de modo oscuro.
- **Condicionales** — Cambia entre los modos llamando a `activateDarkMode()` o `activateLightMode()`.

**Comportamiento:**

1. **Modo oscuro activado:**  
   Si el interruptor está marcado, se activa el modo oscuro.

2. **Modo claro activado:**  
   Si el interruptor no está marcado, se activa el modo claro.

https://github.com/falbmun0906/daw1b-2425-lmysgi-falbmun0906-web2/blob/0fa2937d287008b319f12563eb5e2f3cf72e3913/js/script.js#L142-L150
