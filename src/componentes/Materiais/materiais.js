const materiaisBotao = document.getElementById('materiaisBotao')

function addContentMateriais(){
    const main = document.getElementById('main')
    main.innerHTML = `
        <h1 class="titulo">MATERIAIS</h1>
        <div class="listaMateriais">
            <ul class="materialCatalogo">
                <h2>AVIAMENTOS E ENFEITES</h2>
                <div>
                <img src="/src/componentes/Materiais/img/Brasil_Botões.jpg" alt="Botões e Aviamentos">
                <img src="/src/componentes/Materiais/img/beads-2684881_1280.jpg" alt="Botões e Aviamentos">
                <img src="/src/componentes/Materiais/img/christmas-3861993_1280.jpg" alt="Botões e Aviamentos">
            </div>
            <p>Aviamentos e enfeites feitos com embalagens e botões descartados em parceria com a empresa Brasil Botões.</p>
            </ul>
            <br>
            <div class="line"></div>
            <br>
            <ul class="materialCatalogo">
                <h2>BOX DE AMOSTRAS CORRUPIO STEM LOW AND HIGH</h2>
                <div>
                <img src="/src/componentes/Materiais/img/Box1_abertura.jpg" alt="BOX DE AMOSTRAS CORRUPIO STEM LOW AND HIGH">
                <img src="/src/componentes/Materiais/img/Box1_abertura2.jpg" alt="BOX DE AMOSTRAS CORRUPIO STEM LOW AND HIGH">
                <img src="/src/componentes/Materiais/img/fabric-3506846_1280.jpg" alt="BOX DE AMOSTRAS CORRUPIO STEM LOW AND HIGH">
            </div>
                <p>Box de amostras da linha de Revestimentos Fragmentos tamanho 10,5 x 14 cm.</p>
            </ul>
            <br>
            <div class="line"></div>
            <br>
            <ul class="materialCatalogo">
                <h2>CORRUPIO STEM LOW AND HIGH</h2>
                <div>
                <img src="/src/componentes/Materiais/img/capa.jpg" alt="CORRUPIO STEM LOW AND HIGH">
                <img src="/src/componentes/Materiais/img/capa3.jpg" alt="CORRUPIO STEM LOW AND HIGH">
                <img src="/src/componentes/Materiais/img/capa4.jpg" alt="CORRUPIO STEM LOW AND HIGH">
            </div>
                <p>Painéis de decoração fragmentos, revestimentos feitos 100% com resíduos plásticos pós-industriais e pós-consumo.</p>
            </ul>
            </div>
            <br>
            <div class="line"></div>
            <br>
            <ul class="materialCatalogo">
                <h2>BOX DE AMOSTRAS BYEPLASTIC FLEXÍVEL</h2>
                <div>
                <img src="/src/componentes/Materiais/img/Foto-Box-2.jpg" alt="BOX DE AMOSTRAS BYEPLASTIC FLEXÍVEL">
                <img src="/src/componentes/Materiais/img/Captura de tela 2024-11-20 151841.png" alt="BOX DE AMOSTRAS BYEPLASTIC FLEXÍVEL">
                <img src="/src/componentes/Materiais/img/Captura de tela 2024-11-20 151915.png" alt= "BOX DE AMOSTRAS BYEPLASTIC FLEXÍVEL">
            </div>
                <p>Peça nosso box de amostras! Ele permite que você conheça todas as propriedades técnicas e sensoriais exclusivas do Byeplastic.</p>
            </ul>
            </div>
            <br>
            <div class="line"></div>
            <br>
            <ul class="materialCatalogo">
                <h2>BYEPLASTIC FLEXÍVEL</h2>
                <div>
                <img src="/src/componentes/Materiais/img/Bye0.3-1.jpg" alt="BYEPLASTIC FLEXÍVEL">
                <img src="/src/componentes/Materiais/img/Byeplastic.jpg" alt="BYEPLASTIC FLEXÍVEL">
                <img src="/src/componentes/Materiais/img/polystyrene-911001_1280.jpg" alt= "BYEPLASTIC FLEXÍVEL">
            </div>
                <p>Feito com embalagens plásticas 100% reciclável e reciclável. Espessura 0,3 mm.</p>
            </ul>
            </div>
            <br>
            <div class="line"></div>
            <br>
            <ul class="materialCatalogo">
                <h2>BYEPLASTIC JEANS</h2>
                <div>
                <img src="/src/componentes/Materiais/img/4.jpg" alt="BYEPLASTIC JEANS">
                <img src="/src/componentes/Materiais/img/2.jpg" alt="BYEPLASTIC JEANS">
                <img src="/src/componentes/Materiais/img/1.jpg" alt= "BYEPLASTIC JEANS">
            </div>
                <p>Produtos com resíduos de denim pós consumo</p>
            </ul>
            </div>`
}

materiaisBotao.addEventListener('click',(e)=>{
    e.preventDefault()
    addContentMateriais()
})