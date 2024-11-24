/*introdução para nova pagina*/
const btn_SejaCatador_mobile= document.getElementById('SejaCatadorBTN_mobile')
const btn_SejaCatador_desktop= document.getElementById('SejaCatadorBTN_desktop')

function addContentSejaCatador(){
    const main=document.getElementById('main')
    main.innerHTML = " "
    main.innerHTML = `
        <section class="SejaCatador_Section">
          <article class="title_section_SejaCatador">
            <div class="title_SejaCatador"><h1>SEJA UM CATADOR PARCEIRO</h1></div>
            <div class="sub_title_SejaCatador"><h1>Têm interresse em trabalhar junto da RatoRói?<br>Entre em contato com a nossa equipe</h1></div>
          </article>
          <div class="content_SejaCatador">
          <article class="input_section_SejaCatador">
            <form id="form_SejaCatador">
              <div class="content_form">
                <label for="NameUser">Nome completo</label>
                <input type="text" name="nome" id="NameUser" placeholder="Nome*" required>
                <label for="NumeroUser">Telefone</label>
                <input type="tel" name="numeroTel" id="NumeroUser" placeholder="Ex: (11) 91234-5678*" required pattern="^\([1-9]{2}\)\s9[1-9]{1}[0-9]{3}-[0-9]{4}$">
                <!-- <span>Formato: (XX) 9XXXX-XXXX</span> -->
                <label for="EmailUser">Email completo</label>
                <input type="email" name="email" id="EmailUser" placeholder="E-mail*" required>
                    <button id="btn_send">Enviar</button>
                </div>
            </form>
          </article>
          <article class="img_section_SejaCatador">
            <img src="/src/componentes/SejaCatador/img/sustentavel.png" alt="">
          </article>
          </div>
        </section>
    `
}


btn_SejaCatador_mobile.addEventListener('click',()=>{
    addContentSejaCatador()
})

btn_SejaCatador_desktop.addEventListener('click',()=>{
    addContentSejaCatador()
})

const btnDataColect=document.getElementById('btn_send')
btnDataColect.addEventListener('click',()=>{
    
})