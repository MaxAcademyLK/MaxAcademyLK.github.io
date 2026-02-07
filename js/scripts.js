/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2026 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    const navbarToggler = document.body.querySelector('.navbar-toggler');

    // Navbar shrink function
    var navbarShrink = function (force) {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        const navbarExpanded = navbarToggler.classList.contains('navbar-expanded');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0 && !navbarExpanded) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
        if(force === true) {
            navbarCollapsible.classList.add('navbar-shrink');
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
    navbarToggler.addEventListener('click',  function(event) {
        const isCollapesed = navbarToggler.classList.contains('collapsed');
        if(!isCollapesed) {
            navbarToggler.classList.add('navbar-expanded');
        } else {
            navbarToggler.classList.remove('navbar-expanded');            
        }
        navbarShrink(!isCollapesed);
    }, true);
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

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});
