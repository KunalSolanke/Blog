import App from 'next/app';
import React from 'react';
import {createWrapper} from "next-redux-wrapper";
import {configstore} from '../redux/store';
import '../scss/styles.scss' ;
class MyApp extends App {

    static async getInitialProps({Component, ctx}) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        //Anything returned here can be accessed by the client
        return {pageProps: pageProps};
    }
   

    render() {
        //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
        const {Component, pageProps} = this.props;
       console.log(this.props)

        return (
          
                <Component {...pageProps}/>
           
        );
    }
}

//makeStore function that returns a new store for every request
const makestore=()=> configstore() ;
const wrapper=createWrapper(makestore,{debug:true})
//withRedux wrapper that passes the store to the App Component
export default wrapper.withRedux(MyApp);


