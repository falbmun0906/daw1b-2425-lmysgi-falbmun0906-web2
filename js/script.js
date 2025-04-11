// ==========================
// 1. (PRODUCTS) Crear un sistema de galería interactiva donde las imágenes puedan añadirse o eliminarse dinámicamente.
// ==========================

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


// ==========================
// 2. (BLOG) Diseñar un formulario con validación dinámica que muestre mensajes de error o éxito según la interacción del usuario.
// ==========================

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

// ==========================
// 2. (BLOG) Implementar un sistema de filtros que permita mostrar u ocultar elementos de la página (por ejemplo, productos o entradas de blog) según criterios seleccionados por el usuario.
// ==========================

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