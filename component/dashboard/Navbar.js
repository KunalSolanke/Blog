import React from 'react' ;
import Link from 'next/link'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/js/fontawesome'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
library.add(faSearch)



function Navbar() {


    return (
        <div className="dash_nabvar flex p-4 justify-between items-center bg-white">
            <div className="brand flex items-center justify-between">
                <p className="text-black text pr-4">Dashboard</p>
                <div className="hover:text-blue-500">
                    <FontAwesomeIcon icon ={faSearch} className="hover:text-blue-500"></FontAwesomeIcon>
                </div>
            </div>
            <div>
                <Link href="/logout"><a className="text-center text-gray-800"><p className="text-center text-gray-800">Logout</p></a></Link>
            </div>
        </div>
    )
}

export default Navbar
