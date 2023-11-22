function toggleMenu() {
    const menuMobile = document.querySelector('.menu-mobile');
    menuMobile.classList.toggle('show-menu-mobile');
}

window.addEventListener('resize', function () {
    const menuMobile = document.querySelector('.menu-mobile');
    if (window.innerWidth > 768) {
        menuMobile.classList.remove('show-menu-mobile');
    }
});