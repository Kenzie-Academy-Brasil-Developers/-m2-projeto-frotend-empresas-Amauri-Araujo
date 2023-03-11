

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
    btnShow.addEventListener('click',(e)=>{

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
   
        btn.addEventListener('click',(e)=>{
           const actionValue=e.target.parentNode.children[1].innerText
            console.log(actionValue)
            modal.showModal()
            const input=document.querySelector('.input__patchDeps')
            input.value=actionValue

    const idbtn=localStorage.setItem('@btnDepId:idDepartment',JSON.stringify(btn.dataset.depId))
    })
    closeModalUpDep()
   

    })
}


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

