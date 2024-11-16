const openbtn = document.getElementById('open')
const closebtn=document.getElementById('close')
openbtn.addEventListener('click',()=>{
    const content=document.getElementById('list_content_mobile');
    const container=document.querySelector(".nav-bar_mobile")
    content.style = 'margin-left:-0%; transition:1s;'
    container.style = "z-index: 4;"
    openbtn.style = 'display:none;'
})
closebtn.addEventListener('click',()=>{
    const content=document.getElementById('list_content_mobile');
    const container=document.querySelector(".nav-bar_mobile")
    content.style = 'margin-left:-60%; transition:1s;'
    container.style = "z-index: 3;"
    openbtn.style = 'display:inline; transition:2s;'
})