// MENU RESPONSIVO -----------------------------------------------------------------------

// "inicia" o ícone de menu e a barra de navegação
menu = document.querySelector('.menu i');
navbar = document.querySelector('.header .navbar');

// abre e fecha o menu após o menu ser clicado
menu.onclick = () => {
    navbar.classList.toggle('active');
}

// seleciona todos os itens de menu
const menuItems = navbar.querySelectorAll('li');  // já que os itens do menu são <li> (se fossem <ul> era só muaar)

// adiciona o evento de clique em cada item de menu
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        navbar.classList.remove('active');  // após ser clicado, fehca o menu
    });
});


