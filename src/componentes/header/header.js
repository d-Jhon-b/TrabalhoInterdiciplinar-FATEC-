// const header = document.getElementById('header')
// header.innerHTML = `
//     <nav class="nav-bar_mobile">     
//             <div class="list_content_mobile" id="list_content_mobile">
//                 <div class="icone_fechar" id="close">
//                     <div class="line1 line"></div>
//                     <div class="line2 line"></div>
//                 </div>
//                 <div class="list_content">
//                 <a href="/">Materiais</a>
//                 <a href="/">Produtos</a>
//                 <a href="/">Produção</a>
//                 <a href="/">Produção</a>
//                 <a href="/" id="btn_seja_catador">Seja um Associado</a>
//                 </div>
//             </div>
//         </nav>
//         <div class="empresa_nome_mobile">
//             <a href="/">
//                 <img src="./src/componentes/header/img/titulo.png" alt="">
//             </a>
//         </div>
//         <div class="icone" id="open">
//             <div class="line"></div>
//             <div class="line"></div>
//             <div class="line"></div>
//             <div class="line"></div>
//             <div class="line"></div>
//         </div>  
//         <nav class="nav-bar">
//             <div class="lista-navigation">
//                 <ul>
//                     <div class="esquerda-header">
//                         <li><a href="/">Materiais</a></li>
//                         <li><a href="/">Produtos</a></li>
//                     </div>
//                     <div class="empresa_nome">
//                         <a href="/">
//                             <img src="./src/componentes/header/img/titulo.png" alt="">
//                         </a>
//                     </div>
//                     <div class="direita-header">
//                         <li><a href="/">Produção</a></li>
//                         <li><a href="/">Produção</a></li>
//                         <li><a id="nav-link" href="/" id="btn_seja_catador">Seja um Associado</a></li>
//                     </div>
//                 </ul>
//             </div>
//         </nav>
// `






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