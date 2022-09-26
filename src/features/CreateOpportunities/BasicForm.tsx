import React, { useState, useRef } from "react";
import "./BasicForm.css";
import { BasicFormInput, BasicFormInputLabel } from "components/forms";
import { withFormik, FormikProps } from "formik";
import * as Yup from "yup";

interface FormValues {
  firstName?: string;
  lastName?: string;
  officePhone?: number;
  mobile?: number;
  jobTitle?: string;
  department?: string;
  accountName?: string;
  fax?: string | number;
  email?: string;
  primaryAddressStreet?: string | number;
  primaryAddressPostalCode?: string | number;
  primaryAddressCity?: string | number;
  primaryAddressState?: string | number;
  primaryAddressCountry?: string | number;
  alternateAddressStreet?: string | number;
  alternateAddressPostalCode?: string | number;
  alternateAddressCity?: string | number;
  alternateAddressState?: string | number;
  alternateAddressCountry?: string | number;
  assignTo?: string;
  description?: string;
  reportTo?: string;
  campaign?: string;
  dateModified?: number;
  dateCreated?: number;
}

interface OtherProps {
  ref?: any;
  setSubmit: boolean;
}

interface MyFormProps {
  initialFirstName?: string;
  initialLastName?: string;
  initialOfficePhone?: number;
  initialMobile?: number;
  initialDepartment?: string;
  initialAccountName?: string;
  initialJobTitle?: string;
  initialFax?: string;
  initialEmail?: string;
  initialDescription?: string;
  initialprimaryAddressStreet?: string | number;
  initialPrimaryAddressPostalCode?: string | number;
  initialPrimaryAddressCity?: string | number;
  initialPrimaryAddressState?: string | number;
  initialPrimaryAddressCountry?: string | number;
  initialAlternateAddressStreet?: string | number;
  initialAlternateAddressPostalCode?: string | number;
  initialAlternateAddressCity?: string | number;
  initialAlternateAddressState?: string | number;
  initialAlternateAddressCountry?: string | number;
  initialAssignTo?: string;
  initialReportTo?: string;
  initialCampaign?: string;
  initialDateModified?: number;
  initialDateCreated?: number;
  login?: any;
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

  let submitStatus = true;
  const disablingButton = () => {
    isSubmitting ||
    !!(errors.firstName && touched.firstName) ||
    !!(errors.lastName && touched.lastName)
      ? (submitStatus = false)
      : (submitStatus = true);
  };
  disablingButton();
  console.log(submitStatus);

  return (
    <React.Fragment>
      <div className="form-heading-container">
        <h5 className="form-tab-heading">BASIC</h5>
      </div>
      
      <div className="basic-white-form mb-4">
        
        <form onSubmit={handleSubmit}>
          <div className='container-fluid'>
            <div className="row">
                
                  <div className="col-sm-12 col-md-6 col-lg-3">
                    <BasicFormInputLabel id="formOfficePhone">
                      OPPORTUNITY NAME:
                    </BasicFormInputLabel>
                    <BasicFormInput
                      type="text"
                      name="officePhone"
                      id="formOfficePhone"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.officePhone}
                      red={touched.officePhone && errors.officePhone && true}
                    />
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
                  </div>
                  <div className="col-sm-12 col-md-8 col-lg-6">
                  <BasicFormInputLabel htmlFor="formAccountName">
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
                              name="officePhone"
                              id="formOfficePhone"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="Enter the amount"
                              value={values.officePhone}
                              red={touched.officePhone && errors.officePhone && true}
                            />
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-sm-12 col-md-4 col-lg-3">
                  <BasicFormInputLabel htmlFor="formAccountName">
                      EXPECTED CLOSE DATE:
                    </BasicFormInputLabel> 
                  <BasicFormInput
                    type="date"
                    id="dateCreated"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.dateCreated}
                    red={touched.dateCreated && errors.dateCreated && true}
                  />
                  </div>

                  <div className="col-sm-12 col-md-4 col-lg-3">
                    <BasicFormInputLabel htmlFor="formAccountName">
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
                    <BasicFormInputLabel htmlFor="formAccountName">
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
                    <BasicFormInputLabel id="formOfficePhone">
                      PROBABILITY(%):
                    </BasicFormInputLabel>
                    <BasicFormInput
                      type="text"
                      name="officePhone"
                      id="formOfficePhone"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.officePhone}
                      red={touched.officePhone && errors.officePhone && true}
                    />
                  </div>

                  <div className="col-sm-12 col-md-4 col-lg-3">
                    <BasicFormInputLabel htmlFor="formAccountName">
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
                    <BasicFormInputLabel id="formOfficePhone">
                      NEXT STEP:
                    </BasicFormInputLabel>
                    <BasicFormInput
                      type="text"
                      name="officePhone"
                      id="formOfficePhone"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.officePhone}
                      red={touched.officePhone && errors.officePhone && true}
                    />
                  </div>

                  <div className="col-sm-12 col-md-4 col-lg-3">
                    <BasicFormInputLabel htmlFor="formAccountName">
                      CAMPAIGN:
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
              <BasicFormInputLabel htmlFor="formAccountName">
                      DATE MODIFIED:
                    </BasicFormInputLabel> 
                  <BasicFormInput
                    type="date"
                    id="dateCreated"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.dateCreated}
                    red={touched.dateCreated && errors.dateCreated && true}
                  />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
              <BasicFormInputLabel htmlFor="formAccountName">
                      DATE CREATED:
                    </BasicFormInputLabel> 
                  <BasicFormInput
                    type="date"
                    id="dateCreated"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.dateCreated}
                    red={touched.dateCreated && errors.dateCreated && true}
                />
                </div>
            </div>

          </div>
        </form>
      </div>
      <div className="container p-4">
        <div className="row">
          <div className="col-sm-12 text-sm-center text-md-right">
            <button className="btn btn-primary mr-3">Save</button>
            <button className="btn btn-primary">Cancel</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const FirstForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: (props) => ({
    firstName: props.initialFirstName,
    lastName: props.initialLastName,
    officePhone: props.initialOfficePhone,
    mobile: props.initialMobile,
    jobTitle: props.initialJobTitle,
    department: props.initialDepartment,
    accountName: props.initialAccountName,
    fax: props.initialFax,
    email: props.initialEmail,
    assignTo: props.initialAssignTo,
    description: props.initialDescription,
    primaryAddressStreet: props.initialprimaryAddressStreet,
    primaryAddressPostalCode: props.initialPrimaryAddressPostalCode,
    primaryAddressCity: props.initialPrimaryAddressCity,
    primaryAddressState: props.initialPrimaryAddressState,
    primaryAddressCountry: props.initialPrimaryAddressCountry,
    alternateAddressCity: props.initialAlternateAddressCity,
    alternateAddressCountry: props.initialAlternateAddressCountry,
    alternateAddressPostalCode: props.initialAlternateAddressPostalCode,
    alternateAddressState: props.initialAlternateAddressState,
    alternateAddressStreet: props.initialAlternateAddressStreet,
    reportTo: props.initialReportTo,
    campaign: props.initialCampaign,
    dateCreated: props.initialDateCreated,
    dateModified: props.initialDateModified,
  }),
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required("* First Name is Required"),
    lastName: Yup.string().required("* Last Name is Required"),
    officePhone: Yup.number().required("* Phone Number is Required"),
    mobile: Yup.number().required("* Mobile Number is Required"),
    jobTitle: Yup.string().required("* Job Title is Required"),
    department: Yup.string().required("* Department is Required"),
    accountName: Yup.string().required("* Account Name is Required"),
    fax: Yup.string().required("* Fax is Required"),
    email: Yup.string().required("* Email is Required"),
    assignTo: Yup.string().required("* Assign to some one"),
    description: Yup.string().required("* Description is required"),
    primaryAddressStreet: Yup.string().required("* Required"),
    primaryAddressPostalCode: Yup.string().required("* Required"),
    primaryAddressCity: Yup.string().required("* Required"),
    primaryAddressState: Yup.string().required("* Required"),
    primaryAddressCountry: Yup.string().required("* Required"),
    alternateAddressStreet: Yup.string().required("*Required"),
    alternateAddressPostalCode: Yup.string().required("*Required"),
    alternateAddressCity: Yup.string().required("*Required"),
    alternateAddressState: Yup.string().required("*Required"),
    alternateAddressCountry: Yup.string().required("*Required"),
    reportTo: Yup.string().required("* Report to Someone"),
    campaign: Yup.string().required("* Campaign to Someone"),
    dateCreated: Yup.number().required("* Date is Required"),
    dateModified: Yup.number().required("* Modified Date is Required"),
  }),
  handleSubmit({ firstName, lastName, officePhone }: FormValues) {
    console.log("firstName", firstName);
    console.log("lastName", lastName);
    console.log("officePhone", officePhone);
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