import React, { useState, useRef } from "react";
import "./BasicForm.css";
import { BasicFormInput, BasicFormInputLabel } from "components/forms";
import { withFormik, FormikProps } from "formik";
import * as Yup from "yup";

interface FormValues {
  opportunityName?: string;
  accountName?: string;
  opportunityAmount?: number;
  expectedCloseDate?: number;
  salesStage?: string;
  type?: string;
  probability?: number;
  leadSource?: string;
  nextStep?: string;
  campaign?: string;
  assignTo?: string;
  description?: string;
  dateModified?: number;
  dateCreated?: number;
}

interface OtherProps {
  ref?: any;
  setSubmit: boolean;
}

interface MyFormProps {
  initialOpportunityName?: string;
  initialAccountName?: string;
  initialOpportunityAmount?: number;
  initialExpectedCloseDate?: number;
  initialSalesStage?: string;
  initialType?: string;
  initialProbability?: number;
  initialLeadSource?: string;
  initialNextStep?: string;
  initialCampaign?: string;
  initialAssignTo?: string;
  initialDescription?: string;
  initialDateModified?: number;
  initialDateCreated?: number;
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const [selectedOption, setSelectedOption] = useState<string>();
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [value, setValue] = useState<string>();
  // This function is triggered when the select changes
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const TriggredValue = event.target.value;
    setSelectedOption(TriggredValue);
  };

  const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    ref,
  } = props;

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
      <div className="form-heading-container">
        <h5 className="form-tab-heading">BASIC</h5>
      </div>
      
      <div className="basic-white-form mb-4">
        <form onSubmit={handleSubmit}>
          <div className='container-fluid'>
            <div className="row">
                
                  <div className="col-sm-12 col-md-6 col-lg-3">
                    <BasicFormInputLabel id="formOpportunityName">
                      OPPORTUNITY NAME:
                    </BasicFormInputLabel>
                    <BasicFormInput
                      type="text"
                      name="opportunityName"
                      id="formOpportunityName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.opportunityName}
                      red={touched.opportunityName && errors.opportunityName && true}
                  />
                  {touched.opportunityName && errors.opportunityName && (
                  <div className="form-validation-errors">
                    {errors.opportunityName}
                  </div>
                )}
                </div>
                
                  <div className="col-sm-12 col-md-6 col-lg-3">
                  <BasicFormInputLabel htmlFor="formAccountName">
                    ACCOUNT NAME:
                  </BasicFormInputLabel>
                  <BasicFormInput
                    type="text"
                    name="accountName"
                    id="formAccountName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                      value={values.accountName}
                      placeholder="Type to search"
                    red={touched.accountName && errors.accountName && true}
                  />
                  {touched.accountName && errors.accountName && (
                  <div className="form-validation-errors">
                    {errors.accountName}
                  </div>
                )}
                  </div>
                  <div className="col-sm-12 col-md-8 col-lg-6">
                  <BasicFormInputLabel htmlFor="formOpportunityAmount">
                    OPPORTUNITY AMOUNT:
                    </BasicFormInputLabel>
                  <div className="row">
                      <div className="col-sm-6 inner-label">
                        <div>
                          <select
                            onChange={selectChange}
                            className="overview-select-item"
                            defaultValue={"Select an item"}
                          >
                            <option value={selectedOption}>Currency</option>
                            <option value={selectedOption}>USD</option>
                            
                          </select>
                        </div>
                  </div>
                  <div className="col-sm-6 inner-label">
                            
                            <BasicFormInput
                              type="text"
                              name="opportunityAmount"
                              id="formOpportunityAmount"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="Enter the amount"
                              value={values.opportunityAmount}
                              red={touched.opportunityAmount && errors.opportunityAmount && true}
                      />
                      {touched.opportunityAmount && errors.opportunityAmount && (
                  <div className="form-validation-errors">
                    {errors.opportunityAmount}
                  </div>
                )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-sm-12 col-md-4 col-lg-3">
                  <BasicFormInputLabel htmlFor="formExpectedCloseDate">
                      EXPECTED CLOSE DATE:
                    </BasicFormInputLabel> 
                  <BasicFormInput
                    type="date"
                    id="expectedCloseDate"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.expectedCloseDate}
                    red={touched.expectedCloseDate && errors.expectedCloseDate && true}
                  />
                  {touched.expectedCloseDate && errors.expectedCloseDate && (
                  <div className="form-validation-errors">
                    {errors.expectedCloseDate}
                  </div>
                )}
                  </div>

                  <div className="col-sm-12 col-md-4 col-lg-3">
                    <BasicFormInputLabel htmlFor="formSalesStage">
                      SALES STAGE:
                    </BasicFormInputLabel>
                        <div>
                          <select
                            onChange={selectChange}
                            className="overview-select-item"
                            defaultValue={"Select an item"}
                          >
                            <option value={selectedOption}>Select an item</option>
                        <option value={selectedOption}>Prospecting</option>
                        <option value={selectedOption}>Qualifiction</option>
                        <option value={selectedOption}>Needs Analysis</option>
                            
                          </select>
                        </div>
                  </div>

                  <div className="col-sm-12 col-md-4 col-lg-3">
                    <BasicFormInputLabel htmlFor="formType">
                      TYPE:
                    </BasicFormInputLabel>
                        <div>
                          <select
                            onChange={selectChange}
                            className="overview-select-item"
                            defaultValue={"Select an item"}
                          >
                            <option value={selectedOption}>Select an item</option>
                        <option value={selectedOption}>Existing Business</option>
                        <option value={selectedOption}>New Business</option>
                        
                            
                          </select>
                        </div>
                  </div>

                  <div className="col-sm-12 col-md-4 col-lg-3">
                    <BasicFormInputLabel id="formProbability">
                      PROBABILITY(%):
                    </BasicFormInputLabel>
                    <BasicFormInput
                      type="text"
                      name="probability"
                      id="formProbability"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.probability}
                      red={touched.probability && errors.probability && true}
                    />
                  </div>

                  <div className="col-sm-12 col-md-4 col-lg-3">
                    <BasicFormInputLabel htmlFor="formLeadSource">
                      LEAD SOURCE:
                    </BasicFormInputLabel>
                        <div>
                          <select
                            onChange={selectChange}
                            className="overview-select-item"            
                    >                          
                            <option value={selectedOption}>Select an item</option>
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
                  </div>

                  <div className="col-sm-12 col-md-4 col-lg-3">
                    <BasicFormInputLabel id="formNextStep">
                      NEXT STEP:
                    </BasicFormInputLabel>
                    <BasicFormInput
                      type="text"
                      name="nextStep"
                      id="formNextStep"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.nextStep}
                      red={touched.nextStep && errors.nextStep && true}
                    />
                  </div>

                  <div className="col-sm-12 col-md-4 col-lg-3">
                    <BasicFormInputLabel htmlFor="formCampaign">
                      CAMPAIGN:
                    </BasicFormInputLabel>
                    <BasicFormInput
                    type="text"
                    name="campaign"
                    id="formCampaign"
                    onChange={handleChange}
                    onBlur={handleBlur}
                      value={values.campaign}
                      placeholder="Type to search"
                    red={touched.campaign && errors.campaign && true}
                  />
                  </div>

                  <div className="col-sm-12 col-md-4 col-lg-3">
                  <BasicFormInputLabel htmlFor="assignTo">
                    ASSIGNED TO:
                  </BasicFormInputLabel>
                  <BasicFormInput
                    type="text"
                    name="assignTo"
                    id="assignTo"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.assignTo}
                    red={touched.assignTo && errors.assignTo && true}
                    placeholder="type to search.."
                  />
                  </div>
              
                  <div className="col-sm-12 col-md-8 col-lg-6">
                    <BasicFormInputLabel htmlFor="formDesription">
                      DESCRIPTION:
                    </BasicFormInputLabel>
                    <textarea
                      className="over-view-form-textarea"
                      id="formDescription"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                      rows={2}
                      cols={54}
                    ></textarea>
                  </div>
                
              
            </div>
          </div>
        </form>
      </div>
      <div className="form-heading-container">
        <h5 className="form-tab-heading"> OTHER</h5>
      </div>
      <div className="basic-white-form">
        <form onSubmit={handleSubmit}>
          <div className='container-fluid'>
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6">
              <BasicFormInputLabel htmlFor="formDateModified">
                      DATE MODIFIED:
                    </BasicFormInputLabel> 
                  <BasicFormInput
                    type="date"
                    id="dateModified"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.dateModified}
                    red={touched.dateModified && errors.dateModified && true}
                  />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
              <BasicFormInputLabel htmlFor="formDateCreated">
                      DATE CREATED:
                    </BasicFormInputLabel> 
                  <BasicFormInput
                    type="date"
                    id="dateCreated"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.dateCreated}
                    red={touched.dateCreated && errors.dateCreated}
                />
                </div>
            </div>

          </div>
        </form>
      </div>
      <div className="container p-4">
        <div className="row">
          <div className="col-sm-12 text-sm-center text-md-right">
            <button className="btn btn-primary mr-3" disabled={
                isSubmitting
              }
              type="submit">Save</button>
            <button className="btn btn-primary">Cancel</button>
          </div>
        </div>
        
        </div>
        </form>
    </React.Fragment>
  );
};

const FirstForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: (props) => ({
    opportunityName: props.initialOpportunityName,
    accountName: props.initialAccountName,
    opportunityAmount: props.initialOpportunityAmount,
    expectedCloseDate: props.initialExpectedCloseDate,
    salesStage: props.initialSalesStage,
    type: props.initialType,
    probability:props.initialProbability,
    leadSource:props.initialLeadSource,
    nextStep:props.initialNextStep,
    campaign:props.initialCampaign,
    assignTo:props.initialAssignTo,
    description:props.initialDescription,
    dateModified:props.initialDateModified,
    dateCreated:props.initialDateCreated
  }),
  validationSchema: Yup.object().shape({
    opportunityName: Yup.string().trim()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed")
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("* Opportunity Name is Required"),
    accountName: Yup.string().trim()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed")
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("* Account Name is Required"),
    opportunityAmount: Yup.string().required("* Opportunity Amount is Required")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "phone number is required"
    ).min(1).max(10),
    expectedCloseDate: Yup.number().required("* Close Date is Required"),
    salesStage: Yup.string().required("* Required"),
    type: Yup.string().required("* Type is Required"),
    probability: Yup.string().required("* Required"),
    leadSource: Yup.string().required("* Required"),
    nextStep: Yup.string().required("* Required"),
    campaign: Yup.string().required("* Campaign to Someone"),
    assignTo: Yup.string().required("* Assign to some one"),
    description: Yup.string().required("* Description is required"),    
    dateCreated: Yup.number().required("* Date is Required"),
    dateModified: Yup.number().required("* Modified Date is Required"),
  }),
  handleSubmit({ opportunityName }: FormValues) {
    console.log("opportunityName", opportunityName);
   
  },
})(InnerForm);



const BasicForm = (props: any) => {
  return (
    <div>
      <FirstForm />
    </div>
  );
};
export default BasicForm;