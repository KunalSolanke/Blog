import './Register.module.scss'
import registersvg from '../../assets/img/login.svg'
import RegisterForm from '../../component/Forms/RegisterForm' ;
function RegisterCard(){
    return (
        <div className="container mx-auto mid:mt-6  flex sm:mt-5 lg:mt-20 z-10 relative items-center justify-center border-2 flex-wrap">
            <div className="svgBox w-full sm:w-full md:w-1/2">
                <img src={registersvg} alt="register"></img>
            </div>
            <div className="form w-full sm:w-full md:w-1/2">
                  <RegisterForm />
            </div>


        </div>
    )
}

export default RegisterCard ;