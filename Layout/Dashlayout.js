import React ,{useEffect} from 'react'
import Sidebar from '../component/dashboard/sidebar'
import NavBar from '../component/dashboard/Navbar'
import {connect } from 'react-redux' ;
import Router from 'next/router'


function Dashlayout(props) {

    useEffect(()=>{
        if(!props.username){
            Router.push('/account/login')
        }

    },[props.username,props.token,props.error])
    
    return (
        <div className="dashboard_layout">
            <Sidebar />
            <div className="main-panel">
                <NavBar />
                {props.children}
            </div>
        </div>
    )
}

const mapStatetoProps = state=>{
    return {
        username : state.auth.username,
        token : state.auth.accessToken,
        error :state.auth.error 
    }
}
export default connect(mapStatetoProps,null)(Dashlayout)
