// _app.js
// import React from 'react'
// import App, { Container } from 'next/app'

// import { config } from '@fortawesome/fontawesome-svg-core' // 👈
// // import '@fortawesome/fontawesome-svg-core/styles.css' // 👈
// // config.autoAddCss = false // 👈

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // 👈
// import { faBook } from '@fortawesome/free-solid-svg-icons' // 👈

// // Generic NextJS _app.js from https://github.com/zeit/next.js/#custom-app
// class MyApp extends App {
//   static async getInitialProps({ Component, ctx }) {
//     let pageProps = {}

//     if (Component.getInitialProps) {
//       pageProps = await Component.getInitialProps(ctx)
//     }

//     return { pageProps }
//   }

//   render() {
//     const { Component, pageProps } = this.props

//     return (
//       <Container>
//         <FontAwesomeIcon icon={faBook} /> /* 👈 */
//         <Component {...pageProps} />
//       </Container>
//     )
//   }
// }

// export default MyApp