import React from 'react' ;
import Card from '../component/Card/Card' ;
import DashLayout from '../Layout/Dashlayout'
import hero_img from '../assets/img/hero_img.svg'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/js/fontawesome'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons' ;
library.add(faArrowCircleRight) ;
function Blogs() {
    return (
        <DashLayout >
        <div className="content dash_body">
            <div className="text-2xl upper"><h4>My Blogs</h4></div>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                    <Card 
                       title ="Blog One"
                       extraClass="blog_card"
                       content ={
                           <div className="blog-image">
                               <div className="blog_icon absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                                  <FontAwesomeIcon icon={faArrowCircleRight} size="2x"/>
                               </div>
                               <img src={hero_img} className="object-cover object-center"></img>
                           </div>
                       } >

                    </Card>
                </div>
                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                    <Card 
                       title ="Blog One"
                       extraClass="blog_card"
                       content ={
                           <div className="blog-image">
                               <div className="blog_icon absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                                  <FontAwesomeIcon icon={faArrowCircleRight} size="2x"/>
                               </div>
                               <img src={hero_img} className="object-cover object-center"></img>
                           </div>
                       } >

                    </Card>
                </div>
                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                    <Card 
                       title ="Blog One"
                       extraClass="blog_card"
                       content ={
                           <div className="blog-image">
                               <div className="blog_icon absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                                  <FontAwesomeIcon icon={faArrowCircleRight} size="2x"/>
                               </div>
                               <img src={hero_img} className="object-cover object-center"></img>
                           </div>
                       } >

                    </Card>
                </div>
                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                    <Card 
                       title ="Blog One"
                       extraClass="blog_card"
                       content ={
                           <div className="blog-image">
                               <div className="blog_icon absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                                  <FontAwesomeIcon icon={faArrowCircleRight} size="2x"/>
                               </div>
                               <img src={hero_img} className="object-cover object-center"></img>
                           </div>
                       } >

                    </Card>
                </div>
                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                    <Card 
                       title ="Blog One"
                       extraClass="blog_card"
                       content ={
                           <div className="blog-image">
                               <div className="blog_icon absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                                  <FontAwesomeIcon icon={faArrowCircleRight} size="2x"/>
                               </div>
                               <img src={hero_img} className="object-cover object-center"></img>
                           </div>
                       } >

                    </Card>
                </div>
                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                    <Card 
                       title ="Blog One"
                       extraClass="blog_card"
                       content ={
                           
                           <div className="blog-image">
                               <div className="blog_icon absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                                  <FontAwesomeIcon icon={faArrowCircleRight} size="2x"/>
                               </div>
                               <img src={hero_img} className="object-cover object-center"></img>
                           </div>
                       } >

                    </Card>
                </div>

            </div>
            
        </div>
        </DashLayout>
    )
}

export default Blogs
