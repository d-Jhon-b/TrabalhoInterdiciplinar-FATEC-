const produtosBotao = document.getElementById('produtosBotao')

function addContentProdutos(){
    const main = document.getElementById('main')
    main.innerHTML = `    
        <h1 class="titulo">PRODUTOS</h1>
        <div class="line"></div>
        <div class="listaProduto">
            <ul class="produtoCatalogo">
                <h2>CORRUPIO LOOP LAMP</h2>
                <div>
                <img src="./src/componentes/produtos/img/c2-cópia.jpg" alt="CORRUPIO LOOP LAMP">
                <img src="./src/componentes/produtos/img/c2-cópia_i.jpg" alt="CORRUPIO LOOP LAMP">
                <img src="./src/componentes/produtos/img/c3.jpg" alt="CORRUPIO LOOP LAMP">
                </div>
                <p>Conheça a Corrupio Loop Lamp , uma luminária projetada para facilitar a montagem e a desmontagem, o reparo e atualização de suas peças.</p>
            </ul>
            <div class="line"></div>
            <ul class="produtoCatalogo">
                <h2>CORRUPIO FREE</h2>
                <div>
                <img src="https://the-gabriel-marques.github.io/TrabalhoInterdiciplinar-FATEC-/src/componentes/produtos/img/Corrupio_free_2.jpg" alt="CORRUPIO FREE">
                <img src="https://the-gabriel-marques.github.io/TrabalhoInterdiciplinar-FATEC-/src/componentes/produtos/img/Free_1.jpg" alt="CORRUPIO FREE">
                <img src="https://the-gabriel-marques.github.io/TrabalhoInterdiciplinar-FATEC-/src/componentes/produtos/img/Free_2-1.jpg" alt="CORRUPIO FREE">
            </div>
                <p>Além da facilidade de uso, nosso Corrupio Free não possui pés de metal e é toda feita de encaixes realizados 100% com materiais reciclados e recicláveis. </p>
            </ul>
            <div class="line"></div>
            <ul class="produtoCatalogo">
                <h2>CORRUPIO STEM LOW AND HIGH</h2>
                <div>
                <img src="https://the-gabriel-marques.github.io/TrabalhoInterdiciplinar-FATEC-/src/componentes/produtos/img/Corrupio_low_1.jpg" alt="CORRUPIO STEM LOW AND HIGH">
                <img src="https://the-gabriel-marques.github.io/TrabalhoInterdiciplinar-FATEC-/src/componentes/produtos/img/low_1.jpg" alt="CORRUPIO STEM LOW AND HIGH">
                <img src="https://the-gabriel-marques.github.io/TrabalhoInterdiciplinar-FATEC-/src/componentes/produtos/img/Low_2.jpg" alt="CORRUPIO STEM LOW AND HIGH">
            </div>
                <p>Corrupio versão Stem Low com base de metal para mesa e versão High com base alongada para apoio no chão. </p>
            </ul>
        </div>
        <div class="line"></div>
        <ul class="produtoCatalogo">
            <h2>CORRUPIO JARS</h2>
            <div>
            <img src="https://the-gabriel-marques.github.io/TrabalhoInterdiciplinar-FATEC-/src/componentes/produtos/img/Interno-Jars_1.jpg" alt="CORRUPIO JARS">
            <img src="https://the-gabriel-marques.github.io/TrabalhoInterdiciplinar-FATEC-/src/componentes/produtos/img/Interno-Jars_2.jpg" alt="CORRUPIO JARS">
            <img src="https://the-gabriel-marques.github.io/TrabalhoInterdiciplinar-FATEC-/src/componentes/produtos/img/Interno_Jars_4.jpg" alt= "CORRUPIO JARS">
        </div>
            <p>A linha Corrupios Jars oferece uma variação completa de combinações de texturas de cores e modelos. </p>
        </ul>
    </div>
    <div class="line"></div>
    <ul class="produtoCatalogo">
        <h2>ÓCULOS</h2>
        <div>
        <img src="https://the-gabriel-marques.github.io/TrabalhoInterdiciplinar-FATEC-/src/componentes/produtos/img/Oculos_interno_1.jpg" alt="ÓCULOS">
        <img src="https://the-gabriel-marques.github.io/TrabalhoInterdiciplinar-FATEC-/src/componentes/produtos/img/Oculos_interno_2.jpg" alt="ÓCULOS">
        <img src="https://the-gabriel-marques.github.io/TrabalhoInterdiciplinar-FATEC-/src/componentes/produtos/img/Oculos_interno_3.jpg" alt= "ÓCULOS">
    </div>
        <p>Óculos de grau e sol da parceria Sagui + Rato feitos com embalagens de pasta de dente e embalagens de alimento e transporte recuperadas.</p>
    </ul>
    </div>
    <div class="line"></div>
    <ul class="produtoCatalogo">
        <h2>ESTOJOS E EMBALAGENS</h2>
        <div>
        <img src="https://the-gabriel-marques.github.io/TrabalhoInterdiciplinar-FATEC-/src/componentes/produtos/img/briefcase-1743497_1280.jpg" alt="ESTOJOS E EMBALAGENS">
        <img src="https://the-gabriel-marques.github.io/TrabalhoInterdiciplinar-FATEC-/src/componentes/produtos/img/embalagem-interna_1-1.jpg" alt="ESTOJOS E EMBALAGENS">
        <img src="https://the-gabriel-marques.github.io/TrabalhoInterdiciplinar-FATEC-/src/componentes/produtos/img/Embalagem-interna_2.jpg" alt= "ESTOJOS E EMBALAGENS">
    </div>
        <p>Produtos com resíduos de denim pós consumo</p>
    </ul>
    </div>`
}

produtosBotao.addEventListener('click',(e)=>{
    e.preventDefault()
    addContentProdutos()
})
