
import React, { Component } from "react";
import DashLayout from '../Layout/Dashlayout' ;
import { Card } from "../component/Card/Card";
import { FormInputs } from "../component/Forminputs/FormInputs";

//import Button from "../components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/face-1.jpg";

class UserProfile extends Component {
  render() {
    return (
      <DashLayout >
      <div className="content dash_body">
        <div className="grid grid-cols-12 gap-4">
         
            <div  className="col-span-12 md:col-span-8 md:col-start-3 md:col-end-11">
              <Card
                title="Create New Blog"
                content={
                  <form>
                    <FormInputs
                      ncols={["md:col-span-6", "md:col-span-6"]}
                      properties={[
                        {
                          label: "Blog Name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Name of the blog",
                         
                          
                        },
                        {
                          label: "Topic",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Topic",
                        
                        },
                        
                      ]}
                    />
                    <FormInputs
                      ncols={["md:col-span-6", "md:col-span-6"]}
                      properties={[
                        {
                          label: "Image",
                          type: "file",
                          bsClass: "form-control",
                          placeholder: "Blog imagr",
                          
                        },
                        {
                          label: "Blog Logo",
                          type: "file",
                          bsClass: "form-control",
                          placeholder: "Blog logo",
                         
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["md:col-span-12"]}
                      properties={[
                        {
                          label: "CoAuthors",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Authors",
                          multiple :true ,
                          
                        }
                      ]}
                    />
                    

                    <div className="grid grid-cols-12 ">
                      <div  className="col-span-12 md:col-span-12">
                        <div className='form-group' controlId="formControlsTextarea">
                          <label>About Blog</label>
                          <textarea className="form-control w-full" 
                            rows="10"
                            
                            placeholder="Here can be your description"
                          
                          />
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-simple  float-right bg-blue-500" type="submit">
                      Create
                    </button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </div>
            
          </div>
        </div>
        </DashLayout>
    );
  }
}

export default UserProfile;
