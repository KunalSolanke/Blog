import React from 'react' ;
import Bloglayout from '../Layout/BlogLayout' ;
import Card from '../component/Card/Card' 
import FormInputs from '../component/Forminputs/FormInputs'

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/js/fontawesome'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faStar,faComment,faBook } from '@fortawesome/free-solid-svg-icons' ;
library.add(faStar,faComment,faBook) ;

function BlogDashboard(){
    return (
        <Bloglayout>
            <div className="content">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-6">
                        <Card 
                            title ="Quick Draft"
                            content ={
                                <form>
                                    <FormInputs 
                                       ncols={["md:col-span-12"]}
                                       properties={[
                                         {
                                           label: "Title",
                                           type: "text",
                                           bsClass: "form-control",
                                           placeholder: "Title",
                                            
                                         }
                                       ]}
                                       />
                                       <div className="grid grid-cols-12 ">
                                            <div  className="col-span-12 md:col-span-12">
                                                <div className='form-group' controlId="formControlsTextarea">
                                                <label>Content</label>
                                                <textarea className="form-control w-full" style={{height:'130px'}}
                                                    
                                                    placeholder="Here can be your Contnet"
                                                    
                                                />
                                                </div>
                                            </div>
                                            </div>
                                            <button className="mt-4 float-right bg-green-400 px-8 py-1 rounded-full" type="submit">
                                            Create
                                            </button>
                                            <div className="clearfix" />
                                </form>
                                
                            } />

                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <div className="mb-4 w-full">
                        <Card 
                            title ="At a Glance"
                            content ={
                                <div className="flex items-center justify-between px-10 py-4 text-center">
                                    <div>
                                        20<br/>
                                        <FontAwesomeIcon icon={faBook}></FontAwesomeIcon><br />
                                        Posts
                                    
                                    </div>
                                    <div>
                                        100<br />
                                    <FontAwesomeIcon icon={faComment}></FontAwesomeIcon><br />
                                        Commnets
                                    </div>
                                    <div>
                                        40 <br />
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon><br/>
                                     Followers
                                    </div>

                                </div>
                            } />
                               
                        </div>
                        <div className="w-100">
                        <Card 
                            title ="Tasks"
                            content ={
                                <div>
                                </div>
                            } />
                                    
                        </div>
                    </div>

                </div>
            </div>
        </Bloglayout>
    )
}

export default BlogDashboard ;