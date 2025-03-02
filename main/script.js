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



// SLIDE NOVIDADES ----------------------------------------------------------------------

const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 4000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 4000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}



document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.metrica h2');
    
    const countUp = (element) => {
        const target = +element.getAttribute('data-target');
        let current = 0;
        
        // Aumento da velocidade: aumentando o incremento
        const increment = target / 100; // 100 passos para uma contagem mais rápida
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                // Se o número for 40 ou 98, adiciona o símbolo de porcentagem durante a contagem
                if (target === 40 || target === 98) {
                    element.innerText = `${Math.ceil(current)}%`;
                } else {
                    element.innerText = Math.ceil(current);
                }
                requestAnimationFrame(updateCounter);
            } else {
                // Garante que o número final tenha o símbolo de porcentagem
                if (target === 40 || target === 98) {
                    element.innerText = `${target}%`;
                } else {
                    element.innerText = target;
                }
            }
        };
        
        updateCounter();
    };
    
    // Mostrar os números ao rolar até a seção
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                countUp(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
});
