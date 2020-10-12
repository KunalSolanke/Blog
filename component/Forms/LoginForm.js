import {useEffect} from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/js/fontawesome'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faLock } from '@fortawesome/free-solid-svg-icons' ;
library.add(faLock) ;
import {authLogin,SocialLogin} from '../../redux/actions/auth'
import {connect} from 'react-redux' ;
import Router from 'next/router' ;




function LoginForm(props){
   async  function AuthLogin(event){
        event.preventDefault() ;
     const email=event.target.elements[0].value ;
     const password=event.target.elements[1].value ;
     await props.login(email,password) ;
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
     <form className="flex  flex-col items-center justify-center pl-4" onSubmit={(e)=>AuthLogin(e)}>
         {props.error}
         <div className=" p-3 w-full text-center">
                 <FontAwesomeIcon icon={faLock} size='2x' color="#48bb78" />
         </div>
         <div className="w-full text-center mb-8">
             <p className="uppercase font-mono">Login</p>
         </div>
         <div className=" mb-4">
         <label htmlFor="username text-xl">Email:</label><br />
          <input type="email" className="border-b-2 rounded-b px-4 focus:border-green-600 w-56" required ></input>
         </div>
         <div className=" mb-4">
         <label htmlFor="password">Password:</label><br></br>
          <input type="password" className="border-b-2 rounded-b px-4 focus:border-green-600 w-56" required></input>
         </div>
        
          <div className="buttons flex flex-col">
              <button htmltype="submit" className="px-20 py-1 mb-2 bg-blue-100">Login</button>
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

const mapDispatchToprops = dispatch =>{
    return{
        login:(email,password)=>dispatch(authLogin(email,password)),
        sociallogin:(provider)=>dispatch(SocialLogin(provider)) 
    }
}
export default connect(mapStatetoProps,mapDispatchToprops)(LoginForm) ;