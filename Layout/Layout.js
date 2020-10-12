import '../scss/styles.scss' ;
// import '@fortawesome/fontawesome-free/css/all.css' ;
// import '@fortawesome/fontawesome-free/js/solid' ;
import NavBar from '../component/Navbar/NavBar';


function Layout(props){
    return (
        <div className="min-h-screen relative">
            <NavBar />
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Layout ;