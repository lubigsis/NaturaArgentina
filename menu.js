//Declaro una función  para proteger las variables y q' no se mezclen con otros archivos
(function(){

    let openButton = document.querySelector('.navegacion-menu'); //icono hamburguesa
    let menu = document.querySelector('.nav-link-menu');
    let closeMenu = document.querySelector('.nav-img-close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show'); //q' al ul se le agregue la clase 'nav__link--show' al hacer click
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });    

    //menu.classList.toggle('nav__link--show');  No me aparece el boton de cerrar


})();