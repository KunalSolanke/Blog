
import React, { Component } from "react";
import DashLayout from '../Layout/Dashlayout' ;
import { Card } from "../component/Card/Card";
import { FormInputs } from "../component/Forminputs/FormInputs";
import { UserCard } from "../component/UserCard/UserCard";
//import Button from "../components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/face-1.jpg";

class UserProfile extends Component {
  render() {
    return (
      <DashLayout >
      <div className="content dash_body">
        <div className="grid grid-cols-12 gap-4">
         
            <div  className="col-span-12 md:col-span-8">
              <Card
                title="Edit Profile"
                content={
                  <form>
                    <FormInputs
                      ncols={["md:col-span-5", "md:col-span-3", "md:col-span-4"]}
                      properties={[
                        {
                          label: "Company (disabled)",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Company",
                         
                          disabled: true
                        },
                        {
                          label: "Username",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Username",
                          defaultValue:"kunal12"
                         
                        },
                        {
                          label: "Email address",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "Email",
                          defaultValue:"kunal@gmail.com"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["md:col-span-6", "md:col-span-6"]}
                      properties={[
                        {
                          label: "First name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "First name",
                          defaultValue:"Kunal"
                          
                        },
                        {
                          label: "Last name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Last name",
                          defaultValue :"Solanke"
                         
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["md:col-span-12"]}
                      properties={[
                        {
                          label: "Address",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Home Adress",
                          
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["md:col-span-4", "md:col-span-4", "md:col-span-4"]}
                      properties={[
                        {
                          label: "City",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "City",
                          
                        },
                        {
                          label: "Country",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Country",
                         
                        },
                        {
                          label: "Postal Code",
                          type: "number",
                          bsClass: "form-control",
                         
                        }
                      ]}
                    />

                    <div className="grid grid-cols-12 ">
                      <div  className="col-span-12 md:colsspan-12">
                        <div className='form-group' controlId="formControlsTextarea">
                          <label>About Me</label>
                          <textarea className="form-control w-full" 
                            rows="10"
                            
                            placeholder="Here can be your description"
                            value=""
                          />
                        </div>
                      </div>
                    </div>
                    <button className="btn-info btn btn-simple bg-blue-400 float-right" type="submit">
                      Update Profile
                    </button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </div>
            <div className ="col-span-12 md:col-span-4">
              <UserCard
                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                avatar={avatar}
                name="Kunal Solanke"
                userName="Kunal12"
                description={
                  <span>
                    Lorem is
                    <br />
                  
                    <br />
                    I'm in that two seat Lambo"
                  </span>
                }
                socials={
                  <div>
                    <button className="btn btn-simple" >
                      <i className="fa fa-facebook-square" />
                    </button>
                    <button className="btn-simple" >
                      <i className="fa fa-twitter" />
                    </button>
                    <button className="btn btn-simple" >
                      <i className="fa fa-google-plus-square" />
                    </button>
                  </div>
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
