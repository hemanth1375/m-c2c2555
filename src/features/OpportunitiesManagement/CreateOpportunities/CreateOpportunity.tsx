import BasicForm from './BasicForm';
import {useState} from 'react'
import './CreateOpportunity.css';
import { translate } from 'languages';
import OtherForm from './OtherForm';

const CreateOpportunity = (props:any) => {
  const [isBasicFormDisplay, setIsBasicFormDisplay] = useState(true);
  const [isOtherFormDisplay, setIsOtherFormDisplay] = useState(false);

  
  const displayBasicForm = () => {
    setIsOtherFormDisplay(false);
      setIsBasicFormDisplay(true);
      
  }
  const displayOtherForm = () => {
    setIsBasicFormDisplay(false);
    setIsOtherFormDisplay(true);
    
  }

    
    return(
     
      <div className='container-fluid form-container'>
        <div className='row'>
          <div className='col-sm-12 pl-0 pr-0'>
            <h4 className="text-left form-title">{translate("createOpportunity")}</h4>
            
            <hr className="opportunities-hr-line" />
            <div className='d-flex mb-5 ml-4'>
              <button className="button-tabs mr-4" onClick={displayBasicForm}>BASIC</button>
                <button className="button-tabs" onClick={displayOtherForm}>OTHER</button>
            </div>
            {isBasicFormDisplay && <BasicForm/>} 
            {isOtherFormDisplay && <OtherForm />}
            <div className="container p-4">
        <div className="row">
          <div className="col-sm-12 text-sm-center text-md-right">
            <button className="btn btn-primary mr-3"
              type="submit" form="my-opportunity-form">Save</button>
              <button className="btn btn-primary">Cancel</button>
          </div>
        </div>  
      </div>  
          </div>
        </div>
      </div>
          
    )
}
export default CreateOpportunity;
