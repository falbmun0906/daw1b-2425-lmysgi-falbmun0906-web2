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
  const inputs = form.querySelectorAll('input');
  const messageContainer = document.getElementById('form-message');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Previene el envío por defecto

    let isValid = true;
    let firstInvalidInput = null;

    // Limpia los mensajes anteriores
    messageContainer.textContent = '';
    messageContainer.className = 'form-message'; // Asegura que no haya clases previas

    // Recorre todos los campos de entrada
    inputs.forEach(input => {
      input.classList.remove('input-error'); // Elimina los estilos de error previos

      // Validación personalizada para cada campo
      if (!input.value.trim()) {
        isValid = false;
        input.classList.add('input-error'); // Añade el estilo de error
        if (!firstInvalidInput) firstInvalidInput = input;
        setErrorMessage('Por favor, completa todos los campos correctamente.');
      } else {
        switch (input.id) {
          case 'dni':
            if (!validateDNI(input.value)) {
              isValid = false;
              input.classList.add('input-error');
              if (!firstInvalidInput) firstInvalidInput = input;
              setErrorMessage('El DNI debe tener el siguiente formato: 12345678A');
            }
            break;
          case 'first-name':
          case 'last-name':
          case 'locality':
          case 'country':
            if (!validateLetters(input.value)) {
              isValid = false;
              input.classList.add('input-error');
              if (!firstInvalidInput) firstInvalidInput = input;
              setErrorMessage('Este campo solo puede contener letras.');
            }
            break;
          case 'postal-code':
            if (!validatePostalCode(input.value)) {
              isValid = false;
              input.classList.add('input-error');
              if (!firstInvalidInput) firstInvalidInput = input;
              setErrorMessage('El código postal debe tener 5 dígitos.');
            }
            break;
          case 'email':
            if (!validateEmail(input.value)) {
              isValid = false;
              input.classList.add('input-error');
              if (!firstInvalidInput) firstInvalidInput = input;
              setErrorMessage('Por favor, introduce una dirección de correo válida.');
            }
            break;
          default:
            break;
        }
      }
    });

    if (isValid) {
      messageContainer.textContent = '¡Registro exitoso!';
      messageContainer.classList.add('success');
      form.reset();
    }

    if (firstInvalidInput) {
      firstInvalidInput.focus();
    }
  });

  // Función para establecer el mensaje de error en el contenedor #form-message
  function setErrorMessage(message) {
    messageContainer.textContent = message;
    messageContainer.classList.add('error');
  }

  // Función de validación para el DNI
  function validateDNI(dni) {
    const dniRegex = /^\d{8}[A-Za-z]$/;
    return dniRegex.test(dni);
  }

  // Función de validación para solo letras (primer nombre, apellido, etc.)
  function validateLetters(value) {
    return /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/.test(value);
  }

  // Función de validación para el código postal (5 dígitos)
  function validatePostalCode(postalCode) {
    return /^\d{5}$/.test(postalCode);
  }

  // Función de validación para el correo electrónico
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});

// ==========================
// 3. (BLOG) Implementar un sistema de filtros que permita mostrar u ocultar elementos de la página (por ejemplo, productos o entradas de blog) según criterios seleccionados por el usuario.
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
            const matchesBreed = breed === 'all' || dogBreed.includes(breed.replace('-', ' '));
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

// ==========================
// 4. (PRODUCTS) Crear un flujo libre del proyecto: proceso de incluir productos al carrito de compra.
// ==========================

document.addEventListener("DOMContentLoaded", () => {
  // Obtener elementos del carrito
  const cartDropdown = document.getElementById("cartDropdown");
  const openCartButton = document.getElementById("openCart");
  const cartCount = document.getElementById("cartCount");
  const cartTotal = document.getElementById("cartTotal");
  const cartItemsContainer = document.querySelector(".cart__items");

  // Array para guardar los productos en el carrito
  let cartItems = [];

  // Mostrar/ocultar el carrito cuando se hace clic en el icono
  openCartButton.addEventListener("click", (e) => {
    e.stopPropagation();
    cartDropdown.style.display = cartDropdown.style.display === "block" ? "none" : "block";
  });

  // Cerrar el carrito si se hace clic fuera
  document.addEventListener("click", (e) => {
    if (!cartDropdown.contains(e.target) && !openCartButton.contains(e.target)) {
      cartDropdown.style.display = "none";
    }
  });

  // Función para añadir productos al carrito
  const addToCart = (productName, productPrice) => {
    cartItems.push({ name: productName, price: productPrice });
    updateCartUI();
  };

  // Función para actualizar la interfaz del carrito
  const updateCartUI = () => {
    cartItemsContainer.innerHTML = "";

    cartItems.forEach((item, index) => {
      const cartItem = document.createElement("li");
      cartItem.classList.add("cart__item");

      cartItem.innerHTML = `
        <p>${item.name}</p>
        <p>${item.price}</p>
        <button class="cart__remove-btn" data-index="${index}">X</button>
      `;

      cartItemsContainer.appendChild(cartItem);
    });

    // Botones para eliminar productos
    const removeButtons = document.querySelectorAll(".cart__remove-btn");
    removeButtons.forEach(button => {
      button.addEventListener("click", (e) => {
        const index = parseInt(e.target.dataset.index, 10);
        cartItems.splice(index, 1);
        updateCartUI();
      });
    });

    // Total del carrito
    const total = cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace(" €", "")), 0);
    cartTotal.textContent = `${total.toFixed(2)} €`;

    // Contador de productos
    cartCount.textContent = cartItems.length;
  };

  // Evento para los botones de "Añadir al carrito"
  const cartButtons = document.querySelectorAll(".product__cart-button");
  cartButtons.forEach(button => {
    button.addEventListener("click", (event) => {
      const product = event.target.closest(".product");
      const productName = product.querySelector(".product__name").textContent;
      const productPrice = product.querySelector(".product__price").textContent;
      addToCart(productName, productPrice);
    });
  });
});
