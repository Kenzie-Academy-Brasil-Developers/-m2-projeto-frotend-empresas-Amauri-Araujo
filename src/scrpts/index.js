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

const heandleHamburgerIndex=()=>{
const hamburger=document.querySelector("#hamburger__home")
const select=document.querySelector('#select__home')
const btn1=document.querySelector('#cadastro__page')
const btn2=document.querySelector('#login__page')

hamburger.addEventListener('click',()=>{
btn1.classList.toggle('hide')
btn2.classList.toggle('hide')
select.classList.toggle('hide')
})

}
heandleHamburgerIndex()