import { updateProfileUser } from "./request.js";
import { renderUser } from "./render.js";

const autentication = async()=>{
    const token = JSON.parse(localStorage.getItem("@UserToken:token"));
 


  

    if(!token) {
    window.location.replace('../../index.html');
    }
};

autentication()
const logout=()=>{

    const btnLogout =document.querySelector('#logout__home')

        btnLogout.addEventListener('click',()=>{
            window.location.replace('../../index.html')
            localStorage.clear()
        })
    }
logout()


renderUser()



export const updateProfile=()=>{
    const inputs=document.querySelectorAll('.modal__input')
    const btnUpdate=document.querySelector('#update')
    const updateBody={}
 
    const modal= document.querySelector('#modal__update')



    
    btnUpdate.addEventListener('click',async(e)=>{
        e.preventDefault()

        inputs.forEach(({name,value})=>{
            if(value){
                
                updateBody[name]=value
            }
          
        })

     
      
            const userAtualize=await updateProfileUser(updateBody)

            renderUser()
           modal.close()
        }

       
    )

   
}



updateProfile()

