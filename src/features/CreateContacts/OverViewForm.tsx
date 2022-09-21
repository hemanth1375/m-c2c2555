import React, { useState, useRef } from "react";
import "./OverViewForm.css";
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

// const [selectedOption, setSelectedOption] = useState<string>();
// const textareaRef = useRef<HTMLTextAreaElement | null>(null);
// const [value, setValue] = useState<string>();
// // This function is triggered when the select changes
// const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//   const TriggredValue = event.target.value;
//   setSelectedOption(TriggredValue);
// };

// const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
//   setValue(event.target.value);
// };

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
      <div className="heading-form-container">
        <h5 className="heading-form"> OVERVIEW FORM</h5>
      </div>
      <div className="contacts-white-form">
        <form onSubmit={handleSubmit} className="overview-form">
          <div className="over-view-form-flex-container">
            <div className="half-overview-form">
              <div className="overview-form-name-container">
                <strong className="overview-form-name">NAME :</strong>
              </div>
              <div className="first-last-container">
                <div className="dropdown-container">
                  <select
                    onChange={selectChange}
                    className="overview-select-item"
                    defaultValue={"Mr."}
                  >
                    <option value={selectedOption}>Mr.</option>
                    <option value={selectedOption}>Ms.</option>
                    <option value={selectedOption}>Mrs.</option>
                    <option value={selectedOption}>Miss.</option>
                    <option value={selectedOption}>Dr.</option>
                    <option value={selectedOption}>Pro.</option>
                  </select>
                </div>
                <div className="d-flex flex-column">
                  <div>
                    <BasicFormInputLabel htmlFor="formFirstName">
                      First Name
                    </BasicFormInputLabel>
                    <BasicFormInput
                      type="text"
                      name="firstName"
                      id="formFirstName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                      className="overview-input-form"
                      red={touched.firstName && errors.firstName && true}
                    />
                  </div>
                  {touched.firstName && errors.firstName && (
                    <div className="form-validation-errors">
                      {errors.firstName}
                    </div>
                  )}
                </div>

                <div className="d-flex flex-column">
                  <div>
                    <BasicFormInputLabel htmlFor="formLastName">
                      Last Name
                    </BasicFormInputLabel>
                    <BasicFormInput
                      type="text"
                      name="lastName"
                      id="formLastName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                      className="overview-input-form"
                      red={touched.lastName && errors.lastName && true}
                    />
                  </div>
                  {touched.lastName && errors.lastName && (
                    <div className="form-validation-errors">
                      {errors.lastName}
                    </div>
                  )}
                </div>
              </div>
            </div>
            
          </div>
          <div className="button-container">
          <button
            disabled={
              isSubmitting ||
              !!(errors.firstName && touched.firstName) ||
              !!(errors.lastName && touched.lastName)
            }
            type="submit"
            className="button-submit"
          >
            {" "}
            Submit
          </button>
          </div>
          <div className="dotted-horizontal-line-container">
            <hr className="dotted-horizontal-line" />
          </div>

          {/* second line form detailes */}
          <div className="form-flex-container-row-three">
            <div className="over-view-form-bottom-containers">
              <div className="over-view-form-input-box-width">
                <div>
                  <BasicFormInputLabel id="formOfficePhone">
                    OFFICE PHONE:
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
                {touched.officePhone && errors.officePhone && (
                  <div className="form-validation-errors">
                    {errors.officePhone}
                  </div>
                )}
                <div className="dotted-horizontal-line-container">
                  <hr className="dotted-horizontal-line-bottom" />
                </div>
              </div>
              <div className="over-view-form-input-box-width">
                <div>
                  <BasicFormInputLabel id="formMobile">
                    MOBILE:
                  </BasicFormInputLabel>
                  <BasicFormInput
                    type="text"
                    name="mobile"
                    id="formMobile"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.mobile}
                    red={touched.mobile && errors.mobile && true}
                  />
                  {touched.mobile && errors.mobile && (
                    <div className="form-validation-errors">
                      {errors.mobile}
                    </div>
                  )}
                </div>

                <div className="dotted-horizontal-line-container-bottom">
                  <hr className="dotted-horizontal-line-bottom" />
                </div>
              </div>

              <div className="over-view-form-input-box-width">
                <div>
                  <BasicFormInputLabel id="formJobTitle">
                    JOB TITLE:
                  </BasicFormInputLabel>
                  <BasicFormInput
                    type="text"
                    name="jobTitle"
                    id="formJobTitle"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.jobTitle}
                    red={touched.jobTitle && errors.jobTitle && true}
                  />
                </div>
                {touched.jobTitle && errors.jobTitle && (
                  <div className="form-validation-errors">
                    {errors.jobTitle}
                  </div>
                )}
                <div className="dotted-horizontal-line-container">
                  <hr className="dotted-horizontal-line-bottom" />
                </div>
              </div>
            </div>
          </div>

          {/* third line form details */}

          <div className="form-flex-container-row-three">
            <div className="over-view-form-bottom-containers">
              <div className="over-view-form-input-box-width">
                <div>
                  <BasicFormInputLabel htmlFor="formDepartment">
                    DEPARTMENT:
                  </BasicFormInputLabel>
                  <BasicFormInput
                    type="text"
                    name="department"
                    id="formDepartment"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.department}
                    red={touched.department && errors.department && true}
                  />
                </div>
                {touched.department && errors.department && (
                  <div className="form-validation-errors">
                    {errors.department}
                  </div>
                )}
                <div className="dotted-horizontal-line-container">
                  <hr className="dotted-horizontal-line-bottom" />
                </div>
              </div>
              <div className="over-view-form-input-box-width">
                <div>
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
                    red={touched.accountName && errors.accountName && true}
                  />
                  {touched.accountName && errors.accountName && (
                    <div className="form-validation-errors">
                      {errors.accountName}
                    </div>
                  )}
                </div>

                <div className="dotted-horizontal-line-container-bottom">
                  <hr className="dotted-horizontal-line-bottom" />
                </div>
              </div>

              <div className="over-view-form-input-box-width">
                <div>
                  <BasicFormInputLabel id="formFax">FAX:</BasicFormInputLabel>
                  <BasicFormInput
                    type="text"
                    name="fax"
                    id="formFax"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.fax}
                    red={touched.fax && errors.fax && true}
                  />
                </div>
                {touched.fax && errors.fax && (
                  <div className="form-validation-errors">{errors.fax}</div>
                )}
                <div className="dotted-horizontal-line-container">
                  <hr className="dotted-horizontal-line-bottom" />
                </div>
              </div>
            </div>
          </div>

          {/* third row form details */}

          <div className="form-flex-container-row-three">
            <div className="over-view-form-bottom-containers">
              <div className="over-view-form-input-box-width">
                <div>
                  <BasicFormInputLabel id="formEmailAddress">
                    EMAIL ADDRESS:
                  </BasicFormInputLabel>
                  <BasicFormInput
                    type="text"
                    name="emailAddress"
                    id="formEmailAddress"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    red={touched.email && errors.email && true}
                  />
                </div>
                {touched.email && errors.email && (
                  <div className="form-validation-errors">{errors.email}</div>
                )}
                <div className="dotted-horizontal-line-container">
                  <hr className="dotted-horizontal-line-bottom" />
                </div>
              </div>

              <div className="over-view-form-input-box-width">
                <div>
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
                {touched.assignTo && errors.assignTo && (
                  <div className="form-validation-errors">
                    {errors.assignTo}
                  </div>
                )}
                <div className="dotted-horizontal-line-container">
                  <hr className="dotted-horizontal-line-bottom" />
                </div>
              </div>
              <div className="over-view-form-input-box-width">
                <div>
                  <BasicFormInputLabel htmlFor="formDesription">
                    DESCRIPTION:
                  </BasicFormInputLabel>
                  <textarea
                    className="over-view-form-textarea"
                    id="formDescription"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                    rows={1}
                    cols={54}
                  ></textarea>
                  {touched.description && errors.description && (
                    <div className="form-validation-errors description-validation">
                      {errors.description}
                    </div>
                  )}
                </div>

                <div className="dotted-horizontal-line-container-bottom">
                  <hr className="dotted-horizontal-line-bottom" />
                </div>
              </div>
            </div>
          </div>

          {/* address form details */}

          <div>
            <div>
              <div>
                <h1 className="overview-label-form-bottom">PRIMARY ADDRESS:</h1>
                <div className="form-address-container-row">
                  <div className="over-view-form-input-box-width">
                    <div className="over-view-address-form">
                      <div className="over-view-address-label-form">
                        <BasicFormInputLabel htmlFor="primaryAddressStreet">
                          Primary Address Street
                        </BasicFormInputLabel>
                      </div>
                      <BasicFormInput
                        type="text"
                        name="primaryAddressStreet"
                        id="primaryAddressStreet"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.primaryAddressStreet}
                        red={
                          touched.primaryAddressStreet &&
                          errors.primaryAddressStreet &&
                          true
                        }
                      />
                    </div>
                    {touched.primaryAddressStreet &&
                      errors.primaryAddressStreet && (
                        <div className="form-validation-errors">
                          {errors.primaryAddressStreet}
                        </div>
                      )}
                  </div>
                  <div className="over-view-form-input-box-width">
                    <div className="over-view-address-form">
                      <div className="over-view-address-label-form">
                        <BasicFormInputLabel htmlFor="primaryAddressPostalCode">
                          Primary Address Postal Code
                        </BasicFormInputLabel>
                      </div>
                      <BasicFormInput
                        type="text"
                        name="primaryAddressPostalCode"
                        id="primaryAddressPostalCode"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.primaryAddressPostalCode}
                        red={
                          touched.primaryAddressPostalCode &&
                          errors.primaryAddressPostalCode &&
                          true
                        }
                      />
                    </div>
                    {touched.primaryAddressPostalCode &&
                      errors.primaryAddressPostalCode && (
                        <div className="form-validation-errors">
                          {errors.primaryAddressPostalCode}
                        </div>
                      )}
                  </div>
                  <div className="over-view-form-input-box-width">
                    <div className="over-view-address-form">
                      <div className="over-view-address-label-form">
                        <BasicFormInputLabel htmlFor="primaryAddressCity">
                          Primary Address City
                        </BasicFormInputLabel>
                      </div>
                      <BasicFormInput
                        type="text"
                        name="primaryAddressCity"
                        id="primaryAddressCity"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.primaryAddressCity}
                        red={
                          touched.primaryAddressCity &&
                          errors.primaryAddressCity &&
                          true
                        }
                      />
                    </div>
                    {touched.primaryAddressCity &&
                      errors.primaryAddressCity && (
                        <div className="form-validation-errors">
                          {errors.primaryAddressCity}
                        </div>
                      )}
                  </div>
                </div>

                <div className="over-view-form-address-bottom-2-detailes">
                  <div className="over-view-form-input-box-width">
                    <div className="over-view-address-form">
                      <div className="over-view-address-label-form">
                        <BasicFormInputLabel htmlFor="primaryAddressState">
                          Primary Address State
                        </BasicFormInputLabel>
                      </div>
                      <BasicFormInput
                        type="text"
                        name="primaryAddressState"
                        id="primaryAddressState"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.primaryAddressState}
                        red={
                          touched.primaryAddressState &&
                          errors.primaryAddressState &&
                          true
                        }
                      />
                    </div>
                    {touched.primaryAddressState &&
                      errors.primaryAddressState && (
                        <div className="form-validation-errors">
                          {errors.primaryAddressState}
                        </div>
                      )}
                  </div>
                  <div className="over-view-form-input-box-width">
                    <div className="over-view-address-form">
                      <div className="over-view-address-label-form address-form-margin">
                        <BasicFormInputLabel htmlFor="primaryAddressCountry">
                          Primary Address Country
                        </BasicFormInputLabel>
                      </div>
                      <BasicFormInput
                        type="text"
                        name="primaryAddressCountry"
                        id="primaryAddressCountry"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="address-form-margin"
                        value={values.primaryAddressCountry}
                        red={
                          touched.primaryAddressCountry &&
                          errors.primaryAddressCountry &&
                          true
                        }
                      />
                    </div>
                    {touched.primaryAddressCountry &&
                      errors.primaryAddressCountry && (
                        <div className="form-validation-errors error-margin">
                          {errors.primaryAddressCountry}
                        </div>
                      )}
                  </div>
                  <div className="dotted-horizontal-line-container">
                    <hr className="dotted-horizontal-line-bottom" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <h1 className="overview-label-form-bottom other-address-margin">
                  OTHER ADDRESS:
                </h1>
                <div className="form-address-container-row">
                  <div className="over-view-form-input-box-width">
                    <div className="over-view-address-form">
                      <div className="over-view-address-label-form">
                        <BasicFormInputLabel htmlFor="alternateAddressStreet">
                          Alternate Address Street
                        </BasicFormInputLabel>
                      </div>
                      <BasicFormInput
                        type="text"
                        name="alternateAddressStreet"
                        id="alternateAddressStreet"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.alternateAddressStreet}
                        red={
                          touched.alternateAddressStreet &&
                          errors.alternateAddressStreet &&
                          true
                        }
                      />
                    </div>
                    {touched.alternateAddressStreet &&
                      errors.alternateAddressStreet && (
                        <div className="form-validation-errors">
                          {errors.alternateAddressStreet}
                        </div>
                      )}
                  </div>
                  <div className="over-view-form-input-box-width">
                    <div className="over-view-address-form">
                      <div className="over-view-address-label-form">
                        <BasicFormInputLabel htmlFor="alternateAddressPostalCode">
                          Alternate Address Postal Code
                        </BasicFormInputLabel>
                      </div>
                      <BasicFormInput
                        type="text"
                        name="alternateAddressPostalCode"
                        id="alternateAddressPostalCode"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.alternateAddressPostalCode}
                        red={
                          touched.alternateAddressPostalCode &&
                          errors.alternateAddressPostalCode &&
                          true
                        }
                      />
                    </div>
                    {touched.alternateAddressPostalCode &&
                      errors.alternateAddressPostalCode && (
                        <div className="form-validation-errors">
                          {errors.alternateAddressPostalCode}
                        </div>
                      )}
                  </div>
                  <div className="over-view-form-input-box-width">
                    <div className="over-view-address-form">
                      <div className="over-view-address-label-form">
                        <BasicFormInputLabel htmlFor="alternateAddressCity">
                          Alternate Address City
                        </BasicFormInputLabel>
                      </div>
                      <BasicFormInput
                        type="text"
                        name="alternateAddressCity"
                        id="alternateAddressCity"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.alternateAddressCity}
                        red={
                          touched.alternateAddressCity &&
                          errors.alternateAddressCity &&
                          true
                        }
                      />
                    </div>
                    {touched.alternateAddressCity &&
                      errors.alternateAddressCity && (
                        <div className="form-validation-errors">
                          {errors.alternateAddressCity}
                        </div>
                      )}
                  </div>
                </div>
                <div className="over-view-form-address-bottom-2-detailes">
                  <div className="over-view-form-input-box-width">
                    <div className="over-view-address-form">
                      <div className="over-view-address-label-form">
                        <BasicFormInputLabel htmlFor="alternateAddressState">
                          Alternate Address State
                        </BasicFormInputLabel>
                      </div>
                      <BasicFormInput
                        type="text"
                        name="alternateAddressState"
                        id="alternateAddressState"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.alternateAddressState}
                        red={
                          touched.alternateAddressState &&
                          errors.alternateAddressState &&
                          true
                        }
                      />
                    </div>
                    {touched.alternateAddressState &&
                      errors.alternateAddressState && (
                        <div className="form-validation-errors">
                          {errors.alternateAddressState}
                        </div>
                      )}
                  </div>
                  <div className="over-view-form-input-box-width">
                    <div className="over-view-address-form">
                      <div className="over-view-address-label-form address-form-margin">
                        <BasicFormInputLabel htmlFor="alternateAddressCountry">
                          Alternate Address Country
                        </BasicFormInputLabel>
                      </div>
                      <BasicFormInput
                        type="text"
                        name="alternateAddressCountry"
                        id="alternateAddressCountry"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="address-form-margin"
                        value={values.alternateAddressCountry}
                        red={
                          touched.alternateAddressCountry &&
                          errors.alternateAddressCountry &&
                          true
                        }
                      />
                    </div>
                    {touched.alternateAddressCountry &&
                      errors.alternateAddressCountry && (
                        <div className="form-validation-errors error-margin">
                          {errors.alternateAddressCountry}
                        </div>
                      )}
                  </div>
                </div>
              </div>
              <div className="dotted-horizontal-line-container-bottom">
                <hr className="dotted-horizontal-line-bottom" />
              </div>
            </div>
          </div>
          </form>
          </div>
          <div className="heading-form-container">
            <h5 className="heading-form">MORE INFORMATION</h5>
          </div>
          <div className="contacts-white-form">
        <form onSubmit={handleSubmit} className="overview-form">
          <div className="contacts-white-form-moreinfo">
            <form onSubmit={handleSubmit}>
              <div className="more-info-form-flex-container-row-three">
                <div className="more-info-drop-down">
                  <BasicFormInputLabel>LEAD SOURCE</BasicFormInputLabel>
                  <div className="dropdown-container">
                    <select
                      onChange={selectChange}
                      className="overview-select-item"
                      placeholder="Select an item"
                    >
                      <option value={selectedOption}>Cold Call</option>
                      <option value={selectedOption}>Existing Customer</option>
                      <option value={selectedOption}>Self Generated</option>
                      <option value={selectedOption}>Employee</option>
                      <option value={selectedOption}>Partner</option>
                      <option value={selectedOption}>
                        Public Relationship
                      </option>
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
                <div className="over-view-form-input-box-width">
                  <div>
                    <BasicFormInputLabel htmlFor="leadSource">
                      REPORTS TO:
                    </BasicFormInputLabel>
                    <BasicFormInput
                      type="text"
                      id="reportTo"
                      placeholder="Type to search..."
                      className="more-info-input-box"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.reportTo}
                      red={touched.reportTo && errors.reportTo && true}
                    />
                  </div>
                  {touched.reportTo && errors.reportTo && (
                    <div className="form-validation-errors">
                      {errors.reportTo}
                    </div>
                  )}
                </div>
                <div className="over-view-form-input-box-width">
                  <BasicFormInputLabel htmlFor="leadSource">
                    CAMPAIGN:
                  </BasicFormInputLabel>
                  <BasicFormInput
                    type="text"
                    id="campaign"
                    placeholder="Type to search..."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.campaign}
                    red={touched.campaign && errors.campaign && true}
                  />
                  {touched.campaign && errors.campaign && (
                    <div className="form-validation-errors">
                      {errors.campaign}
                    </div>
                  )}
                </div>
              </div>
                  )}
                </div>
              </div>
              <div className="dotted-horizontal-line-container-bottom">
                <hr className="dotted-horizontal-line-bottom" />
              </div>

              <div className="other-infromation-form-container">
                <div className="over-view-form-input-box-width">
                  <BasicFormInputLabel htmlFor="dateCreated">
                    DATE CREATED:
                  </BasicFormInputLabel>
                  <BasicFormInput
                    type="date"
                    className="more-info-date-input"
                    id="dateCreated"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.dateCreated}
                    red={touched.dateCreated && errors.dateCreated && true}
                  />
                  {touched.dateCreated && errors.dateCreated && (
                    <div className="form-validation-errors">
                      {errors.dateCreated}
                    </div>
                  )}
                </div>
                <div className="over-view-form-input-box-width">
                  <BasicFormInputLabel
                    htmlFor="dateModified"
                    className="address-form-margin"
                  >
                    DATE MODIFIED:
                  </BasicFormInputLabel>
                  <BasicFormInput
                    type="date"
                    placeholder="date"
                    className="more-info-date-input address-form-margin"
                    id="dateModified"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.dateModified}
                    red={touched.dateModified && errors.dateModified && true}
                  />
                  {touched.dateModified && errors.dateModified && (
                    <div className="form-validation-errors error-margin">
                      {errors.dateModified}
                    </div>
                  )}
                </div>
              </div>
              <div className="dotted-horizontal-line-container-bottom">
                <hr className="dotted-horizontal-line-bottom" />
              </div>
            </form>
          </div>
        </form>
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

// const resolver: Resolver<FormValues> = async (values) => {
//   return {
//     values: !values.lastName ? {} : values,
//     errors: !values.lastName
//       ? {
//           lastName: {
//             type: "required",
//             message: "This is required.",
//           },
//         }
//       : {},
//   };
// };

const OverViewForm = (props: any) => {
  return (
    <div>
      <FirstForm />
    </div>
  );
};
//   const [phoneNumber, setPhoneNumber] = useState<string>();
//   const [selectedOption, setSelectedOption] = useState<string>();
//   const textareaRef = useRef<HTMLTextAreaElement | null>(null);
//   const [value, setValue] = useState<string>();
//   // This function is triggered when the select changes
//   const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     const TriggredValue = event.target.value;
//     setSelectedOption(TriggredValue);
//   };
//   // const {
//   //   register,
//   //   formState: { errors },
//   // } = useForm<FormValues>({
//   //   resolver: resolver,
//   // });

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//   };
//   const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setValue(event.target.value);
//   };

//   const phoneNumberValidation = (event: any) => {
//     setPhoneNumber(event.target.value);
//   };

//   return (
//     //overview form
//     <div className="App">
//       <form onSubmit={handleSubmit} className="overview-form">
//         <div className="over-view-form-flex-container">
//           <div className="half-overview-form">
//             <div className="overview-form-name-container">
//               <strong className="overview-form-name">NAME :</strong>
//             </div>
//             <div className="first-last-container">
//               <div className="dropdown-container">
//                 <select
//                   onChange={selectChange}
//                   className="overview-select-item"
//                 >
//                   <option selected disabled>
//                     Select an item
//                   </option>
//                   <option value={selectedOption}>Mr.</option>
//                   <option value={selectedOption}>Ms.</option>
//                   <option value={selectedOption}>Mrs.</option>
//                   <option value={selectedOption}>Miss.</option>
//                   <option value={selectedOption}>Dr.</option>
//                   <option value={selectedOption}>Pro.</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="overview-label-form">First Name</label>
//                 <input
//                   // {...register("firstName")}
//                   className="overview-input-form first-name"
//                 />
//               </div>

//               <div>
//                 <label className="overview-label-form">Last Name</label>
//                 <input
//                   // {...register("lastName")}
//                   className="overview-input-form"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="dotted-horizontal-line-container">
//           <hr className="dotted-horizontal-line" />
//         </div>

//         {/* second line form detailes */}

//         <div className="over-view-form-bottom-containers">
//           <div className="left-container">
//             <div>
//               <label className="overview-label-form-bottom">
//                 OFFICE PHONE:
//               </label>
//               <input
//                 // {...register("officePhone")}
//                 className="overview-input-form-bottom"
//               />
//             </div>
//             <div className="dotted-horizontal-line-container">
//               <hr className="dotted-horizontal-line-bottom" />
//             </div>
//           </div>
//           <div className="right-container">
//             <div>
//               <label className="overview-label-form-bottom">MOBILE:</label>
//               <input
//                 // {...register("mobile")}
//                 className="overview-input-form-bottom"
//                 onChange={phoneNumberValidation}
//               />
//               {/* {

//               if(phoneNumber.length<=9){return <h1>enter 10 numbers</h1>}
// } */}
//             </div>

//             <div className="dotted-horizontal-line-container-bottom">
//               <hr className="dotted-horizontal-line-bottom" />
//             </div>
//           </div>
//         </div>
//         <div className="over-view-form-bottom-containers">
//           <div className="left-container">
//             <div>
//               <label className="overview-label-form-bottom">JOB TITLE:</label>
//               <input
//                 // {...register("officePhone")}
//                 className="overview-input-form-bottom"
//               />
//             </div>
//             <div className="dotted-horizontal-line-container">
//               <hr className="dotted-horizontal-line-bottom" />
//             </div>
//           </div>
//           <div className="right-container">
//             <div>
//               <label className="overview-label-form-bottom">DEPARTMENT:</label>
//               <input
//                 // {...register("mobile")}
//                 className="overview-input-form-bottom"
//               />
//             </div>

//             <div className="dotted-horizontal-line-container-bottom">
//               <hr className="dotted-horizontal-line-bottom" />
//             </div>
//           </div>
//         </div>
//         <div className="over-view-form-bottom-containers">
//           <div className="left-container">
//             <div>
//               <label className="overview-label-form-bottom">
//                 ACCOUNT NAME:
//               </label>
//               <input
//                 // {...register("officePhone")}
//                 className="overview-input-form-bottom account-name"
//               />
//             </div>
//             <div className="dotted-horizontal-line-container">
//               <hr className="dotted-horizontal-line-bottom" />
//             </div>
//           </div>

//           <div className="right-container">
//             <div>
//               <label className="overview-label-form-bottom">FAX:</label>
//               <input
//                 // {...register("mobile")}
//                 className="overview-input-form-bottom"
//               />
//             </div>

//             <div className="dotted-horizontal-line-container-bottom">
//               <hr className="dotted-horizontal-line-bottom" />
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="right-container">
//             <div>
//               <h3 className="overview-label-form-bottom">EMAIL ADDRESS:</h3>
//               <div className="overview-form-email">
//                 <label>Email Address</label>
//               </div>
//               <input
//                 // {...register("mobile")}
//                 className="overview-input-form-bottom"
//               />
//             </div>

//             <div className="dotted-horizontal-line-container-bottom">
//               <hr className="dotted-horizontal-line-bottom" />
//             </div>
//           </div>
//         </div>
//         <div className="over-view-form-bottom-containers">
//           <div className="left-container">
//             <div>
//               <h1 className="overview-label-form-bottom">PRIMARY ADDRESS:</h1>
//               <div className="over-view-address-form">
//                 <div className="over-view-address-label-form">
//                   <label>Primary Address Street</label>
//                 </div>
//                 <input
//                   // {...register("officePhone")}
//                   className="overview-input-form-bottom"
//                 />
//               </div>
//               <div className="over-view-address-form">
//                 <div className="over-view-address-label-form">
//                   <label>Primary Address Postal Code</label>
//                 </div>
//                 <input
//                   // {...register("officePhone")}
//                   className="overview-input-form-bottom"
//                 />
//               </div>
//               <div className="over-view-address-form">
//                 <div className="over-view-address-label-form">
//                   <label>Primary Address City</label>
//                 </div>
//                 <input
//                   // {...register("officePhone")}
//                   className="overview-input-form-bottom"
//                 />
//               </div>
//               <div className="over-view-address-form">
//                 <div className="over-view-address-label-form">
//                   <label>Primary Address State</label>
//                 </div>
//                 <input
//                   // {...register("officePhone")}
//                   className="overview-input-form-bottom"
//                 />
//               </div>
//               <div className="over-view-address-form">
//                 <div className="over-view-address-label-form">
//                   <label>Primary Address Country</label>
//                 </div>
//                 <input
//                   // {...register("officePhone")}
//                   className="overview-input-form-bottom"
//                 />
//               </div>
//             </div>
//             <div className="dotted-horizontal-line-container">
//               <hr className="dotted-horizontal-line-bottom" />
//             </div>
//           </div>

//           <div className="right-container">
//             <div>
//               <h1 className="overview-label-form-bottom">OTHER ADDRESS:</h1>
//               <div className="over-view-address-form">
//                 <div className="over-view-address-label-form">
//                   <label>Alternate Address Street</label>
//                 </div>
//                 <input
//                   // {...register("officePhone")}
//                   className="overview-input-form-bottom"
//                 />
//               </div>
//               <div className="over-view-address-form">
//                 <div className="over-view-address-label-form">
//                   <label>Alternate Address Postal Code</label>
//                 </div>
//                 <input
//                   // {...register("officePhone")}
//                   className="overview-input-form-bottom"
//                 />
//               </div>
//               <div className="over-view-address-form">
//                 <div className="over-view-address-label-form">
//                   <label>Alternate Address City</label>
//                 </div>
//                 <input
//                   // {...register("officePhone")}
//                   className="overview-input-form-bottom"
//                 />
//               </div>
//               <div className="over-view-address-form">
//                 <div className="over-view-address-label-form">
//                   <label>Alternate Address State</label>
//                 </div>
//                 <input
//                   // {...register("officePhone")}
//                   className="overview-input-form-bottom"
//                 />
//               </div>
//               <div className="over-view-address-form">
//                 <div className="over-view-address-label-form">
//                   <label>Alternate Address Country</label>
//                 </div>
//                 <input
//                   // {...register("officePhone")}
//                   className="overview-input-form-bottom"
//                 />
//               </div>
//             </div>

//             <div className="dotted-horizontal-line-container-bottom">
//               <hr className="dotted-horizontal-line-bottom" />
//             </div>
//           </div>
//         </div>
//         <div className="over-view-form-bottom-containers">
//           <div className="left-container">
//             <div>
//               <label className="overview-label-form-bottom">DESCRIPTION:</label>
//               <textarea
//                 ref={textareaRef}
//                 onChange={textAreaChange}
//                 className="over-view-form-textarea"
//               >
//                 {value}
//               </textarea>
//             </div>
//             <div className="dotted-horizontal-line-container">
//               <hr className="dotted-horizontal-line-bottom" />
//             </div>
//           </div>
//           <div className="right-container">
//             <div>
//               <label className="overview-label-form-bottom">ASSIGNED TO:</label>
//               <input
//                 // {...register("mobile")}
//                 className="overview-input-form-bottom assigned-to-form"
//                 placeholder="type to search.."
//               />
//             </div>

//             <div className="dotted-horizontal-line-container-bottom">
//               <hr className="dotted-horizontal-line-bottom" />
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };
export default OverViewForm;
