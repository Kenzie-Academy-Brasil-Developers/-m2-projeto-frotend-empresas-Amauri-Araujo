// import {deleteDep,deleteUsuario} from "./dashadmin.js"

const closeModalUpdate=()=>{
    const modal=document.querySelector('#modal__update')
    const closeUpdate=document.querySelector('#close__update')

    closeUpdate.addEventListener('click',()=>{
        modal.close()
    })
}

export const showmodalupdate=()=>{

    const btnShow=document.querySelector('#showUpdate')
    const modal=document.querySelector('#modal__update')
    btnShow.addEventListener('click',()=>{
        modal.showModal()


    })

    closeModalUpdate()
}



const closeModalUpDep=()=>{
    const modal=document.querySelector('#modal__patchDep')
    const closeUpdate=document.querySelector('#btn__closeMDep')

    closeUpdate.addEventListener('click',()=>{
        modal.close()
    })
}
export const showModalUpDep=()=>{
    const btnShow=document.querySelectorAll('.openMDep')
    const modal=document.querySelector('#modal__patchDep')

   
    btnShow.forEach(btn=>{
   
        btn.addEventListener('click',()=>{
            modal.showModal()
    const idbtn=localStorage.setItem('@btnDepId:idDepartment',JSON.stringify(btn.dataset.depId))
    })
    closeModalUpDep()
   

    })
}

// const createmodalDelete=(id,array)=>{
//     const conteiner=document.createElement('div')
//     const titulo=document.createElement('h1')
//     const botaoClose=document.createElement('button')
//     const botaoDeletar=document.createElement('button')


//     const department=array.find(dep=>{
//         return(dep.uuid=== id)
//     })
//     titulo.innerText=(`Realmente deseja deletar o Departamento ${department.name} e demitir seus funcionários?`)
//     botaoClose.id='btn__closedele'
//     botaoDeletar.dataset.delId=department.uuid
//     botaoDeletar.id='del__dep'
//     botaoClose.innerText='X'
//     botaoDeletar.innerText='Confirmar'
//     conteiner.append(botaoClose,titulo,botaoDeletar)
//     return conteiner
// }
// const closeModalDEl=()=>{
//     const modal=document.querySelector('#modal__delete')
//     const btn=document.querySelector('#btn__closedele')

//     btn.addEventListener('click',()=>{
//         modal.close()
//     })
// }
// export const renderModalDell=(array)=>{
//     const modal=document.querySelector('#modal__delete')
//     const btns=document.querySelectorAll('.open__dell')


//     btns.forEach(btn=>{
//         btn.addEventListener('click',()=>{
//             const modalContent=createmodalDelete(btn.dataset.depDel,array)
           
//             modal.innerHTML=""
//             modal.appendChild(modalContent)
//             modal.showModal()
//             closeModalDEl()
//             // deleteDep()
    
//         })
        
//     })
 
// }
const closeAD=()=>{
    const modal=document.querySelector('#modal__cria')
    const btn=document.querySelector('#close__cria')
    btn.addEventListener('click',()=>{
        modal.close()
    })

}
export const showAdd=()=>{
    const btn=document.querySelector('#cirar__dep')

    const modal=document.querySelector('#modal__cria')

btn.addEventListener('click',()=>{
    modal.showModal()
    closeAD()
})

}

// const createmodalDeleteUser=(id,array)=>{
//     const conteiner=document.createElement('div')
//     const titulo=document.createElement('h1')
//     const botaoClose=document.createElement('button')
//     const botaoDeletar=document.createElement('button')


//     const user=array.find(us=>{
//         return(us.uuid=== id)
//     })
//     titulo.innerText=(`Realmente deseja remover o usuário ${user.username}?`)
//     botaoClose.id='btn__closeDelUser'
//     botaoDeletar.dataset.delUserId=user.uuid
//     botaoDeletar.id='del__user'
//     botaoClose.innerText='X'
//     botaoDeletar.innerText='Deletar'
//     conteiner.append(botaoClose,titulo,botaoDeletar)
//     return conteiner
// }

// const closeModalDElUser=()=>{
//     const modal=document.querySelector('#modal__delUser')
//     const btn=document.querySelector('#btn__closeDelUser')

//     btn.addEventListener('click',()=>{
//         modal.close()
//     })
// }

// export const renderModalDellUser=(array)=>{
//     const modal=document.querySelector('#modal__delUser')
//     const btns=document.querySelectorAll('.byby_user')

//     btns.forEach(btn=>{
//         btn.addEventListener('click',()=>{
//             const modalContent=createmodalDeleteUser(btn.dataset.delUserId,array)
            
//             modal.innerHTML=""
//             modal.appendChild(modalContent)
//             modal.showModal()
//             closeModalDElUser()
          
        

//             const btnd=document.querySelector('#del__user')


//             console.log(btnd)
          
//                 })
//         })
 
        
// }


const closeModalNewLevel=()=>{
    
const modal= document.querySelector('#modal_newLevel')
    const btn=document.querySelector('#close_newL')
    btn.addEventListener('click',()=>{
        modal.close()
    })

}

export const showModalNewLevel=()=>{

const modal= document.querySelector('#modal_newLevel')

const bts=document.querySelectorAll('.pathUser')

bts.forEach(btn=>{
    btn.addEventListener('click',()=>{

        modal.showModal()
        closeModalNewLevel()
        const id=localStorage.setItem('@btnUserId:iduser',JSON.stringify(btn.dataset.pathUserId))
    })
    })
}

