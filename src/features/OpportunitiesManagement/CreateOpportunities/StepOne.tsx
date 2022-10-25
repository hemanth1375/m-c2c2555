import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { translate } from "languages";



const stepOneValidationSchema = Yup.object({
    opportunity_name: Yup.string().required().label("*Opportunity name"),
      account_name: Yup.string().required().label("*Account name"),
      opportunity_amount: Yup.number().typeError('*you must specify a number').min(0, 'Min value 0.').required("*Amount is required"),
      
      expected_close_date: Yup.date().required("* Close Date is Required"),
      probability:Yup.number().typeError('*you must specify a number').min(0, 'Min value 0.').required("*Required"),
      next_step: Yup.string().required("* Required"),
      campaign: Yup.string().required("* Campaign to Someone"),
      assigned_to: Yup.string().required("* Assign to some one"),
});
  
const StepOne = (props: any) => {
  const [selectedOption,setSelectedOption]=useState<string>()
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const TriggredValue = event.target.value;
    setSelectedOption(TriggredValue);
  };
    const handleSubmit = (values: any) => {
      props.next(values);
    };
  
    return (
      <Formik
        validationSchema={stepOneValidationSchema}
        initialValues={props.data}
        onSubmit={handleSubmit}
      >
            {() => (
                <>
                    <div className="container-fluid p-3">
                        <div className="row">
                            <div className="col-sm-12">
                                <h3>CREATE OPPORTUNITY</h3><hr/>
                                <p style={{fontSize:"16px",fontWeight:"550"}}>BASIC</p>
                            </div>
                        </div>
                    
          <Form>
                    
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-3 mb-3">
                                    <p>{translate("opportunityName")}:</p>
                                <div className="d-flex flex-column">
                                    <Field name="opportunity_name"/>
                                    <div className="error-text">
                                      <ErrorMessage name="opportunity_name" /> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3 mb-3">
                              <p>{translate("accountName")}:</p>
                              <div className="d-flex flex-column">
                                    <Field placeholder="Type to search" name="account_name" />
                                    <div className="error-text">
                                      <ErrorMessage name="account_name" /> 
                                    </div>
                                </div>
                            </div>
  
                            <div className="col-sm-12 col-md-8 col-lg-6 mb-3">
                                <p>{translate("opportunityAmount")}:</p>
                                <div className="row">
                                    <div className="col-sm-6">
                                      <select onChange={selectChange} className="w-100" style={{height:"27px"}}>
                                          <option value={selectedOption}>Currency</option>
                                          <option value={selectedOption}>Usd</option>
                                      </select>
                                    </div>
                                    <div className="col-sm-6 d-flex flex-column">
                                      <Field name="opportunity_amount" placeholder="Enter the amount" />
                                      <div className="error-text">
                                          <ErrorMessage name="opportunity_amount" /> 
                                      </div>
                                    </div> 
                                </div>   
                            </div>
  
                            <div className="col-sm-12 col-md-4 col-lg-3 mb-3">
                                    <p>{translate("expectedCloseDate")}:</p>
                              <div className="d-flex flex-column">
                                    <Field type="date" name="expected_close_date" />
                                    <div className="error-text">
                                      <ErrorMessage name="expected_close_date" /> 
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-sm-12 col-md-4 col-lg-3 mb-3">
                                    <p>{translate("salesStage")}:</p>
                                <select onChange={ selectChange} className="w-100" style={{height:"27px"}}>
                                  <option value={selectedOption}>Select an item</option>
                                  <option value={selectedOption}>Prospecting</option>
                                  <option value={selectedOption}>Qualifiction</option>
                                  <option value={selectedOption}>Needs Analysis</option>
                                </select>
                            </div>
  
                            <div className="col-sm-12 col-md-4 col-lg-3 mb-3">
                                <p>{translate("type")}:</p>
                                <select onChange={selectChange} className="w-100" style={{height:"27px"}}>
                                  <option value={selectedOption}>Select an item</option>
                                  <option value={selectedOption}>Existing Business</option>
                                  <option value={selectedOption}>New Business</option> 
                                </select>
                            </div>
  
                            <div className="col-sm-12 col-md-4 col-lg-3 mb-3">
                                    <p>{translate("probability(%)")}:</p>
                              <div className="d-flex flex-column">
                                    <Field name="probability" />
                                    <div className="error-text">
                                      <ErrorMessage name="probability" /> 
                                    </div>
                                </div>
                            </div>
  
                            <div className="col-sm-12 col-md-4 col-lg-3 mb-3">
                                    <p>{translate("type")}:</p>
                                <select className="w-100" style={{height:"27px"}}>
                                <option>Select an item</option>
                                  <option value={selectedOption}>Cold Call</option>
                                  <option value={selectedOption}>Existing Customer</option>
                                  <option value={selectedOption}>Self Generated</option>
                                  <option value={selectedOption}>Employee</option>
                                  <option value={selectedOption}>Partner</option>
                                  <option value={selectedOption}>Public Relationship</option>
                                  <option value={selectedOption}>Direct Mail</option>
                                  <option value={selectedOption}>Conference</option>
                                  <option value={selectedOption}>Trade Show</option>
                                  <option value={selectedOption}>Website</option>
                                  <option value={selectedOption}>Word of Mouth</option>
                                  <option value={selectedOption}>Email</option>
                                  <option value={selectedOption}>Campaign</option>
                                  <option value={selectedOption}>Other</option>
                              </select>
                          </div>
                          
                          <div className="col-sm-12 col-md-4 col-lg-3 mb-3">
                                    <p>{translate("nextStep")}:</p>
                                <div className="d-flex flex-column">
                                    <Field name="next_step" />
                                    <div className="error-text">
                                      <ErrorMessage name="next_step" /> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-3 mb-3">
                                    <p>{translate("campaign")}:</p>
                              <div className="d-flex flex-column">
                                    <Field placeholder="Type to search" name="campaign" />
                                    <div className="error-text">
                                      <ErrorMessage name="campaign" /> 
                                    </div>
                                </div>
                            </div>
  
                            <div className="col-sm-12 col-md-4 col-lg-3 mb-3">
                                    <p>{translate("assignedTo")}:</p>
                              <div className="d-flex flex-column">
                                    <Field placeholder="Type to search" name="assigned_to" />
                                    <div className="error-text">
                                      <ErrorMessage name="assigned_to" /> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-8 col-lg-6 mb-3">
                                    <p>{translate("description")}:</p>
                                <textarea className="w-100" rows={1} cols={54}></textarea>
                            </div>
                      </div>
                            
                  <div className="text-right">
                      <button className="btn btn-primary mr-5" type="submit">Next</button>
                  </div>
                    </Form>
                    </div>
          </>
        )}
      </Formik>
    );
};
export default StepOne;