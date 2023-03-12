

const token=JSON.parse(localStorage.getItem('@UserToken:token'))

const baseUrl='http://localhost:6278' 
const requestHeaders={
    'Content-Type':'application/json',
   'Authorization':`Bearer ${token}`

}


const toast2=(message)=>{

    const body=document.querySelector('body')
    const container= document.createElement('div')
    const mensagem=document.createElement('p')
    container.classList.add('toast')
mensagem.innerText=message
    container.appendChild(mensagem)
    body.appendChild(container)
    setTimeout(()=>{
        body.removeChild(container)
         },2000)
     
}

export const getAllCompanys=async()=>{
    const company= await fetch(`${baseUrl}/companies`,{
        method:'GET',
        headers:requestHeaders,
     
    })
    .then(response=>{
        if(response.ok){
            return response.json()
        }else{
            response.json().then(respError=>{
                alert(`${respError.message}`)
            })
        }
    })
    return company
}


export const getAllSectors=async()=>{
    const sectors= await fetch(`${baseUrl}/sectors`,{
        method:'GET',
        headers:requestHeaders,
     
    })
    .then(response=>{
        if(response.ok){
            return response.json()
        }else{
            response.json().then(respError=>{
                alert(`${respError.message}`)
            })
        }
    })
    return sectors
}

export const getCompanyBySector=async(sector)=>{
    const company= await fetch(`${baseUrl}/companies/${sector}`,{
        method:'GET',
        headers:requestHeaders,
     
    })
    .then(response=>{
        if(response.ok){
            return response.json()
        }else{
            response.json().then(respError=>{
                alert(`${respError.message}`)
            })
        }
    })
    return company
}

export const createNewUser=async(userBody)=>{
    const newUser= await fetch(`${baseUrl}/auth/register`,{
        method:'POST',
        headers:requestHeaders,
        body:JSON.stringify(userBody)
        
    })
    .then(response=>{
        if(response.ok){
            return response.json()
        }else{
            response.json().then(respError=>{
               console.log(`${respError.message}`)
            })
        }
    })
    return newUser
}

export const createLogin=async(userBody)=>{
    
try {

    const token= await fetch(`${baseUrl}/auth/login`,{
        method:'POST',
        headers:requestHeaders,
        body: JSON.stringify(userBody)
        })
        const response=token
        const responseJson=await response.json()
      
        if (response.ok){
        
        localStorage.setItem('@UserToken:token',JSON.stringify(responseJson.token))
                return responseJson.token
        }
    
} catch (error) {
  alert(error.message)
}
    
}


export const validateUser=async(token1)=>{
    try{
        const token= await fetch(`${baseUrl}/auth/validate_user`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
               'Authorization':`Bearer ${token1}`
            
            }
            })
            const response=token
            const responseJson=await response.json()
           
            if (response.ok){
                  
         
            localStorage.setItem('@Useradmin:admin',JSON.stringify(responseJson))
            return responseJson
            }            
                    
    }
   
   catch(error){
console.log(error)
   }

   }


export const getProfile=async()=>{
    const user= await fetch(`${baseUrl}/users/profile`,{
method:"GET",
headers:requestHeaders
    })

    .then(response=>{
        if(response.ok){
            return response.json()
        }else{
            response.json().then(error=>{
                console.log(error.message)
            })
        }
    })
    return user
}

export const updateProfileUser=async(updateBody)=>{
    const newInfor=await fetch(`${baseUrl}/users`,{
        method:'PATCH',
        headers:requestHeaders,
        body:JSON.stringify(updateBody)
    })

    .then(response=>{
        if(response.ok){
           return response.json()
        }else{
            response.json().then(error=>{
                alert(`${error.message}`)
            })
        }
    })
    return newInfor
}

export const getAlldepartments=async()=>{
    const departments= await fetch(`${baseUrl}/departments`,{
method:"GET",
headers:requestHeaders
    })

    .then(response=>{
        if(response.ok){
            return response.json()
        }else{
            response.json().then(error=>{
                console.log(error.message)
            })
        }
    })
    return departments
}


export const getdepartmentsEmpresas=async(id)=>{
    const departments= await fetch(`${baseUrl}/departments/${id}`,{
method:"GET",
headers:requestHeaders
    })

    .then(response=>{
        if(response.ok){
            return response.json()
        }else{
            response.json().then(error=>{
                console.log(error.message)
            })
        }
    })
    return departments
}



export const updateDepartments=async(id,departmentBody)=>{
    const departments= await fetch(`${baseUrl}/departments/${id}`,{
method:"PATCH",
headers:requestHeaders,
body: JSON.stringify(departmentBody)
    })

    .then(response=>{
        if(response.ok){
            return response.json()
        }else{
            response.json().then(error=>{
              toast2(error.message)
            })
        }
    })
    return departments
}

export const dellDepartments=async(id)=>{
    const departments= await fetch(`${baseUrl}/departments/${id}`,{
method:"DELETE",
headers:requestHeaders
    })

    .then(response=>{
        if(response.ok){
           return
        }else{
            response.json().then(error=>{
                toast2(error.message)
            })
        }
    })
    return departments
}


export const createDepartments=async(departBody)=>{
    const departments= await fetch(`${baseUrl}/departments`,{
method:"POST",
headers:requestHeaders,
body:JSON.stringify(departBody)
    })

    .then(response=>{
        if(response.ok){
            return response.json()
        }else{
            response.json().then(error=>{
               toast2(error.message)
            })
        }
    })
    return departments
}


export const getAllUsers=async()=>{
    const users= await fetch(`${baseUrl}/users`,{
method:"GET",
headers:requestHeaders
    })

    .then(response=>{
        if(response.ok){
            return response.json()
        }else{
            response.json().then(error=>{
                console.log(error.message)
            })
        }
    })
    return users
}

export const dellUsers=async(id)=>{
    const users= await fetch(`${baseUrl}/admin/delete_user/${id}`,{
method:"DELETE",
headers:requestHeaders
    })

    .then(response=>{
        if(response.ok){
          
        }else{
            response.json().then(error=>{
              console.log(error.message)
            })
        }
    })
    return users
}

export const updateUsersLevel=async(id,userBody)=>{
    const newLevel= await fetch(`${baseUrl}/admin/update_user/${id}`,{
method:"PATCH",
headers:requestHeaders,
body: JSON.stringify(userBody)
    })

    .then(response=>{
        if(response.ok){
            return response.json()
        }else{
            response.json().then(error=>{
                console.log(error.message)
            })
        }
    })
    return newLevel
}

export const getAllUsersOutOfWork=async()=>{
    const users= await fetch(`${baseUrl}/admin/out_of_work`,{
method:"GET",
headers:requestHeaders
    })

    .then(response=>{
        if(response.ok){
            return response.json()
        }else{
            response.json().then(error=>{
                console.log(error.message)
            })
        }
    })
    return users
}
export const contrataUser=async(body)=>{
    const users= await fetch(`${baseUrl}/departments/hire/`,{
method:"PATCH",
headers:requestHeaders,
body:JSON.stringify(body)
    })

    .then(response=>{
        if(response.ok){
            return response.json()
        }else{
            response.json().then(error=>{
                console.log(error.message)
            })
        }
    })
    return users
}

export const demiteUser=async(id)=>{
    const users= await fetch(`${baseUrl}/departments/dismiss/${id}`,{
method:"PATCH",
headers:requestHeaders,

    })

    .then(response=>{
        if(response.ok){
            return response.json()
        }else{
            response.json().then(error=>{
                console.log(error.message)
            })
        }
    })
    return users
}

export const getdepUser=async()=>{
    const users= await fetch(`${baseUrl}/users/departments`,{
method:"GET",
headers:requestHeaders,

    })

    .then(response=>{
        if(response.ok){
            return response.json()
        }else{
            response.json().then(error=>{
                console.log(error.message)
            })
        }
    })
    return users
}
export const getColegas=async()=>{
    const users= await fetch(`${baseUrl}/users/departments/coworkers`,{
method:"GET",
headers:requestHeaders,

    })

    .then(response=>{
        if(response.ok){
            return response.json()
        }else{
            response.json().then(error=>{
                console.log(error.message)
            })
        }
    })
    return users
}