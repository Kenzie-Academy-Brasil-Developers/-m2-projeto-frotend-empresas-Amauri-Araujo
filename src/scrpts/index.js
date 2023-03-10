import { renderCompany,sele} from "./render.js";
import { getCompanyBySector } from "./request.js";


renderCompany(true)

sele()
const heandleSelect=()=>{
    
    const select=document.querySelector('select')

    select.addEventListener('change',async()=>{
       
        renderCompany(false,await getCompanyBySector(select.value))
    })


}
heandleSelect()

const mudarPages=()=>{

    const btnLogin=document.querySelector('#login__page')
    const btnCadastrar=document.querySelector('#cadastro__page')

    btnLogin.addEventListener('click',()=>{
        window.location.replace('./src/pages/login.html')

    })

    btnCadastrar.addEventListener('click',()=>{
        window.location.replace('./src/pages/cadastro.html')
    })
}
mudarPages()