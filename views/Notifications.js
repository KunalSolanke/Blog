
import React, { Component } from "react";
import DashLayout from '../Layout/Dashlayout'
//import Button from "components/CustomButton/CustomButton.jsx";

class Notifications extends Component {
  render() {
    return (
     <DashLayout >
      <div className="content">
        <div className="grid grid-cols-12 gap-4">
          <div className="card col-span-12">
            <div className="header">
              <h4 className="title">Notifications</h4>
              
            </div>
            <div className="content">
              <div className="grid grid-cols-12 gap-3">
                <div class="cols-span-12 mx-auto md:col-span-6">
                  
                  <div data-color="info" className="notification">
                    <span>This is a plain notification</span>
                  </div>
                  <div data-color="info" className="notification">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>This is a notification with close button.</span>
                  </div>
                  <div data-color="info"  className="alert-with-icon notification">
                    <button type="button" aria-hidden="true" className="close rounded-0 hover:bg-white px-2">
                      &#x2715;
                    </button>
                    <span data-notify="icon" className="pe-7s-bell" />
                    <span data-notify="message">
                      This is a notification with close button and icon.
                    </span>
                  </div>
                  <div data-color="info" className="alert-with-icon notification">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span data-notify="icon" className="pe-7s-bell" />
                    <span data-notify="message">
                      This is a notification with close button and icon and have
                      many lines. You can see that the icon and the close button
                      are always vertically aligned. This is a beautiful
                      notification. So you don't have to worry about the style.
                    </span>
                  </div>
                </div>
                
              </div>
              <br />
              <br />
              
            </div>
          </div>
        </div>
      </div>
      </DashLayout>
    );
  }
}

export default Notifications;
