import BasicForm from './BasicForm';
import {useState} from 'react'
import './CreateOpportunity.css';

  const CreateOpportunity = () => {
  

  const [submitStatus, setSubmitStatus]=useState(true)
    
    return(
      
      <div className='container-fluid form-container'>
        <div className='row'>
          <div className='col-sm-12 pl-0 pr-0'>
            <h4 className="text-left pl-3 pt-3 form-title">CREATE OPPORTUNITY</h4>
            <hr className="opportunities-hr-line" />
              <BasicForm /> 
          </div>
        </div>
      </div>
            
    )
}
export default CreateOpportunity;
