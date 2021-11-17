/* --- JAVASCRIPT --- */

// alert('BOM DIA! \n Mensagem enviada pelo console')
// console.log('Exemplo de comando alert');

// let nome = prompt('Bem - Vindo(a) a Loja Game Mania. Qual o seu nome?')
// alert( nome + ', é um prazer ter você em nosso site! \nNavegue a vontade e qualquer dúvida é só chamar.')


function renderizarDestaques(){
    let destaque = document.getElementById("destaques")
    
    let produtos = [ /* lista dos produtos na seção destaque da index*/
        {
            imagem: "img/conjPS4.svg",
            produto: "Conjunto PS4 Completo",
            precoantes: "De: R$ 7.549,90",
            precodepois: "Por: R$ 5.999,90"
        },
        {
            imagem: "img/ps4Fifa22.svg",
            produto: "Jogo FIFA22 PS4",
            precoantes: "De: R$ 349,90",
            precodepois: "Por: R$ 284,90"
        },
        {
            imagem: "img/tecladoGamer.svg",
            produto: "Teclado Gamer",
            precoantes: "De: R$ 298,90",
            precodepois: "Por: R$ 199,90"
        },
        {
            imagem: "img/cadeiraGamer.svg",
            produto: "Cadeira Gamer",
            precoantes: "De: R$ 1.229,90",
            precodepois: "Por: R$ 899,90"
        },
        {
            imagem: "img/controlePS4.svg",
            produto: "Par de Controle PS4",
            precoantes: "De: R$ 749,90",
            precodepois: "Por: R$ 659,90"
        },
        {
            imagem: "img/mouseGamer.svg",
            produto: "Mouse Gamer",
            precoantes: "De: R$ 259,90",
            precodepois: "Por: R$ 179,90"
        },
    ]
    
    let template = ""; /*variável para evitar bug de sobrescrever um sobre outro*/

    for (let index = 0; index < produtos.length; index++) {
        const prod = produtos[index];
        
        template += `<div class="card">
                        <div class="icon">
                            <img src="${prod.imagem}" alt="Conjunto PS4">
                        </div>
                        <h3>${prod.produto}</h3>
                        <span>${prod.precoantes}}</span>
                        <h3>${prod.precodepois}</h3>
                        <button>Comprar</button>
                    </div>`  /*template string*/

        destaque.innerHTML = template;
    }
}
/* --- JQUERY --- */ 