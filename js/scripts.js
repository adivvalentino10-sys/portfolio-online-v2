/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

<<<<<<< HEAD
=======
    // Project image modal for desktop and mobile
    const projectModal = document.getElementById('projectModal');
    const projectModalImage = projectModal ? projectModal.querySelector('.image-modal-image') : null;
    const projectModalClose = projectModal ? projectModal.querySelector('.image-modal-close') : null;

    if (projectModal && projectModalImage && projectModalClose) {
        const openProjectModal = (link) => {
            const previewImage = link.querySelector('img');
            if (!previewImage) return;

            projectModalImage.src = link.getAttribute('href');
            projectModalImage.alt = previewImage.getAttribute('alt') || 'Project preview';
            projectModal.classList.add('is-open');
            projectModal.setAttribute('aria-hidden', 'false');
            document.body.classList.add('modal-open');
        };

        const closeProjectModal = () => {
            projectModal.classList.remove('is-open');
            projectModal.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('modal-open');
        };

        document.querySelectorAll('.project-image-link').forEach((link) => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                openProjectModal(link);
            });
        });

        projectModalClose.addEventListener('click', closeProjectModal);

        projectModal.addEventListener('click', (event) => {
            if (event.target === projectModal) {
                closeProjectModal();
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && projectModal.classList.contains('is-open')) {
                closeProjectModal();
            }
        });
    }

>>>>>>> c764d7b (Initial portfolio commit)
});