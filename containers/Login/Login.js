import './Login.module.scss'
import loginsvg from '../../assets/img/register.svg'
import LoginForm from '../../component/Forms/LoginForm' ;
function LoginCard(){
    return (
        <div className="container mx-auto mid:mt-6  flex sm:mt-5 lg:mt-20 z-10 relative items-center justify-center border-2 flex-wrap">
            <div className="svgBox w-full sm:w-full md:w-1/2">
                <img src={loginsvg} alt="register"></img>
            </div>
            <div className="form w-full sm:w-full md:w-1/2">
                  <LoginForm />
            </div>


        </div>
    )
}

export default LoginCard ;