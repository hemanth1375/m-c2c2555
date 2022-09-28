
import { translate } from "languages";
import './CreateContact.css';
import OverViewForm from "./OverViewForm";



  const CreateContact = () => {

    
    return(

       //form page

      <div className='container-fluid form-container'>
        <div className='row'>
          <div className='col-sm-12 pl-0 pr-0'>
            <h4 className="text-left pl-3 pt-3 form-title">{translate("createContact")}</h4>
            <hr className="form-horizontal-line-for-devide" />
              <OverViewForm /> 
          </div>
        </div>
      </div>
     
        
    
    )
}
export default CreateContact;
