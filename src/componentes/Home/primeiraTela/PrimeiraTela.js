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
        text.textContent = ''
        text_container_um.style = 'justify-content:end;'
        text.style = 'text-align:end;'
        text.textContent = "teste"
        verif = false
    }
    else{
        imgSlide_um.classList.add('movimentoSaida')
        imgSlide_um.classList.remove('movimento')
        text.textContent = ''
        text_container_um.style = 'justify-content:start;'
        text.style = 'text-align:start;'
        text.textContent = "tetetetehidbsaaidbsaiasbdojiasbndioajsuete";        
        verif = true        
    }    
}
function slide_dois(){
    if(verif){
        imgSlide_dois.classList.remove('movimentoSaida_dois')
        imgSlide_dois.classList.add('movimento_dois')
        text_dois.textContent = ''
        text_container_dois.style = 'justify-content:start;'
        text_dois.style = 'text-align:start;'
        text_dois.textContent = "teste"
        verif = false
    }
    else{
        imgSlide_dois.classList.remove('movimento_um')
        imgSlide_dois.classList.add('movimentoSaida_dois')
        text_dois.textContent = ''
        text_container_dois.style = 'justify-content:end;'
        text_dois.style = 'text-align:end;'
        text_dois.textContent = "tetetetehidbsaaidbsaiasbdojiasbndioajsuete";
        verif = true        
    }    
}