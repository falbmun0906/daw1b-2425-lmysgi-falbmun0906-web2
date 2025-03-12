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

const addHeaderHoverEffects = () => {
    const header = document.querySelector('.header');
    if (header) {
        // Cambiar color de fondo al pasar el ratón
        header.addEventListener('mouseover', () => {
            header.style.backgroundColor = '#E8B8CF';
        });

        // Restaurar el color original al quitar el ratón
        header.addEventListener('mouseout', () => {
            header.style.backgroundColor = '';
        });

    } else {
        console.log('El elemento header no existe.');
    }
};

addHeaderHoverEffects();