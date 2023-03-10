import { createLogin,validateUser} from "./request.js";




const autentication =async ()=>{
    const token = JSON.parse(localStorage.getItem("@UserToken:token"));
    if(token) {
        window.location.replace('./dashuser.html');
};
}



const login=()=>{

    const inputs=document.querySelectorAll('input')
    const btnLogin=document.querySelector('#btn__login')
  
    const userBody={}
    let count = 0;


    btnLogin.addEventListener('click',async (e)=>{
        e.preventDefault()
        
        inputs.forEach(({name,value})=>{

            if(value==""){
                count++
            }
            userBody[name]=value
         
        })
        if(count!=0){
            alert(`Por favor preecha todos os campos`)

            inputs.forEach(input=>{
                input.addEventListener('keyup',()=>{
                    count=0
                })
            })
        }else{
            const token= await createLogin(userBody)
            
            
         const admin=   await validateUser(token)
            if(admin.is_admin){
                window.location.replace('./dashadmin.html')
            }
           
            else{
                autentication()
            }
              
           
          
        } 


    })
    
    inputs.forEach(input=>{
        input.value=""
    })

}
login()



const pages=()=>{
    const btnCada=document.querySelectorAll('.btn__cadastrar')
    const btnHome=document.querySelector('#backtohome')
    btnCada.forEach(btn=>{
        btn.addEventListener('click',(e)=>{
            e.preventDefault()
            window.location.replace('./cadastro.html')
        })
    }

 )

 btnHome.addEventListener('click',()=>{

    window.location.replace('../../index.html')
 })
}
pages()

