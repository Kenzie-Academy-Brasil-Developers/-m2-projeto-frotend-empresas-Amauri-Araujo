import { getAllCompanys,getProfile,getAllSectors,getdepUser,getColegas} from "./request.js";
import { showmodalupdate} from "./modal.js";


const createCompany=(company)=>{
    const companiesContainer=document.createElement('li')
    const companiesName=document.createElement('h2')
    const companiesHour=document.createElement('p')
    const companiesSectror=document.createElement('p')

    companiesName.innerText= company.name
    companiesHour.innerText=company.opening_hours
    companiesSectror.innerText=company.sectors.description

    companiesContainer.append(companiesName,companiesHour,companiesSectror)

    return companiesContainer
}

export const renderCompany =async(first,array=[])=>{
    const ul=document.querySelector('ul')
    ul.innerHTML=""

    const allCompanies=await getAllCompanys()

    if(first){

        allCompanies.forEach(company => {
            const companies=createCompany(company)
    
            ul.appendChild(companies)
        });
    }else{
        
      array.forEach(company => {
            const companies=createCompany(company)
    
            ul.appendChild(companies)
        });
    }
   
}

const createUser=(user)=>{

    const headerUser=document.createElement('div')
    const username=document.createElement('h1')
    const userEmail= document.createElement('p')
    const userNIvel=document.createElement('p')
    const userOcupation=document.createElement('p')
    const btnEditProfile=document.createElement('button')
    
    username.innerText=(`${user.username[0].toUpperCase()}${user.username.substring(1)}`)
    userEmail.innerText=(`Email: ${user.email}`)
    
   

        userNIvel.innerText=(`${user.professional_level[0].toUpperCase()}${user.professional_level.substring(1)}`)

   
   
        userOcupation.innerText=user.kind_of_work

   
    
    btnEditProfile.innerText='Editar'
    btnEditProfile.id='showUpdate'
    headerUser.append(username,userEmail,userNIvel,userOcupation,btnEditProfile)
    
    return headerUser
    }
    const createH1=()=>{

        const h1=document.createElement('h1') 
        h1.innerText=' Você ainda não foi contratado'
        return h1
    }

    const companyUser=(company)=>{

        const container=document.createElement('div')
        const comanyName=document.createElement('h1')
        const departmentName=document.createElement('h1')
        const traço=document.createElement('p')



        
        comanyName.innerText=company.name

        departmentName.innerText=""

        departmentName.id='depn'
        traço.innerText="-"
        container.append(comanyName,traço,departmentName)
        return container
    
    }

    const createColega=(c)=>{
const container=document.createElement('div')
const username=document.createElement( 'h2')
const nivel=document.createElement('p')

username.innerText=(`${c.username[0].toUpperCase()}${c.username.substring(1)}`)


    nivel.innerText=(`${c.professional_level[0].toUpperCase()}${c.professional_level.substring(1)}`)



container.append(username,nivel)

return container
    }
    export const renderUser= async()=>{

        const body=document.querySelector('header')
       
        body.innerHTML=''

        const user=await getProfile()
       
        const id=localStorage.setItem('@userDash:id',JSON.stringify(user.uuid))
        const renderDashUser=createUser(user)
        body.append(renderDashUser)
        showmodalupdate()
        colegas()
    }


async function colegas(){

    const main=document.querySelector('main')
    main.innerHTML=""
    const user=await getProfile()
           
        const id=localStorage.setItem('@userDash:id',JSON.stringify(user.uuid))
    
    
            if(user.department_uuid != null){
                const company= await getdepUser()
              
                
                const companie= companyUser(company)
                main.appendChild(companie)
                const departName=document.querySelector("#depn")
               
             
                company.departments.forEach(com=>{
                    departName.innerText=com.name
                    
                })
    
                const colegas=await getColegas()
    
                for(let i=0;i<colegas.length;i++){
    
                    const colega=colegas[i].users
    
                    for(let j=0;j<colega.length;j++){
                        const usuario=  JSON.parse(localStorage.getItem("@userDash:id"));
                    
                        const id =colega[j].uuid
    
                        if(id!=usuario)
                        {
                            
    
                            const create= createColega(colega[j])
                           
                            main.append(create)
                        }
                    }
                    localStorage.removeItem('@userDash:id')
                }
    
    
           }
           
           else{
               
             
                main.appendChild(createH1())
            }
            
    
    
    
           
}
    

     
    


   

    export const createAllDepartments=(department)=>{
        const containeirDepartment=document.createElement('div')
        const name=document.createElement('h1')
        const description= document.createElement('p')
        const company=document.createElement('p')
        const edi=document.createElement('button')
        const del=document.createElement('button')
        const  shollModal=document.createElement('button')

       
        shollModal.dataset.depId=department.uuid
        shollModal.innerText='ShollModal'
        name.innerText=department.name
        description.innerText=department.description
        company.innerText=department.companies.name
        edi.innerText='editar'
        edi.classList.add('openMDep')
        edi.dataset.depId=department.uuid
        del.innerText='del'
        del.classList.add('open__dell')
        del.dataset.depDel=department.uuid
        shollModal.classList.add('sholl__modal')
        containeirDepartment.append(name,description,company,shollModal,edi,del)

        return containeirDepartment
    }


const createSelect=(option)=>{

const options=document.createElement('option')

options.innerText=option.name

options.value=option.uuid

return options

}
const createSelectHome=(option)=>{

    const options=document.createElement('option')
    
    options.innerText=option.description
    
    options.value=option.description
    
    return options
    
    }

export const sele=async()=>{
    const select=document.querySelector('#select__home')
    const sector=await getAllSectors()
    

  sector.forEach(option=>{
    const sect= createSelectHome(option)
    select.appendChild(sect)
})

}
 
export const renderSelect= async()=>{

    const select= document.querySelector('#admin__select')
    const companies= await getAllCompanys()
  

    companies.forEach(option=>{
        const department= createSelect(option)

        select.append(department)

    })
}


export const renderSelectcria= async()=>{

  
    const companies= await getAllCompanys()
    const selectcria= document.querySelector('#select__cria')

    companies.forEach(option=>{
        const department= createSelect(option)

   

        selectcria.append(department)
    })
}
export const createAllUsers=(user,compan)=>{

    const container=document.createElement('div')
    
    const username=document.createElement('h1')
    const usernivel=document.createElement('p')
    const company=document.createElement('p')
    const pathuser=document.createElement('button')
    const deleteUser=document.createElement('button')




    username.innerText=user.username
    usernivel.innerText=(`${user.professional_level.charAt(0).toUpperCase()}${user.professional_level.slice(1)}`)
    
    
    company.innerText=compan
    company.classList.add('company__name__user')
    company.dataset.comId=user.department_uuid
    pathuser.innerText='Atualizar'
    pathuser.classList.add('pathUser')
    deleteUser.innerText='Deletar'
    deleteUser.classList.add('byby_user')
deleteUser.dataset.delUserId=user.uuid
pathuser.dataset.pathUserId=user.uuid

if(compan!=undefined){

    container.append(company)
}

    container.append(username,usernivel,pathuser,deleteUser)

    return container
}


// export const renderAllUsers=async()=>{
//     const section=document.querySelector('section')

//     section.innerHTML=""

//     const users=await getAllUsers()

//     users.forEach(user=>{
//         const finalUser= createAllUsers(user)

//         section.appendChild(finalUser)
//     })
// // renderModalDellUser(await getAllUsers())

// }

