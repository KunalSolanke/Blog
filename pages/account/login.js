import wave from '../../assets/img/registerwave.svg' ;
import Layout from '../../Layout/Layout' ;
import LoginCard from '../../containers/Login/Login'
import {connect} from 'react-redux' ;

function Login(props){
       console.log(props.username,props.loading) ;
    return (
        <Layout>
          <div className="registerpage bg-blue-900">
            <img className="absolute bottom-0 z-0"src={wave}></img>
        </div>
        <LoginCard className="z-10"/>
        </Layout>
    )
}

const mapStateToProp=(state)=>{
    return {
        username:state.auth.username,
        loading:state.auth.loading
    }
}

export default connect(mapStateToProp,null)(Login) ;