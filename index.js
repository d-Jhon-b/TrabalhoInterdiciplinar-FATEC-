const main = document.getElementById('main')

main.innerHTML = `<section class="tela_desktop">
            <article class="content_video content_img">
                <div class="video_c img_c">
                    <!-- <img src="src/componentes/Home/primeiraTela/img/fundo.png" alt=""> -->
                    <div class="text_img_content_desktop">
                        <h6 class="text_titulo_desktop">TRANSFORMAMOS RESÍDUOS</h6>
                        <h6>EM REVOLUÇÃO</h6>
                    </div>
                </div>
            </article>
            <article class="container_info_desktop">
                <h1 class="titulo_desktop_tipo1">MATERIAIS</h1>
                <div class="content_info_desktop">
                    <div class="esquerda_info_desktop">
                        <h2>BOX DE AMOSTRAS CORRUPIO STEM LOW AND HIGH</h2>
                        <div class="text_info_desktop">
                            <p>
                                No Box você recebe 5 peças com estéticas diferentes para conhecer melhor nossos painéis 100% reciclados, com as espessuras 4 e 6mm.<br>
                                Perfeito para uso em revestimentos, tampos de mesa, balcões, nichos entre outros produtos.
                            </p>
                        </div>
                    </div>
                    <!-- /*arq*/ -->
                    <div class="direita_info_desktop card">
                        <div class="info_desktop_img flip">
                            <div class="front-card">
                                <img src="./src/componentes/Home/primeiraTela/img/materiais/material1.png" alt="m1" class="teste1">
                            </div>
                            <div class="back-card">
                                <img src="./src/componentes/Home/primeiraTela/img/materiais/material2.png" alt="">
                            </div>
                        </div>
                    </div>
                    <!-- /*arq*/ -->
                </div>
                <!--<div>
                    <button id="saibaMaisMateriais">Saiba mais sobre os Materiais</button>
                </div>-->
                <br>
                <br>
                <br>
                <div class="line"></div>
            </article>
            <article class="container_produto_desktop">
                <h1 class="titulo_desktop_tipo1">PRODUTOS</h1>
                <div class="content_produto_desktop">
                    <!-- /*arq*/ -->
                    <div class="esquerda_produto_desktop card">
                        <div class="produto_desktop_img flip">
                            <div class="front-card">
                                <img src="./src/componentes/Home/primeiraTela/img/produtos/produto1.jpg" alt="m1">
                            </div>
                            <div class="back-card">
                                <img src="./src/componentes/Home/primeiraTela/img/produtos/produto2.jpg" alt="m2">
                            </div>
                        </div>
                    </div>
                    <!-- /*arq*/ -->
                    <div class="direita_produto_desktop">
                        <h2 >CORRUPIO LOOP LAMP</h2>
                        <div class="text_produto_desktop">
                            <p>
                                luminária projetada para facilitar a montagem e a 
                                desmontagem, o reparo e atualização de suas peças.   
                            </p>
                        </div>
                    </div>
                </div>
               <!-- <div>
                    <button id="saibaMaisProdutos">Saiba mais sobre os Produtos</button>
                </div>-->
            </article>
            <br>
            <br>
            <br>
            <br>
            <article class="container_production_desktop">
                <h1 class="titulo_desktop_tipo1">PRODUÇÃO</h1>
                <section class="content_production_desktop">
                <div class="production_esquerda">
                    <p>
                        Aplicamos a estratégia de design circular:
                        design para fácil montagem e
                        desmontagem de componentes do produto,
                        design para recuperação de uso, design para
                        upcycling e evitar downcycling, design
                        para atualização e flexibilidade, projete com
                        monomaterial al, design para durabilidade,
                        design para rastreabilidade e retorno, então
                        que eles são facilmente reparados, feitos
                        disponível ou devolvido.
                    </p>
                </div>
                <div class="production_direita">
                    <img src="./src/componentes/imgs/cadeiaProdutiva.jpg" alt="" id="cadeiaProdutiva">
                </div>
                </section>
            </article>
            <article class="container_data_desktop">
                <h1 class="titulo_desktop_tipo1">DADOS</h1>
                <section class="slider_data">
                    <div class="slides-data">
                        <input type="radio" name="radio-data-btn" id="radioData1">
                        <input type="radio" name="radio-data-btn" id="radioData2">
                        <input type="radio" name="radio-data-btn" id="radioData3">
                        <input type="radio" name="radio-data-btn" id="radioData4">
                        <!-- slides -->
                         
                         <div class="slide_data data_first slide_1">
                            <img src="./src/componentes/Home/img/slides/2.png" alt="">
                            <p>50 kg de plástico reutilizados</p>
                         </div>
                         <div class="slide_data slide_2">
                            <img src="./src/componentes/Home/img/slides/b647cb22-1bde-414e-b48f-4092c1d46c25.jpg" alt="">
                            <p>60 kg de plástico reutilizados</p>
                         </div>
                         <div class="slide_data slide_3">
                            <img src="./src/componentes/Home/img/slides/TANIABULHOES_QUIOSQUE_camila-barrionovo-fotografia-ribeirao-preto-2.jpg" alt="">
                            <p>70 kg de plástico reutilizados</p>
                        </div>
                         <div class="slide_data slide_4">
                            <img src="./src/componentes/Home/img/slides/VO_EXPO_JK_LauraCampanella_0012.jpeg" alt="">
                            <p>80 kg de plástico reutilizados</p>
                        </div>
                        <!-- end slides -->
                        <!--navigation auto data-->
                         <div class="navigation-auto-data">
                            <div class="auto-data-btn1"></div>
                            <div class="auto-data-btn2"></div>
                            <div class="auto-data-btn3"></div>
                            <div class="auto-data-btn4"></div>
                         </div>
                         <div class="manual-data-navigation">
                            <label for="radioData1" class="manual-data-btn"></label>
                            <label for="radioData2" class="manual-data-btn"></label>
                            <label for="radioData3" class="manual-data-btn"></label>
                            <label for="radioData4" class="manual-data-btn"></label>
                        </div>
                    </div>            
                </section>
            </article>

        </section>


        <!-- VERSÃO MOBIILE -->
        <section class="tela_um tela">
            <article class="content_video content_img">
                <div class="video_c img_c">
                    <div class="text_video_content text_img_content">
                        <h6 class="text_titulo">TRANSFORMAMOS RESÍDUOS</h6>
                        <h6>EM REVOLUÇÃO</h6>
                    </div>
                </div>
            </article>
            <article class="content_info">
                <div class="bloco bloco_um">
                    <h1 class="titulo_home_page_tipo1">MATERIAIS</h1>
                    <div class="containte_slide" id="containte_slide">
                        <div class="text_slide_content text_slide_um">
                            <div class="text_um">
                                <p class="conteudo_um">BOX DE AMOSTRAS CORRUPIO STEM LOW AND HIGH</p>
                            </div>
                            <div class="img_slide_content img_slide_um"onclick="slide_um()" id="slide_um">
                                <img src="./src/componentes/Home/primeiraTela/img/materiais/material1.png" alt="img_exemplo" class="img_slide" id="img_slide" >
                            </div>
                        </div>
                    </div>
                </div>                    
                <div class="bloco bloco_dois">
                    <h1 class="titulo_home_page_tipo1">PRODUTOS</h1>
                    <div class="containte_slide">
                        
                        <div class="text_slide_content text_slide_dois">
                            <div class="text_dois">
                                <p class="conteudo_dois">CORRUPIO LOOP LAMP</p>
                            </div>
                            <div class="img_slide_content img_slide_dois"onclick="slide_dois()" id="slide_dois">
                                <img src="./src/componentes/Home/primeiraTela/img/produtos/produto1.jpg" alt="img_exemplo" class="img_slide" id="img_slide" >
                            </div>
                        </div>
                        
                    </div>
                </div>
            </article>
        </section> 

        <section class="tela_dois tela">
            <h1 class="titulo_home_page_tipo2">TITULO</h1>
            <article class="Tdois_container_um">
                <div class="container_um_esquerda">
                    <div class="texto_container_esquerda">
                        <p>
                            Aplicamos a estratégia de design circular: design para fácil montagem e desmontagem de componentes do produto, 
                            design para recuperação de uso, design para upcycling e evitar downcycling, design para atualização e flexibilidade,
                            projete com monomaterial al, design para durabilidade, design para rastreabilidade e retorno,
                            então que eles são facilmente reparados, feitos disponível ou devolvido.
                        </p>
                    </div>
                </div>
                <div class="container_um_direita">
                    <div class="parte_um">
                        <img src="./src/componentes/Home/img/people/1.png" alt="" class="img_mural furina"><!--trocar nomes depois Alan-->
                        <img src="./src/componentes/Home/img/people/2.png" alt="" class="img_mural nahida"><!--trocar nomes depois Alan-->
                    </div>
                    <div class="parte_dois">
                        <img src="./src/componentes/Home/img/people/3.png" alt="" class="img_mural raiden"><!--trocar nomes depois Alan-->
                        <img src="./src/componentes/Home/img/people/4.png" alt="" class="img_mural venti"><!--trocar nomes depois Alan-->
                    </div>
                </div>
            </article>

            <article class="Tdois_container_dois">
                <h1 class="titulo_home_page_tipo2">TITULO</h1>
                <div class="slides">
                    <input type="radio" name="radio-btn" id="radio1">
                    <input type="radio" name="radio-btn" id="radio2">
                    <input type="radio" name="radio-btn" id="radio3">
                    <input type="radio" name="radio-btn" id="radio4">
                
                    <div class="slide first">
                        <img src="./src/componentes/Home/img/slides/2.png" alt="" class="img_1 img">
                    </div>
                    <div class="slide second">
                        <img src="./src/componentes/Home/img/slides/b647cb22-1bde-414e-b48f-4092c1d46c25.jpg" alt="" class="img_2 img">
                    </div>
                    <div class="slide">
                        <img src="./src/componentes/Home/img/slides/TANIABULHOES_QUIOSQUE_camila-barrionovo-fotografia-ribeirao-preto-2.jpg" alt="" class="img_3 img">
                    </div>
                    <div class="slide">
                        <img src="./src/componentes/Home/img/slides/VO_EXPO_JK_LauraCampanella_0012.jpeg" alt="" class="img_4 img">
                    </div>
                    <div class="navigation-auto">
                        <div class="auto-btn1"></div>
                        <div class="auto-btn2"></div>
                        <div class="auto-btn3"></div>
                        <div class="auto-btn4"></div>
                    </div>
                    <div class="manual-navigation">
                        <label for="radio1" class="manual-btn"></label>
                        <label for="radio2" class="manual-btn"></label>
                        <label for="radio3" class="manual-btn"></label>
                        <label for="radio4" class="manual-btn last_btn_manual"></label>
                    </div>
                </div>
            </article>
        </section> `


function addContentIndex(){
main.innerHTML = `<section class="tela_desktop">
            <article class="content_video content_img">
                <div class="video_c img_c">
                    <!-- <img src="src/componentes/Home/primeiraTela/img/fundo.png" alt=""> -->
                    <div class="text_img_content_desktop">
                        <h6 class="text_titulo_desktop">TRANSFORMAMOS RESÍDUOS</h6>
                        <h6>EM REVOLUÇÃO</h6>
                    </div>
                </div>
            </article>
            <article class="container_info_desktop">
                <h1 class="titulo_desktop_tipo1">MATERIAIS</h1>
                <div class="content_info_desktop">
                    <div class="esquerda_info_desktop">
                        <h2>BOX DE AMOSTRAS CORRUPIO STEM LOW AND HIGH</h2>
                        <div class="text_info_desktop">
                            <p>
                                No Box você recebe 5 peças com estéticas diferentes para conhecer melhor nossos painéis 100% reciclados, com as espessuras 4 e 6mm.<br>
                                Perfeito para uso em revestimentos, tampos de mesa, balcões, nichos entre outros produtos.
                            </p>
                        </div>
                    </div>
                    <!-- /*arq*/ -->
                    <div class="direita_info_desktop card">
                        <div class="info_desktop_img flip">
                            <div class="front-card">
                                <img src="./src/componentes/Home/primeiraTela/img/materiais/material1.png" alt="m1" class="teste1">
                            </div>
                            <div class="back-card">
                                <img src="./src/componentes/Home/primeiraTela/img/materiais/material2.png" alt="">
                            </div>
                        </div>
                    </div>
                    <!-- /*arq*/ -->
                </div>
                <!--<div>
                    <button id="saibaMaisMateriais">Saiba mais sobre os Materiais</button>
                </div>-->
                <br>
                <br>
                <br>
                <div class="line"></div>
            </article>
            <article class="container_produto_desktop">
                <h1 class="titulo_desktop_tipo1">PRODUTOS</h1>
                <div class="content_produto_desktop">
                    <!-- /*arq*/ -->
                    <div class="esquerda_produto_desktop card">
                        <div class="produto_desktop_img flip">
                            <div class="front-card">
                                <img src="./src/componentes/Home/primeiraTela/img/produtos/produto1.jpg" alt="m1">
                            </div>
                            <div class="back-card">
                                <img src="./src/componentes/Home/primeiraTela/img/produtos/produto2.jpg" alt="m2">
                            </div>
                        </div>
                    </div>
                    <!-- /*arq*/ -->
                    <div class="direita_produto_desktop">
                        <h2 >CORRUPIO LOOP LAMP</h2>
                        <div class="text_produto_desktop">
                            <p>
                                luminária projetada para facilitar a montagem e a 
                                desmontagem, o reparo e atualização de suas peças.   
                            </p>
                        </div>
                    </div>
                </div>
               <!-- <div>
                    <button id="saibaMaisProdutos">Saiba mais sobre os Produtos</button>
                </div>-->
            </article>
            <br>
            <br>
            <br>
            <br>
            <article class="container_production_desktop">
                <h1 class="titulo_desktop_tipo1">PRODUÇÃO</h1>
                <section class="content_production_desktop">
                <div class="production_esquerda">
                    <p>
                        Aplicamos a estratégia de design circular:
                        design para fácil montagem e
                        desmontagem de componentes do produto,
                        design para recuperação de uso, design para
                        upcycling e evitar downcycling, design
                        para atualização e flexibilidade, projete com
                        monomaterial al, design para durabilidade,
                        design para rastreabilidade e retorno, então
                        que eles são facilmente reparados, feitos
                        disponível ou devolvido.
                    </p>
                </div>
                <div class="production_direita">
                    <img src="./src/componentes/imgs/cadeiaProdutiva.jpg" alt="" id="cadeiaProdutiva">
                </div>
                </section>
            </article>
            <article class="container_data_desktop">
                <h1 class="titulo_desktop_tipo1">DADOS</h1>
                <section class="slider_data">
                    <div class="slides-data">
                        <input type="radio" name="radio-data-btn" id="radioData1">
                        <input type="radio" name="radio-data-btn" id="radioData2">
                        <input type="radio" name="radio-data-btn" id="radioData3">
                        <input type="radio" name="radio-data-btn" id="radioData4">
                        <!-- slides -->
                         
                         <div class="slide_data data_first slide_1">
                            <img src="./src/componentes/Home/img/slides/2.png" alt="">
                            <p>50 kg de plástico reutilizados</p>
                         </div>
                         <div class="slide_data slide_2">
                            <img src="./src/componentes/Home/img/slides/b647cb22-1bde-414e-b48f-4092c1d46c25.jpg" alt="">
                            <p>60 kg de plástico reutilizados</p>
                         </div>
                         <div class="slide_data slide_3">
                            <img src="./src/componentes/Home/img/slides/TANIABULHOES_QUIOSQUE_camila-barrionovo-fotografia-ribeirao-preto-2.jpg" alt="">
                            <p>70 kg de plástico reutilizados</p>
                        </div>
                         <div class="slide_data slide_4">
                            <img src="./src/componentes/Home/img/slides/VO_EXPO_JK_LauraCampanella_0012.jpeg" alt="">
                            <p>80 kg de plástico reutilizados</p>
                        </div>
                        <!-- end slides -->
                        <!--navigation auto data-->
                         <div class="navigation-auto-data">
                            <div class="auto-data-btn1"></div>
                            <div class="auto-data-btn2"></div>
                            <div class="auto-data-btn3"></div>
                            <div class="auto-data-btn4"></div>
                         </div>
                         <div class="manual-data-navigation">
                            <label for="radioData1" class="manual-data-btn"></label>
                            <label for="radioData2" class="manual-data-btn"></label>
                            <label for="radioData3" class="manual-data-btn"></label>
                            <label for="radioData4" class="manual-data-btn"></label>
                        </div>
                    </div>            
                </section>
            </article>

        </section>


        <!-- VERSÃO MOBIILE -->
        <section class="tela_um tela">
            <article class="content_video content_img">
                <div class="video_c img_c">
                    <div class="text_video_content text_img_content">
                        <h6 class="text_titulo">TRANSFORMAMOS RESÍDUOS</h6>
                        <h6>EM REVOLUÇÃO</h6>
                    </div>
                </div>
            </article>
            <article class="content_info">
                <div class="bloco bloco_um">
                    <h1 class="titulo_home_page_tipo1">MATERIAIS</h1>
                    <div class="containte_slide" id="containte_slide">
                        <div class="text_slide_content text_slide_um">
                            <div class="text_um">
                                <p class="conteudo_um">BOX DE AMOSTRAS CORRUPIO STEM LOW AND HIGH</p>
                            </div>
                            <div class="img_slide_content img_slide_um"onclick="slide_um()" id="slide_um">
                                <img src="./src/componentes/Home/primeiraTela/img/materiais/material1.png" alt="img_exemplo" class="img_slide" id="img_slide" >
                            </div>
                        </div>
                    </div>
                </div>                    
                <div class="bloco bloco_dois">
                    <h1 class="titulo_home_page_tipo1">PRODUTOS</h1>
                    <div class="containte_slide">
                        
                        <div class="text_slide_content text_slide_dois">
                            <div class="text_dois">
                                <p class="conteudo_dois">CORRUPIO LOOP LAMP</p>
                            </div>
                            <div class="img_slide_content img_slide_dois"onclick="slide_dois()" id="slide_dois">
                                <img src="./src/componentes/Home/primeiraTela/img/produtos/produto1.jpg" alt="img_exemplo" class="img_slide" id="img_slide" >
                            </div>
                        </div>
                        
                    </div>
                </div>
            </article>
        </section> 

        <section class="tela_dois tela">
            <h1 class="titulo_home_page_tipo2">TITULO</h1>
            <article class="Tdois_container_um">
                <div class="container_um_esquerda">
                    <div class="texto_container_esquerda">
                        <p>
                            Aplicamos a estratégia de design circular: design para fácil montagem e desmontagem de componentes do produto, 
                            design para recuperação de uso, design para upcycling e evitar downcycling, design para atualização e flexibilidade,
                            projete com monomaterial al, design para durabilidade, design para rastreabilidade e retorno,
                            então que eles são facilmente reparados, feitos disponível ou devolvido.
                        </p>
                    </div>
                </div>
                <div class="container_um_direita">
                    <div class="parte_um">
                        <img src="./src/componentes/Home/img/people/1.png" alt="" class="img_mural furina"><!--trocar nomes depois Alan-->
                        <img src="./src/componentes/Home/img/people/2.png" alt="" class="img_mural nahida"><!--trocar nomes depois Alan-->
                    </div>
                    <div class="parte_dois">
                        <img src="./src/componentes/Home/img/people/3.png" alt="" class="img_mural raiden"><!--trocar nomes depois Alan-->
                        <img src="./src/componentes/Home/img/people/4.png" alt="" class="img_mural venti"><!--trocar nomes depois Alan-->
                    </div>
                </div>
            </article>

            <article class="Tdois_container_dois">
                <h1 class="titulo_home_page_tipo2">TITULO</h1>
                <div class="slides">
                    <input type="radio" name="radio-btn" id="radio1">
                    <input type="radio" name="radio-btn" id="radio2">
                    <input type="radio" name="radio-btn" id="radio3">
                    <input type="radio" name="radio-btn" id="radio4">
                
                    <div class="slide first">
                        <img src="./src/componentes/Home/img/slides/2.png" alt="" class="img_1 img">
                    </div>
                    <div class="slide second">
                        <img src="./src/componentes/Home/img/slides/b647cb22-1bde-414e-b48f-4092c1d46c25.jpg" alt="" class="img_2 img">
                    </div>
                    <div class="slide">
                        <img src="./src/componentes/Home/img/slides/TANIABULHOES_QUIOSQUE_camila-barrionovo-fotografia-ribeirao-preto-2.jpg" alt="" class="img_3 img">
                    </div>
                    <div class="slide">
                        <img src="./src/componentes/Home/img/slides/VO_EXPO_JK_LauraCampanella_0012.jpeg" alt="" class="img_4 img">
                    </div>
                    <div class="navigation-auto">
                        <div class="auto-btn1"></div>
                        <div class="auto-btn2"></div>
                        <div class="auto-btn3"></div>
                        <div class="auto-btn4"></div>
                    </div>
                    <div class="manual-navigation">
                        <label for="radio1" class="manual-btn"></label>
                        <label for="radio2" class="manual-btn"></label>
                        <label for="radio3" class="manual-btn"></label>
                        <label for="radio4" class="manual-btn last_btn_manual"></label>
                    </div>
                </div>
            </article>
        </section> `
}

homeBotao.addEventListener('click',(e)=>{
    e.preventDefault()
    addContentIndex()
})
