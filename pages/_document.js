import Document,{NextScript,Head,Main} from 'next/document' ;

class Mydocument extends Document {
   

    render(){
        
        return (
            <html>
                <Head>
                   <title>Blogski</title>
                   <meta name="theme-color" content="#0ff000"></meta>
                    {/* <link rel="stylesheet" href="/_next/static/css/styles.chunk.css" ></link> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}

export default Mydocument ;
