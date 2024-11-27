import { Headerbuild } from "./src/componentes/header/header.js"
import { Mainbuild } from "./src/componentes/Home/Home.js"
import { Footerbuild } from "./src/componentes/footer/footer.js"
async function init() {
    try{
        const header = document.getElementById('header')
        const buildHeader = Headerbuild() 
        header.appendChild(buildHeader)

        const main = document.getElementById('main')
        const buildMain = Mainbuild()
        console.log(buildHeader)
        main.appendChild(buildMain)

        const footer = document.getElementById('footer')
        const buildFooter = Footerbuild()
        footer.appendChild(buildFooter)

    }catch(error){
        console.error('erro ao carregar'+error)
    }


}
init()