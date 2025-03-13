// ===================== AGRUPANDO EN FUNCIONES REUTILIZABLES ========================== // 

// ==========================
// 1. Seleccionar y acceder a elementos del documento web
// ==========================

const selectElements = () => {
    // Selección por ID
    const logo = document.getElementById('logo');
    if (logo) console.log('Logo:', logo);

    // Selección por clase
    const navItems = document.getElementsByClassName('header__nav-item');
    if (navItems.length) console.log('Navegación (clase):', navItems);

    // Selección con querySelector
    const firstNavItem = document.querySelector('.header__nav-item');
    if (firstNavItem) console.log('Primer ítem de navegación:', firstNavItem);

    // Selección múltiple con querySelectorAll
    const allNavLinks = document.querySelectorAll('.header__nav-link');
    if (allNavLinks.length) console.log('Todos los enlaces de navegación:', allNavLinks);
};

selectElements();

// ==========================
// 2. Crear y añadir nuevos elementos dinámicamente
// ==========================

const addJoinButton = () => {
    const newsletterSection = document.querySelector('.main__newsletter');
    if (newsletterSection) {
        // Crear el botón
        const button = document.createElement('button');
        button.textContent = '¡Únete ahora!';
        button.classList.add('cta-button');

        // Añadir el botón al contenedor de newsletter
        newsletterSection.appendChild(button);
    } else {
        console.log('El contenedor de newsletter no existe.');
    }
};

addJoinButton();

// ==========================
// 3. Modificar el contenido y atributos de elementos existentes
// ==========================

const modifyContentAndAttributes = () => {
    const newsletterTitle = document.querySelector('.newsletter__title');
    if (newsletterTitle) {
        newsletterTitle.textContent = '¡Recibe las mejores ofertas para tu mascota!';
    } else {
        console.log('El título de la newsletter no existe.');
    }

    const emailInput = document.querySelector('.newsletter__input');
    if (emailInput) {
        emailInput.setAttribute('placeholder', 'Introduce tu email aquí 🐾');
    } else {
        console.log('El campo de email no existe.');
    }
};

modifyContentAndAttributes();

// ==========================
// 4. Eliminar elementos del DOM
// ==========================

const removeFirstFAQ = () => {
    const firstFAQ = document.querySelector('.faq__item');
    const faqContainer = document.querySelector('.main__faq');

    if (firstFAQ && faqContainer) {
        // Verificamos que firstFAQ sea un hijo de faqContainer antes de eliminarlo
        if (faqContainer.contains(firstFAQ)) {
            firstFAQ.remove(); // Eliminar el primer FAQ
            console.log('Primer FAQ eliminado.');
        } else {
            console.log('El FAQ no es un hijo del contenedor.');
        }
    } else {
        console.log('No se encontró el primer FAQ o el contenedor de FAQ.');
    }
};

removeFirstFAQ();

// ==========================
// 5. Manipular estilos dinámicamente
// ==========================

// Función para activar el modo oscuro
const activateDarkMode = () => {
    const root = document.documentElement;
    const headerBackground = document.querySelector('.header__background');
    const toggleLabel = document.querySelector('.toggle-label i');  // Aseguramos que toggleLabel siempre sea el ícono
    
    root.style.setProperty('--color-primario', '#2c2c2c');
    root.style.setProperty('--color-secundario', 'transparent'); // Header transparente
    root.style.setProperty('--color-acento', '#3a3a3a');
    root.style.setProperty('--color-fondo', '#121212');
    root.style.setProperty('--color-texto', '#f5f5f5');
    
    // Cambia el fondo general y el del header para el modo noche
    document.body.style.backgroundImage = "url('assets/backgrounds/liquid-cheese-black.svg')";
    headerBackground.style.backgroundImage = "url('assets/backgrounds/liquid-cheese-black.svg')";
    
    if (toggleLabel) {
      toggleLabel.classList.remove('fa-sun');
      toggleLabel.classList.add('fa-moon');
    }
  };
  
  // Función para restaurar el modo claro
  const activateLightMode = () => {
    const root = document.documentElement;
    const headerBackground = document.querySelector('.header__background');
    const toggleLabel = document.querySelector('.toggle-label i');  // Aseguramos que toggleLabel siempre sea el ícono
    
    root.style.setProperty('--color-primario', '#b5c6d8');
    root.style.setProperty('--color-secundario', '#90A8C3');
    root.style.setProperty('--color-acento', '#F4CAE0');
    root.style.setProperty('--color-fondo', '#D7B9D5');
    root.style.setProperty('--color-texto', '#ffffff');
    
    // Restaura el fondo general y el del header al modo claro
    document.body.style.backgroundImage = "url('assets/backgrounds/liquid-cheese.svg')";
    headerBackground.style.backgroundImage = "url('assets/backgrounds/sssurf.svg')";
    
    if (toggleLabel) {
      toggleLabel.classList.remove('fa-moon');
      toggleLabel.classList.add('fa-sun');
    }
  };
  
  // Función para activar o desactivar el modo oscuro
  const darkModeToggle = document.getElementById('darkModeToggle');
  darkModeToggle.addEventListener('change', () => {
    const toggleLabel = document.querySelector('.toggle-label i'); // Aseguramos que siempre se encuentra el ícono
    if (darkModeToggle.checked) {
      activateDarkMode();
    } else {
      activateLightMode();
    }
  });