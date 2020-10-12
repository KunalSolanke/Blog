import Link from 'next/link'

function NavBar(){
    return(
        <div className="bg-green-400  py-2">
            <nav className="flex container mx-auto items-center justify-between py-2">
            <div className="w-1/3 brand">
                <Link href="#"><a className="font-semibold font-mono text-2xl text-white uppercase">Blogski</a></Link>
            </div>
            <div className="flex w-2/3 items-center justify-between">
                <div className="nav-items">
                    <Link href="/"><a className="mr-10 hover:text-white duration-200 ">Home</a></Link>
                    <Link href="/services"><a className="mr-10 hover:text-white duration-200">Services</a></Link>
                    <Link href="/about"><a className="mr-10 hover:text-white duration-200">About</a></Link>
                    <Link href="#"><a className="mr-10 hover:text-white duration-200">Account</a></Link>
                    <Link href="/contact"><a className="mr-10 hover:text-white duration-200">Contact</a></Link>   
                </div>
                <div className="flex search">
                    <div className="w-full searchbox">
                        <input className="bg-green-300 p-1 px-3 rounded-full  focus:border-green-700 focus:border-2 placeholder-white" type="text" placeholder="Search"></input>
                    </div>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default NavBar ;