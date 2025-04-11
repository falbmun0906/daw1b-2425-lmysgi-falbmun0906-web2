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

# FASE 3: Funcionalidades Interactivas.

### Función **`thumbnail.addEventListener('click')`**

Esta función se activa cuando el usuario hace clic en una miniatura de imagen (`.gallery__thumbnail`) dentro de un producto destacado. Permite **cambiar dinámicamente la imagen principal del producto** sin recargar la página.

**Métodos utilizados:**

- `querySelectorAll()` — Selecciona todos los productos (`.product`) y, dentro de cada uno, sus miniaturas.
- `addEventListener('click')` — Añade un evento a cada miniatura para detectar cuándo el usuario hace clic.
- **Manipulación del DOM** — Se cambia el atributo `src` de la imagen principal (`.product__image`) para actualizarla con la imagen seleccionada.

**Modificaciones en HTML**

Para implementar la funcionalidad de cambiar la imagen principal del producto al hacer clic en una miniatura, ha sido necesario añadir al documento HTML un conjunto de miniaturas por cada producto destacado. Al hacer clic en cualquiera de las miniaturas, la imagen principal se actualiza dinámicamente sin recargar la página.

```html
<div class="product">
    <img class="product__image" src="path-to-main-image.jpg" alt="Imagen principal del producto">
    <div class="gallery__thumbnails">
        <img class="gallery__thumbnail" src="path-to-thumbnail-1.jpg" alt="Miniatura 1">
        <img class="gallery__thumbnail" src="path-to-thumbnail-2.jpg" alt="Miniatura 2">
        <img class="gallery__thumbnail" src="path-to-thumbnail-3.jpg" alt="Miniatura 3">
    </div>
</div>
```

**Comportamiento:**

1. **El usuario ve un producto con varias miniaturas debajo.**  
   Cada miniatura representa una vista distinta del producto.

2. **El usuario hace clic en una miniatura.**  
   Se actualiza la imagen principal del producto con la imagen de esa miniatura.

3. **La experiencia de compra es más rica e interactiva.**  
   El cliente puede ver el producto desde distintos ángulos o en distintos colores.

**Fragmento relevante del código:**

```js
document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const thumbnails = product.querySelectorAll('.gallery__thumbnail');
        const mainImage = product.querySelector('.product__image');

        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                mainImage.src = thumbnail.src;
            });
        });
    });
});
```

### Función **`Formulario con validación dinámica y mensajes de error o éxito`**

Esta función permite gestionar la validación dinámica de un formulario en una página web, mostrando mensajes de error o éxito según la interacción del usuario. Al intentar enviar el formulario, se verifica que todos los campos requeridos sean correctos, mostrando los mensajes apropiados sin necesidad de recargar la página.

**Métodos utilizados:**

- `addEventListener('submit')` — Añade un evento al formulario para escuchar cuando se intente enviar.
- `preventDefault()` — Evita que el formulario se envíe de manera convencional y recargue la página.
- `querySelectorAll()` — Selecciona todos los campos del formulario que son requeridos.
- `classList.add()` y `classList.remove()` — Añade o elimina clases CSS de los campos para resaltar errores de validación.
- `textContent` — Modifica el texto de un contenedor para mostrar mensajes de error o éxito.
- `focus()` — Coloca el foco en el primer campo inválido para mejorar la experiencia del usuario.

**Modificaciones en HTML**

Para implementar la funcionalidad, se ha añadido un contenedor para mostrar mensajes de validación, como "¡Registro exitoso!" o "Por favor, complete todos los campos correctamente.".

```html
<div class="main__community__form-container">
    <form>
        <input type="text" id="name" required placeholder="Nombre">
        <input type="email" id="email" required placeholder="Correo electrónico">
        <button type="submit">Enviar</button>
         ...
    </form>
    <div id="form-message" class="form-message"></div>
</div>
```

**Comportamiento:**

1. **El formulario es enviado.**  
   Cuando el usuario hace clic en el botón de envío, la función de validación es activada para verificar los campos requeridos.

2. **Validación de los campos.**  
   La función recorre todos los campos requeridos del formulario y verifica si están vacíos o si el email ingresado es inválido. Si alguno no cumple con los requisitos, se resalta el campo en rojo y se detiene el proceso.

3. **Mensajes de error o éxito.**  
   Si todos los campos son correctos, se muestra un mensaje de éxito ("¡Registro exitoso!"), y el formulario se reinicia. Si algún campo es inválido, se muestra un mensaje de error y se resalta el campo que tiene el problema.

4. **Interacción fluida.**  
   Los mensajes se muestran de manera dinámica sin necesidad de recargar la página, y el usuario puede corregir fácilmente los errores al ser guiado visualmente.

**Fragmento relevante del código:**

```js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.main__community__form-container form');
  const inputs = form.querySelectorAll('input[required]');
  const messageContainer = document.getElementById('form-message');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Previene el envío por defecto

    let isValid = true;
    let firstInvalidInput = null;

    // Limpia mensajes anteriores
    messageContainer.textContent = '';
    messageContainer.className = 'form-message';

    // Recorre todos los campos requeridos
    inputs.forEach(input => {
      input.classList.remove('input-error');
      if (!input.value.trim()) {
        isValid = false;
        input.classList.add('input-error');
        if (!firstInvalidInput) firstInvalidInput = input;
      } else if (input.type === 'email' && !validateEmail(input.value)) {
        isValid = false;
        input.classList.add('input-error');
        if (!firstInvalidInput) firstInvalidInput = input;
      }
    });

    if (!isValid) {
      messageContainer.textContent = 'Por favor, completa todos los campos correctamente.';
      messageContainer.classList.add('error');
      firstInvalidInput.focus();
    } else {
      messageContainer.textContent = '¡Registro exitoso!';
      messageContainer.classList.add('success');
      form.reset();
    }
  });

  function validateEmail(email) {
    // Validación simple de email
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});
```

### Función **`Filtrado de perros de adopción con mensaje de "No se han encontrado coincidencias"`**

Esta función gestiona el filtrado dinámico de una lista de perros en adopción según los criterios seleccionados por el usuario. Cuando el formulario de filtros es enviado, se verifican los criterios de búsqueda y se muestran u ocultan los perros según las opciones seleccionadas. Si no hay resultados que coincidan con los filtros, se muestra un mensaje indicando que no se encontraron coincidencias.

**Métodos utilizados:**

- `addEventListener('submit')` — Añade un evento al formulario para escuchar cuando se intente enviar.
- `preventDefault()` — Evita que la página se recargue cuando el formulario es enviado.
- `querySelectorAll()` — Selecciona todos los perros de la lista para poder aplicar el filtrado.
- `textContent` — Modifica el texto de un contenedor para mostrar el mensaje "No se han encontrado coincidencias".
- `style.display` — Controla la visibilidad de los perros y el mensaje de error, mostrándolos u ocultándolos según corresponda.

**Modificaciones en HTML**

Para implementar la funcionalidad de filtrado de perros de adopción en la página, ha sido necesario añadir al documento HTML una sección de filtros con un formulario interactivo. Este formulario permite a los usuarios seleccionar criterios específicos para filtrar los perros en adopción. Los filtros incluyen opciones para la raza, el tamaño, el nivel de actividad y la edad del perro.

```html
<section class="main__adoption__filters">
                <form id="adoption-filters">
                    <select id="breed">
                        <option value="all" selected>Raza</option>
                        <option value="labrador">Labrador Retriever</option>
                        <option value="border-collie">Border Collie</option>
                        <option value="galgo-italiano">Galgo Italiano</option>
                    </select>
                
                    <select id="size">
                        <option value="all" selected>Tamaño</option>
                        <option value="grande">Grande</option>
                        <option value="mediano">Mediano</option>
                        <option value="pequeño">Pequeño</option>
                    </select>
                
                    <select id="activity">
                        <option value="all" selected>Nivel de actividad</option>
                        <option value="alto">Alto</option>
                        <option value="moderado">Moderado</option>
                        <option value="bajo">Bajo</option>
                    </select>

                    <select id="age">
                        <option value="all" selected>Edad</option>
                        <option value="1">1 año</option>
                        <option value="4">4 años</option>
                    </select>
                
                    <button type="submit">Filtrar</button>
                </form>
            </section>
```

**Comportamiento:**

1. **El formulario es enviado.**  
   Cuando el usuario hace clic en el botón de "Filtrar", la función de filtrado es activada para verificar los criterios seleccionados y procesar la lista de perros.

2. **Filtrado de los perros.**  
   La función recorre todos los perros en la página y verifica si coinciden con los filtros seleccionados para la raza, tamaño, nivel de actividad y edad. Si un perro no cumple con los criterios, se oculta; si cumple, se muestra.

3. **Mensaje de "No se han encontrado coincidencias".**  
   Si no hay perros que coincidan con los filtros, se muestra un mensaje debajo del formulario indicando que no se encontraron resultados.

4. **Interacción fluida.**  
   El filtrado se realiza de manera dinámica sin necesidad de recargar la página, y el usuario recibe un mensaje claro si no se encuentran coincidencias.

**Fragmento relevante del código:**

```js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('adoption-filters');
    const dogs = document.querySelectorAll('.main__adoption__card');
    const noResultsMessage = document.querySelector('.no-results-message'); // Usamos la clase aquí

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evitar que la página se recargue

        const breed = document.getElementById('breed').value;
        const size = document.getElementById('size').value;
        const activity = document.getElementById('activity').value;
        const age = document.getElementById('age').value;

        let foundMatch = false; // Variable para saber si hay coincidencias

        dogs.forEach(dog => {
            const dogBreed = dog.querySelector('.main__adoption__breed').textContent.toLowerCase();
            const dogSize = dog.querySelector('.main__adoption__size').textContent.toLowerCase();
            const dogActivity = dog.querySelector('.main__adoption__activity').textContent.toLowerCase();
            const dogAge = dog.querySelector('.main__adoption__age').textContent.toLowerCase();

            // Comprobamos si el perro cumple con los filtros seleccionados
            const matchesBreed = breed === 'all' || dogBreed.includes(breed);
            const matchesSize = size === 'all' || dogSize.includes(size);
            const matchesActivity = activity === 'all' || dogActivity.includes(activity);
            const matchesAge = age === 'all' || dogAge.includes(age);

            // Mostrar u ocultar el perro según si cumple con todos los filtros
            if (matchesBreed && matchesSize && matchesActivity && matchesAge) {
                dog.style.display = ''; // Mostrar el perro
                foundMatch = true; // Si encontramos una coincidencia, marcamos que sí se encontraron
            } else {
                dog.style.display = 'none'; // Ocultar el perro
            }
        });

        // Si no se encontró ninguna coincidencia, mostrar el mensaje
        if (!foundMatch) {
            noResultsMessage.style.display = 'block'; // Mostrar el mensaje
        } else {
            noResultsMessage.style.display = 'none'; // Ocultar el mensaje si hay resultados
        }
    });
});
```
