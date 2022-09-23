


import OverViewForm from "./OverViewForm";
import {useState} from 'react'
import './CreateContact.css';



  const CreateContact = () => {

  const [submitStatus, setSubmitStatus]=useState(true)
    
    return(
      //form page
        <div className="create-contacts-bg-container">
            <div className="contacts-top-container">
            <div>
                <h4 className="contacts-h4-heading">CONTACTS CREATE</h4>
            </div>
            <div>
                <button className="contact-save-button">Save</button>
                <button className="contact-cancel-button">Cancel</button>
            </div>
            </div>
            <hr className="contacts-hr-line"/>
                <div>
                  <OverViewForm setSubmitStatus={setSubmitStatus}/>
                </div>
                </div>
    
    )
}
export default CreateContact;
