import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/js/fontawesome'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faLock } from '@fortawesome/free-solid-svg-icons' ;
library.add(faLock) ;
import {authSignup,SocialLogin} from '../../redux/actions/auth'
import { connect} from 'react-redux'
import Router from 'next/router' ;
import {useEffect} from 'react'

function RegisterForm(props){

    async  function AuthSignup(event){
     event.preventDefault() ;
     const username=event.target.elements[0].value ;
     const email=event.target.elements[1].value ;
     const pass1=event.target.elements[2].value ;
     const pass2=event.target.elements[3].value ;
     await props.signup(username,email,pass1,pass2) ;
    
    
    }
    async  function sociallogin(event,provider){
        event.preventDefault() ;
     
        await props.sociallogin(provider) ;
       
    }
    useEffect(()=>{
        if(props.username ||props.token && !props.error){
            Router.push('/dashboard')
        }

    },[props.username,props.token,props.error])
    return(
     <>
     <form className="flex  flex-col items-center justify-center pl-4" onSubmit={(e)=> AuthSignup(e)}>
         <div className=" p-3 w-full text-center">
                 <FontAwesomeIcon icon={faLock} size='2x' color="#48bb78" />
         </div>
         <div className="w-full text-center mb-8">
             <p className="uppercase font-mono">Register</p>
         </div>
         <div className=" mb-4">
          <label htmlFor="username" className="font-mono">Username:</label><br />
          <input type="text" className="bg-transperent  border-b-2 rounded-b px-4 focus:border-green-600 w-56"></input>
         </div>
         <div className=" mb-4">
         <label htmlFor="username">Email:</label><br />
          <input type="email" className="border-b-2 rounded-b px-4 focus:border-green-600 w-56"></input>
         </div>
         <div className=" mb-4">
         <label htmlFor="password">Password:</label><br></br>
          <input type="password" className="border-b-2 rounded-b px-4 focus:border-green-600 w-56"></input>
         </div>
         <div className=" mb-4">
         <label htmlFor="password">confirm:</label><br></br>
          <input type="password" className=" bg-transperent border-b-2 rounded-b px-4 focus:border-green-600 w-56"></input>
          </div>
          <div className="buttons flex flex-col">
              <button type="submit" className="px-20 py-1 mb-2 bg-blue-100">Register</button>
              <button onClick={(e)=>{sociallogin(e,'google')}} className="px-20 py-1 mb-2 bg-red-500">Google</button>
              <button onClick={(e)=>{sociallogin(e,'facebook')}} className="px-20 py-1 mb-2 bg-blue-600">Facebook</button>
          </div>
     </form>
     
    </>
    )
}

const mapStatetoProps = state=>{
    return {
        username : state.auth.username,
        token : state.auth.accessToken,
        error :state.auth.error 
    }
}


export default connect(mapStatetoProps,null)(RegisterForm) ;