/*Animação em movimento de rotação ao mover o mouse acima da primeira curiosidade*/

const artigo = document.querySelector('.curiosidades');
const cartoes = document.querySelector('.curios1');

artigo.addEventListener('mousemove', (e) => {
    let eixoX = (window.innerWidth / 2 - e.pageX) / 15;
    let eixoY = (window.innerHeight / 2 - e.pageY) / 15;
    cartoes.style.transform = `rotateY(${eixoX}deg) rotateX(${eixoY}deg)`;
});

