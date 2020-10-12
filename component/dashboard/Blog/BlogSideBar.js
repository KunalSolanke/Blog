import React,{useState,useEffect} from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/js/fontawesome'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faLock,faPlusCircle,faBell,faBookOpen,faChartPie,faPortrait } from '@fortawesome/free-solid-svg-icons' ;
library.add(faLock,faPlusCircle,faBell,faBookOpen,faChartPie,faPortrait) ;
import Link from 'next/link' ;
import {useRouter} from 'next/router'

const  sidebar= ()=>{
    
    const router = useRouter() ;
    const bid = router.query.bid ;
    const [width,setwidth] = useState(0) ;
    useEffect(()=>{
        setwidth(window.innerwidth)
    },[])



    return (
        <div className="sidebar w-1/6 bg-green-400" id="sidebar" data-color="green">
            <div className="logo brand">
              <p className="text-2xl font-mono font-semibold text-center text-white uppercase"><Link href="/"><a>Blog One</a></Link></p>
            </div>
            <div className="sidebar-wrapper">
                  <ul className="nav">
                      <li className ="" key="side_1">
                          <FontAwesomeIcon icon={faChartPie} size="1x"  />
                          <Link as={"/dashboard/blogs/"+bid} href="/dashboard/blogs/[bid]">
                               <a className="mr-10 hover:text-black duration-200" activeClassName="active"><p>Dashboard</p></a>
                          </Link>
                      </li>
                     
                      <li className ="" key="side_3">
                          <FontAwesomeIcon icon={faPlusCircle} size="1x"  />
                          <Link as={"/dashboard/blogs/" +bid+"/create_post"} href="/dashboard/blogs/[bid]/create_post">
                          <a className="mr-10 hover:text-black duration-200">Create Post</a>
                          </Link>
                      </li>
                      <li className ="" key="side_4">
                          <FontAwesomeIcon icon={faBell} size="1x"  />
                          <Link as={"/dashboard/blogs/"+bid+"/posts"} href="/dashboard/blogs/[bid]/posts">
                             <a className="mr-10 hover:text-black duration-200">Posts</a>
                          </Link>
                      </li>
                      <li className ="" key="side_2">
                          <FontAwesomeIcon icon={faBookOpen} size="1x"  />
                          <Link as={"/dashboard/blogs/"+bid+"/appearance"} href="/dashboard/blogs/[bid]/appearance">
                          <a className="mr-10 hover:text-black duration-200">Appearance</a>
                          </Link>
                      </li>
                     
                  </ul>
               
            </div> 
        </div>
    )
}


export async function getStaticProps(context) {
    return {
      props: {}, // will be passed to the page component as props
    }
  }


export default sidebar
