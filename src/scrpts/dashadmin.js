import { getdepartmentsEmpresas,updateDepartments,dellDepartments,createDepartments,dellUsers,getAllUsers,getAlldepartments,updateUsersLevel,getAllUsersOutOfWork,contrataUser,demiteUser} from "./request.js";
import { renderSelect,renderSelectcria,createAllUsers,createAllDepartments} from "./render.js";
import { showAdd,showModalUpDep,showModalNewLevel,} from "./modal.js";


const autenticationAdmin=async()=>{
    const admin=  JSON.parse(localStorage.getItem("@Useradmin:admin"));
    if(!admin.is_admin){
        window.location.replace('../../index.html')
    }
}
autenticationAdmin()



const logoutAd=()=>{
const btnLA=document.querySelector("#logout_admin")
btnLA.addEventListener('click',()=>{
    window.location.replace('../../index.html')
    localStorage.clear()
})
}
logoutAd()


renderSelect()

const handleDepartments=()=>{
const select=document.querySelector('select')
select.addEventListener('change',async()=>{
    renderDepartments(false,await getdepartmentsEmpresas(select.value))
})
}  
handleDepartments()


const patchDep=async()=>{
    const modal= document.querySelector('#modal__patchDep')
    const input=document.querySelector('#input__patchDeps')
    const btn=document.querySelector('#btn__patchDeps')
    const upBody={description:""}


    
    btn.addEventListener('click',async(e)=>{
        e.preventDefault()
        upBody.description=input.value
        const id= JSON.parse(localStorage.getItem("@btnDepId:idDepartment"));
        const depart= await updateDepartments(id,upBody)
        modal.close()
        renderDepartments(true)
        localStorage.removeItem("@btnDepId:idDepartment")
    })
}
patchDep()

 const deleteDep=()=>{
    const modal=document.querySelector('#modal__delete')
    const btnDell=document.querySelector('#del__dep')
        btnDell.addEventListener('click',async()=>{
            const id=btnDell.dataset.delId
            const deletar=await dellDepartments(id)
            const render= renderDepartments(true)
            modal.close()
        })
}

const createmodalDelete=(id,array)=>{
    const conteiner=document.createElement('div')
    const titulo=document.createElement('h1')
    const botaoClose=document.createElement('button')
    const botaoDeletar=document.createElement('button')
    const department=array.find(dep=>{
        return(dep.uuid=== id)
    })
    titulo.innerText=(`Realmente deseja deletar o Departamento ${department.name} e demitir seus funcionários?`)
    botaoClose.id='btn__closedele'
    botaoDeletar.dataset.delId=department.uuid
    botaoDeletar.id='del__dep'
    botaoClose.innerText='X'
    botaoDeletar.innerText='Confirmar'
    conteiner.append(botaoClose,titulo,botaoDeletar)
    return conteiner
}


const closeModalDEl=()=>{
    const modal=document.querySelector('#modal__delete')
    const btn=document.querySelector('#btn__closedele')

    btn.addEventListener('click',()=>{
        modal.close()
    })
}
export const renderModalDell=(array)=>{
    const modal=document.querySelector('#modal__delete')
    const btns=document.querySelectorAll('.open__dell')

    btns.forEach(btn=>{
        btn.addEventListener('click',()=>{
            const modalContent=createmodalDelete(btn.dataset.depDel,array)
            modal.innerHTML=""
            modal.appendChild(modalContent)
            modal.showModal()
            closeModalDEl()
            deleteDep()
        })
    })
}


const createmodalTasks=(id,array)=>{
    const conteiner=document.createElement('div')
    const titulo=document.createElement('h1')
    const botaoClose=document.createElement('button')
    const description=document.createElement('h2')
    const compay=document.createElement('p')
    const select=document.createElement('select')
    const option=document.createElement('option')
    const containerUser=document.createElement('div')
    const btnContratar=document.createElement('button')
    const form=document.createElement('form')
    const department=array.find(dep=>{
        return(dep.uuid=== id)
    })
    titulo.innerText=department.name
    btnContratar.innerText='Contratar'
    btnContratar.id='contratar'
    botaoClose.id='btn__closeTasks'
    description.innerText=department.description
    compay.innerText=department.companies.name
    select.id='select__tasks'
    option.innerText='Selecionar usuário'
   
    botaoClose.innerText='X'
    select.appendChild(option)
    containerUser.id='user_contratado'
   

    form.append(select,btnContratar)
    conteiner.append(botaoClose,titulo,description,compay,form,containerUser)
    return conteiner
}

const contrarUsu=async(id)=>{
const select=document.querySelector("#select__tasks")
const btnCont=document.querySelector('#contratar')
const modal=document.querySelector('#tasks__modal')
const userBody={
    user_uuid:'',
    department_uuid:''
}

btnCont.addEventListener('click',async(e)=>{
    e.preventDefault()
    userBody.user_uuid=select.value
    userBody.department_uuid=id
    console.log(modal)
    const usuariocontratado= await contrataUser(userBody)

   
    // window.location.reload()
    modal.close()
    // const modalContent= await createmodalTasks(id,await getAlldepartments())
    // modal.innerHTML=""
    // modal.appendChild(modalContent)
 

})

}




const closeModalTasks=()=>{
    const modal=document.querySelector('#tasks__modal')
    const btn=document.querySelector('#btn__closeTasks')

    btn.addEventListener('click',()=>{
        modal.close()
    })
}
const createselecttask=(option)=>{
    const options =document.createElement('option')
    
    options.innerText=option.username
    
    options.value=option.uuid
    
    return options
    
}
const createUserContr=(user)=>{

    const card=document.createElement('div')
    const nivel=document.createElement('p')
   const name=document.createElement('h1')
    const btn=document.createElement('button')


    btn.innerText="Desligar"
    btn.dataset.userIdDimmis=user.uuid
    btn.classList.add('desliga__user')
    name.innerText=user.username
    nivel.innerText=(`${user.professional_level.charAt(0).toUpperCase()}${user.professional_level.slice(1)}`)
    card.append(name,nivel,btn)
    return card
 
}

const renderUserContr=async(id)=>{
const container=document.querySelector('#user_contratado')
const users= await getAllUsers()



const finduser=users.filter(user=>{
const userfound=user.department_uuid==id
return userfound
})



finduser.forEach(user=>{

 
const divcontent=createUserContr(user)
    container.append(divcontent)
})
    demitirUsuário()
}

const demitirUsuário=()=>{
const btnDimmis=document.querySelectorAll('.desliga__user')

const modal=document.querySelector('#tasks__modal')
btnDimmis.forEach(btn=>{
    btn.addEventListener('click',async()=>{
        const id=btn.dataset.userIdDimmis

        const demit= await demiteUser(id)
       modal.close()
    })

})

    


}





const renderSelectTasks=async()=>{

    const select= document.querySelector('#select__tasks')
    const users= await getAllUsersOutOfWork()
    
    users.forEach(option=>{
        const department= createselecttask(option)
    
        select.append(department)
    
    })
}


function renderModalTasks(array){
    const modal=document.querySelector('#tasks__modal')
    const btns=document.querySelectorAll('.sholl__modal')

   
    btns.forEach(btn=>{
        btn.addEventListener('click',()=>{
            const modalContent=createmodalTasks(btn.dataset.depId,array)
            modal.innerHTML=""
            modal.appendChild(modalContent)
            modal.showModal()
            closeModalTasks()
            renderSelectTasks()
            renderUserContr(btn.dataset.depId)
            contrarUsu(btn.dataset.depId)
          
        })
    })
}




async function renderDepartments(first,array=[]){
    const main=document.querySelector('main')
    main.innerHTML=''

    if (first) {
        const alldepartments=await getAlldepartments()
        alldepartments.forEach(department=>{
            const renderAd=createAllDepartments(department)

            main.appendChild(renderAd)
        })
    }else{
        array.forEach(department=>{
            const renderDep=createAllDepartments(department)
            main.appendChild(renderDep)
        })
    }
    showModalUpDep()
    renderModalDell(await getAlldepartments())
    renderModalTasks(await getAlldepartments())
}
renderDepartments(true)


showAdd()

renderSelectcria()

const newDep=()=>{

    const inputs=document.querySelectorAll('.input__cria')
    const select=document.querySelector('#select__cria')
    const btn=document.querySelector('#btn__cria')
    const depBody={}
    let count=0
    const modal=document.querySelector('#modal__cria')
    btn.addEventListener('click',async(e)=>{
        e.preventDefault()

        inputs.forEach(({name,value})=>{
            if(value==''){
                count++
            }
            depBody[name]=value
            depBody.company_uuid=select.value
        })
            if(count!=0){d
                alert(`Preencha todos os campos`)

                inputs.forEach(input=>{
                    input.addEventListener('keyup',()=>{

                        count=0
                })
                
             })}else{
              
                const newDep=await createDepartments(depBody)
                modal.close()
                const dep=renderDepartments(true)
                inputs.forEach(input=>{
                    input.value=''

                select.value=""
                })
             }
   
})}
newDep()



 const deleteUsuario=()=>{
    const modal=document.querySelector('#modal__delUser')
    const btnUser=document.querySelector('#del__user')
 



        btnUser.addEventListener('click',async()=>{
            const id=btnUser.dataset.delUserId
         
            const deletar=await dellUsers(id)
            const render= renderAllUsers()
            modal.close()

           
        })
   
 
}

const createmodalDeleteUser=(id,array)=>{
    const conteiner=document.createElement('div')
    const titulo=document.createElement('h1')
    const botaoClose=document.createElement('button')
    const botaoDeletar=document.createElement('button')


    const user=array.find(us=>{
        return(us.uuid=== id)
    })
    titulo.innerText=(`Realmente deseja remover o usuário ${user.username}?`)
    botaoClose.id='btn__closeDelUser'
    botaoDeletar.dataset.delUserId=user.uuid
    botaoDeletar.id='del__user'
    botaoClose.innerText='X'
    botaoDeletar.innerText='Deletar'
    conteiner.append(botaoClose,titulo,botaoDeletar)
    return conteiner
}

const closeModalDElUser=()=>{
    const modal=document.querySelector('#modal__delUser')
    const btn=document.querySelector('#btn__closeDelUser')

    btn.addEventListener('click',()=>{
        modal.close()
    })
}

const renderModalDellUser=(array)=>{
    const modal=document.querySelector('#modal__delUser')
    const btns=document.querySelectorAll('.byby_user')

    btns.forEach(btn=>{
        btn.addEventListener('click',()=>{
            const modalContent=createmodalDeleteUser(btn.dataset.delUserId,array)
            
            modal.innerHTML=""
            modal.appendChild(modalContent)
            modal.showModal()
            closeModalDElUser()
          
        

            const btnd=document.querySelector('#del__user')

            deleteUsuario()
        
          
                })
        })
 
        
}


 const renderAllUsers=async()=>{
    const section=document.querySelector('section')

    section.innerHTML=""

    const users=await getAllUsers()
   

    const filteradmin=users.filter(usu=>{
        const usuariosfilrados= usu = usu.is_admin==false
        return usuariosfilrados

    })

    console.log(filteradmin)
    filteradmin.forEach(user=>{
        const finalUser= createAllUsers(user)

        section.appendChild(finalUser)
    })
renderModalDellUser(await getAllUsers())
showModalNewLevel()
}
renderAllUsers()

const patchUser=()=>{
    const modal= document.querySelector('#modal_newLevel')
    const selectModalidade=document.querySelector('#modalidade__trabalho')
    const selectNível=document.querySelector('#nivel__proficioanl')

    const btn=document.querySelector('#btn__newLevel')
    const upBody={kind_of_work:"",
    professional_level:""

}


    btn.addEventListener('click',async(e)=>{
        e.preventDefault()
        upBody.kind_of_work=selectModalidade.value
        upBody.professional_level=selectNível.value
        console.log(upBody)
        const id= JSON.parse(localStorage.getItem("@btnUserId:iduser"));
        console.log(id)
        const newProfficional= await updateUsersLevel(id,upBody)
        modal.close()
       renderAllUsers()
        localStorage.removeItem("@btnUserId:iduser")
    })
}
patchUser()



