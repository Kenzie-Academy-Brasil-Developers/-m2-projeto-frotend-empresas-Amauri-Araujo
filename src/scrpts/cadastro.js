
import { createNewUser } from "./request.js";


const autentication = async ()=>{
    const token=JSON.parse(localStorage.getItem('@UserToken:token'))
    if(token){
    window.location.replace('./login.html')
    
  
    }
}

autentication()
 

const toast=(message)=>{

    const body=document.querySelector('body')
    const container= document.createElement('div')
    const mensagem=document.createElement('p')
mensagem.innerText=message
    container.appendChild(mensagem)
    body.appendChild(container)

    setTimeout(()=>{
     body.removeChild(container)
      },2000)
  
}

 const toast2=(message)=>{

    const body=document.querySelector('body')
    const container= document.createElement('div')
    const mensagem=document.createElement('p')
mensagem.innerText=message
    container.appendChild(mensagem)
    body.appendChild(container)
    setTimeout(()=>{
        body.removeChild(container)
         },2000)
     
}

const createUser= ()=>{

    const inputs=document.querySelectorAll(".inputs__cadastro")
    const select=document.querySelector('select')
    const btnCriarUser=document.querySelector('#btn__cadastro')

    const userBody={}
    let count=0

    btnCriarUser.addEventListener('click',async(event)=>{
        event.preventDefault()

        inputs.forEach(({ name ,value})=>{

            if(value == ""){
                count++
            }
            userBody[name]=value
            
            
           
        })
        userBody.professional_level=select.value

        console.log(userBody)
        if(count!=0){
            toast2('Por favor preencha todos os campos')

            inputs.forEach(input=>{
                input.addEventListener('keyup',()=>{
                    count=0
                })

            })

        }else{

            toast("Usuário cadastrado com sucesso")
         

            const user= await createNewUser(userBody)

             
            setTimeout(()=>{
                window.location.replace("./login.html")
              },2000)
          
              
        }
        inputs.forEach(input=>{
            input.value=""
        })
    })
    
}
createUser()

const mudarPages=()=>{

    const btnLogin=document.querySelector('#login')
    const btnCadastrar=document.querySelector('#home')

    btnLogin.addEventListener('click',()=>{
        window.location.replace('./login.html')

    })

    btnCadastrar.addEventListener('click',()=>{
        window.location.replace('../../index.html')
    })
}
mudarPages()

const backPAge=()=>{

    const btnVoltar=document.querySelector('#btn__retornar')

    btnVoltar.addEventListener('click',(e)=>{
        e.preventDefault()
        
        window.location.replace('../../index.html')
    })
}
backPAge()