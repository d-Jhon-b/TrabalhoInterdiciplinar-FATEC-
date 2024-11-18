/*introdução para nova pagina*/
const btn_SejaCatador_mobile= document.getElementById('SejaCatadorBTN_mobile')
const btn_SejaCatador_desktop= document.getElementById('SejaCatadorBTN_desktop')

function addContentSejaCatador(){
    const main=document.getElementById('main')
    main.innerHTML = " "
    main.innerHTML = `
        
    `
}


btn_SejaCatador_mobile.addEventListener('click',()=>{
    addContentSejaCatador()
})

btn_SejaCatador_desktop.addEventListener('click',()=>{
    addContentSejaCatador()
})