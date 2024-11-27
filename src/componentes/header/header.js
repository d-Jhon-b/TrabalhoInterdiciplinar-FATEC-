export function Headerbuild(){
    const nav = document.createElement('nav')
    nav.className = "nav-bar_mobile"
    nav.innerHTML = ` 
            <div class="list_content_mobile" id="list_content_mobile">
                    <div class="icone_fechar" id="close">
                        <div class="line1 line"></div>
                        <div class="line2 line"></div>
                    </div>
                    <div class="list_content">
                    <button id="materiais">Materiais</button>
                    <button id="produtos">Produtos</button>
                    <a href="/">Produção</a>
                    <button id="SejaCatadorBTN_mobile">Seja um Associado</button>
                    </div>
                </div>
            </nav>
            <div class="empresa_nome_mobile">
                <a href="/index.html">
                    <img src="./src/img/header/titulo.png" alt="">
                </a>
            </div>
            <div class="icone" id="open">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>  
            <nav class="nav-bar">
                <div class="lista-navigation">
                    <ul>
                        <div class="empresa_nome">
                            <a href="/index.html">
                                <img src="./src/img/header/titulo.png" alt="">
                            </a>
                        </div>
                        <div class="lista_Conteudo">
                            <li><a href="/src/componentes/Materiais/materiais.html" id="materiaisBotao">Materiais</a></li>
                            <li><a href="/src/componentes/produtos/produtos.html" id="produtosBotao">Produtos</a></li>
                            <li><a href="/" class="nav-link">Dados</a></li>
                            <li><a href="/" class="nav-link">Produção</a></li>
                            <li><button id="SejaCatadorBTN_desktop">Seja um Associado</button></li>
                        </div>
                    </ul>
                </div>
            </nav>
    `
    return nav
}



