import * as actionTypes from './actionTypes' ;
import fetch from 'isomorphic-unfetch' ;




export const authStart= () =>{
    return {
        type:actionTypes.AUTH_START
    }
}






export const authSuccess= (accessToken,username,email,refreshToken) =>{
    return {
        type:actionTypes.AUTH_SUCCESS,
        accessToken:accessToken,
        refreshToken:refreshToken ,
        username:username,
        email:email
    }
}



export const authFail= (error) =>{
    return {
        type:actionTypes.AUTH_FAIL,
        error:error
    }

}




export const authLogout= async  (token) =>{


    localStorage.removeItem('email')
    localStorage.removeItem('username')
    localStorage.removeItem('expiry') ;
    await  fetch('/api/users/logout/',{
        method:'POST',
        body:JSON.stringify({
            token:token
        })
    })
   
    return {
        type:actionTypes.AUTH_LOGOUT
    }

}




const checkauthtimeout = (expiry)=>{
    return dispatch =>setTimeout(()=>{
        dispatch(authLogout())
    },expiry)
}



export const authLogin= (email,password)=>{

    return dispatch=>{      
        localStorage.setItem('email',email)
        dispatch(authStart()) ;
        const authBody ={
            Email:email,
            password:password        
        }
        fetch('/api/users/login',{
            method:'POST',
            headers: { "Content-Type": "application/json" ,"Accept": "application/json" },
            mode:'same-origin',
            body:JSON.stringify({
                Email:email,
                password:password        
            }),
            credentials:'include'
        })
        .then(async (res) =>{
             const json = await res.json() 
            const accessToken=json.accessToken;
            const refreshToken=json.refreshToken ;
            console.log(json)
            const username=json.user.Username ;
            const expiry = new Date( new Date().getTime() + 3600*1000*24) ;
            localStorage.setItem('expiry',expiry) ;
            const email =localStorage.getItem('email') ;
            dispatch(authSuccess(accessToken,username,email,refreshToken)) ;
            dispatch(checkauthtimeout(3600*24,refreshToken)) ;
            console.log(document.cookie)
        })
        .catch(error=>{
            console.log(error)
            dispatch(authFail(error)) ;
            localStorage.setItem('username','') ;
            localStorage.setItem('email','') ;
        })

    }
}









export const authSignup = (username,email,pass1,pass2)=>{

    return dispatch =>{
        dispatch(authStart()) ;
        if(pass1===pass2){
            localStorage.setItem('username',username)
            localStorage.setItem('email',email) ;
            const authBody ={
                Username:username,
                Email:email,
                password:pass1
            }
            fetch('/api/users/signup/',{
                method:'POST',
                headers: { "Content-Type": "application/json" ,"Accept": "application/json" },
                mode:'same-origin',
                body:JSON.stringify(authBody),
                credentials:'include'}
               ).then(async (res)=>{
                const json = await res.json() ;
                console.log(json)
                    const accessToken=json.accessToken;
                    const refreshToken=json.refreshToken ;
                    const expiry = new Date( new Date().getTime() + 3600*1000*24) ;
                    localStorage.setItem('expiry',expiry) ;
                    const username =localStorage.getItem('username') ;
                    const email =localStorage.getItem('email') ;
                    dispatch(authSuccess(accessToken,username,email,refreshToken)) ;
                    dispatch(checkauthtimeout(3600*24,refreshToken)) ;
                    console.log('sign up')
                })
                .catch(error=>{
                    dispatch(authFail(error)) ;
                    localStorage.setItem('username','') ;
                    localStorage.setItem('email','') ;
                })

        
        }
    }
}


export const SocialLogin= (provider)=>{

    return async ( dispatch)=>{
          dispatch(authStart()) ;
           await fetch(`/auth/${provider}`,{
              method:'GET',
              mode:'no-cors',
              headers: { "Content-Type": "application/json" ,"Accept": "application/json" }
          })
          .then(async (res)=>{
             
              const responsejson= await res.json() ;
              console.log(responsejson)
              const accessToken=responsejson.accessToken;
              const username=responsejson.user.Username ;
              dispatch(authSuccess(accessToken,username,null,null)) ;
              
            //   const json = await res.json() ;
            //   console.log(json) ;
              
          }).catch(err=>{
              console.log(err)
              dispatch(authFail(err))
          })
    }
}



// export const refresh= async()=>{
//     return dispatch=>{
//         while(token)
//     }
// }