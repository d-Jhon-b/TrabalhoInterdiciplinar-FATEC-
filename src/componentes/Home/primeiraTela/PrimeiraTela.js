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
        imgSlide_um.style = `box-shadow: 12px 12px 2px 1px #fd64a8;`
        text.textContent = ''
        text_container_um.style = 'justify-content:start;'
        text.style = 'text-align:start; font-weight: 400;'
        text.textContent = "BOX DE AMOSTRAS BYEPLASTIC REVESTIMENTOS";        
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