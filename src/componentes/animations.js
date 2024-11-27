//header
// document.getElementById("materiais").addEventListener("click", function () {
//     window.location.href = "src/componentes/Materiais/materiais.html";
// });

// document.getElementById("produtos").addEventListener("click", function () {
//     window.location.href = "src/componentes/produtos/produtos.html";
// });

const openbtn = document.getElementById('open')
const closebtn=document.getElementById('close')
openbtn.addEventListener('click',()=>{
    const content=document.getElementById('list_content_mobile');
    const container=document.querySelector(".nav-bar_mobile")
    content.style = 'margin-right:-2%; transition:1s;'
    container.style = "z-index: 4;"
    openbtn.style = 'display:none;'
})
closebtn.addEventListener('click',()=>{
    const content=document.getElementById('list_content_mobile');
    const container=document.querySelector(".nav-bar_mobile")
    content.style = 'margin-right:-60%; transition:1s;'
    container.style = "z-index: 3;"
    openbtn.style = 'display:inline; transition:2s;'
})


//main

    //home - slides
let count=1;
let countmobile=1;
document.getElementById('radioData1').checked = true;
document.getElementById('radio1').checked=true
setInterval(function(){
    nextImgData()
    nextImg();
},5000)
function nextImgData(){
    count++
    if(count>4){
        count = 1;
    }
    document.getElementById('radioData'+count).checked=true
}
function nextImg(){
    countmobile++
    if(countmobile >4){
        countmobile = 1;
    }
    document.getElementById('radio'+countmobile).checked=true
}

// document.getElementById("saibaMaisMateriais").addEventListener("click", function () {
//     window.location.href = "src/componentes/Materiais/materiais.html";
// });

// document.getElementById("saibaMaisProdutos").addEventListener("click", function () {
//     window.location.href = "src/componentes/produtos/produtos.html";
// });


//main mobile
    //tela 1
    let imgSlide_um = document.getElementById('slide_um')
let imgSlide_dois = document.getElementById('slide_dois')
const text_container_um = document.querySelector('.text_um')
const text_container_dois=document.querySelector('.text_dois')
let text = document.querySelector('.conteudo_um')
let text_dois =document.querySelector('.conteudo_dois')
let verif = true;

function slide_um(){
    if(verif){
        imgSlide_um.classList.add('movimento')
        imgSlide_um.classList.remove('movimentoSaida')
        imgSlide_um.style = `box-shadow: 12px 12px 2px 1px #008cff;`
        text.textContent = ' '
        text_container_um.style = 'justify-content:end;'
        text.style = 'text-align:justify;'
        text.textContent = ` No Box você recebe 5 peças 
        com estéticas diferentes para conhecer melhor nossos 
        painéis 100% reciclados, com as espessuras 4 e 6mm.
        Perfeito para uso em revestimentos, tampos de mesa, balcões, nichos entre outros produtos.`
        verif = false
    }
    else{
        imgSlide_um.classList.add('movimentoSaida')
        imgSlide_um.classList.remove('movimento')
        imgSlide_um.style = `box-shadow: -12px 12px 2px 1px #fd64a8;`
        text.textContent = ''
        text_container_um.style = 'justify-content:start;'
        text.style = 'text-align:start; font-weight: 400;'
        text.textContent = "BOX DE AMOSTRAS CORRUPIO STEM LOW AND HIGH";        
        verif = true        
    }    
}
function slide_dois(){
    if(verif){
        imgSlide_dois.classList.remove('movimentoSaida_dois')
        imgSlide_dois.classList.add('movimento_dois')
        imgSlide_dois.style = "box-shadow: -12px 12px 2px 1px #008cff;"
        text_dois.textContent = ''
        text_container_dois.style = 'justify-content:start;'
        text_dois.style = 'text-align:start;'
        text_dois.textContent = `Luminária projetada para facilitar a montagem e a 
                                desmontagem, o reparo e atualização de suas peças.`
        verif = false
    }
    else{
        imgSlide_dois.classList.remove('movimento_um')
        imgSlide_dois.classList.add('movimentoSaida_dois')
        imgSlide_dois.style = 'box-shadow: 12px 12px 2px 1px #fd64a8;'
        text_dois.textContent = ''
        text_container_dois.style = 'justify-content:end;'
        text_dois.style = 'text-align:end;'
        text_dois.textContent = "CORRUPIO LOOP LAMP";
        verif = true        
    }    
}
    //tela 2
        //mobile

// cursor
const luz = document.querySelector('.luz');

document.addEventListener('mousemove', (event) => {
    luz.style.left = event.clientX + 'px';
    luz.style.top = event.clientY + 'px';
});