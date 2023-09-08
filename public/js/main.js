const menuEmail = document.querySelector('.navbar-email');
const burguerMenu = document.querySelector('.menu');
const cartMenu = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail2');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
cartMenu.addEventListener('click', toggleCartAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
      aside.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
  }

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
      aside.classList.add('inactive'); 
    }
    
    mobileMenu.classList.toggle('inactive');
  }

  function toggleCartAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive'); 
    }
    
    aside.classList.toggle('inactive');
    desktopMenu.classList.add('inactive'); // Agregar esta línea para ocultar desktopMenu
}