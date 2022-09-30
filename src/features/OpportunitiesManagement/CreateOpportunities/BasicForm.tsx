import React, { useState, useRef } from "react";
import "./BasicForm.css";
import { BasicFormInput, BasicFormInputLabel } from "components/forms";
import { withFormik, FormikProps } from "formik";
import * as Yup from "yup";
import { translate } from 'languages';

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
  assignedTo?: string;
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
  initialAssignedTo?: string;
  initialDescription?: string;
  initialDateModified?: number;
  initialDateCreated?: number;
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const [selectedOption, setSelectedOption] = useState<string>();
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  console.log(textareaRef)
  const [value, setValue] = useState<string>();
  console.log(value)
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const TriggredValue = event.target.value;
    setSelectedOption(TriggredValue);
  };

  const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };
  console.log(textAreaChange)

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
  console.log({errors})

  return (
    <React.Fragment>
      <div className="basic-white-form mb-4">
        
      <form onSubmit={handleSubmit} id="my-opportunity-form">
          <div className='container-fluid'>
            <div className="row">
                
                  <div className="col-sm-12 col-md-6 col-lg-3">
                    <BasicFormInputLabel id="formOpportunityName">
                    {translate("opportunityName")}:
                    </BasicFormInputLabel>
                    <BasicFormInput
                      type="text"
                      name="opportunityName"
                      id="formOpportunityName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.opportunityName}
                      red={touched.opportunityName && errors.opportunityName}
                  />
                  {touched.opportunityName && errors.opportunityName && (
                  <div className="form-validation-errors">
                    {errors.opportunityName}
                  </div>
                )}
                </div>
                
                  <div className="col-sm-12 col-md-6 col-lg-3">
                  <BasicFormInputLabel htmlFor="formAccountName">
                  {translate("accountName")}:
                  </BasicFormInputLabel>
                  <BasicFormInput
                    type="text"
                    name="accountName"
                    id="formAccountName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                      value={values.accountName}
                      placeholder="Type to search"
                    red={touched.accountName && errors.accountName}
                  />
                  {touched.accountName && errors.accountName && (
                  <div className="form-validation-errors">
                    {errors.accountName}
                  </div>
                )}
                  </div>
                  <div className="col-sm-12 col-md-8 col-lg-6">
                  <BasicFormInputLabel htmlFor="formOpportunityAmount">
                  {translate("opportunityAmount")}:
                    </BasicFormInputLabel>
                  <div className="row">
                      <div className="col-sm-6">
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
                  <div className="col-sm-6">
                            
                            <BasicFormInput
                              type="text"
                              name="opportunityAmount"
                              id="formOpportunityAmount"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="Enter the amount"
                              value={values.opportunityAmount}
                              red={touched.opportunityAmount && errors.opportunityAmount}
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
                  {translate("expectedCloseDate")}:
                    </BasicFormInputLabel> 
                  <BasicFormInput
                    type="date"
                    id="expectedCloseDate"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.expectedCloseDate}
                    red={touched.expectedCloseDate && errors.expectedCloseDate}
                  />
                  {touched.expectedCloseDate && errors.expectedCloseDate && (
                  <div className="form-validation-errors">
                    {errors.expectedCloseDate}
                  </div>
                )}
                  </div>

                  <div className="col-sm-12 col-md-4 col-lg-3">
                    <BasicFormInputLabel htmlFor="formSalesStage">
                    {translate("salesStage")}:
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
                    {translate("type")}:
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
                    {translate("probability(%)")}:
                    </BasicFormInputLabel>
                    <BasicFormInput
                      type="text"
                      name="probability"
                      id="formProbability"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.probability}
                      red={touched.probability && errors.probability}
                  />
                  {touched.probability && errors.probability && (
                  <div className="form-validation-errors">
                    {errors.probability}
                  </div>
                )}
                  </div>

                  <div className="col-sm-12 col-md-4 col-lg-3">
                    <BasicFormInputLabel htmlFor="formLeadSource">
                    {translate("leadSource")}:
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
                    {translate("nextStep")}:
                    </BasicFormInputLabel>
                    <BasicFormInput
                      type="text"
                      name="nextStep"
                      id="formNextStep"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.nextStep}
                      red={touched.nextStep && errors.nextStep}
                  />
                  {touched.nextStep && errors.nextStep && (
                  <div className="form-validation-errors">
                    {errors.nextStep}
                  </div>
                )}
                  </div>

                  <div className="col-sm-12 col-md-4 col-lg-3">
                    <BasicFormInputLabel htmlFor="formCampaign">
                    {translate("campaign")}:
                    </BasicFormInputLabel>
                    <BasicFormInput
                    type="text"
                    name="campaign"
                    id="formCampaign"
                    onChange={handleChange}
                    onBlur={handleBlur}
                      value={values.campaign}
                      placeholder="Type to search"
                    red={touched.campaign && errors.campaign}
                  />
                  {touched.campaign && errors.campaign && (
                  <div className="form-validation-errors">
                    {errors.campaign}
                  </div>
                )}
                  </div>

                  <div className="col-sm-12 col-md-4 col-lg-3">
                  <BasicFormInputLabel htmlFor="assignedTo">
                  {translate("assignedTo")}:
                  </BasicFormInputLabel>
                  <BasicFormInput
                    type="text"
                    name="assignedTo"
                    id="assignedTo"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.assignedTo}
                    red={touched.assignedTo && errors.assignedTo}
                    placeholder="type to search.."
                  />
                  {touched.assignedTo && errors.assignedTo && (
                  <div className="form-validation-errors">
                    {errors.assignedTo}
                  </div>
                )}
                  </div>
              
                  <div className="col-sm-12 col-md-8 col-lg-6">
                    <BasicFormInputLabel htmlFor="formDesription">
                    {translate("description")}:
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
    assignedTo:props.initialAssignedTo,
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
    opportunityAmount: Yup.number().typeError('you must specify a number').min(0, 'Min value 0.').required("Amount is required"),
    
    expectedCloseDate: Yup.number().required("* Close Date is Required"),
    salesStage: Yup.string().required( "* Required"),
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