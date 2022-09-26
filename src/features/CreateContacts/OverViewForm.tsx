import React, { useState, useRef } from "react";
import "./OverViewForm.css";
import { BasicFormInput, BasicFormInputLabel } from "components/forms";
import { withFormik, FormikProps } from "formik";
import { translate } from "languages";
import * as Yup from "yup";

interface FormValues {
  firstName?: string;
  lastName?: string;
  officePhone?: number;
  mobile?: number;
  jobTitle?: string;
  department?: string;
  accountName?: string;
  fax?: string;
  email?: string;
  primaryAddressStreet?: string;
  primaryAddressPostalCode?: string;
  primaryAddressCity?: string;
  primaryAddressState?: string;
  primaryAddressCountry?: string;
  alternateAddressStreet?: string;
  alternateAddressPostalCode?: string;
  alternateAddressCity?: string;
  alternateAddressState?: string;
  alternateAddressCountry?: string;
  assignTo?: string;
  description?: string;
  reportTo?: string;
  campaign?: string;
  dateModified?: number;
  dateCreated?: number;
}

interface OtherProps {
  title?: string;
  ref?: any;
}

interface MyContactFormProps {
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
  initialprimaryAddressStreet?: string;
  initialPrimaryAddressPostalCode?: string;
  initialPrimaryAddressCity?: string;
  initialPrimaryAddressState?: string;
  initialPrimaryAddressCountry?: string;
  initialAlternateAddressStreet?: string;
  initialAlternateAddressPostalCode?: string;
  initialAlternateAddressCity?: string;
  initialAlternateAddressState?: string;
  initialAlternateAddressCountry?: string;
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
  console.log(textareaRef);
  const [value, setValue] = useState<string>();
  console.log(value);
  // This function is triggered when the select changes
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const TriggredValue = event.target.value;
    setSelectedOption(TriggredValue);
  };

  const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
    console.log(textAreaChange);
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = props;

  return (
    <React.Fragment>
      <div className="form-heading-container">
        <h5 className="form-tab-heading">{translate("overView")}</h5>
      </div>
      <form onSubmit={handleSubmit}>
      <div className="basic-white-form mb-4">
        <form>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 col-md-4 col-lg-4">
                <BasicFormInputLabel
                  htmlFor="formAccountName"
                  className="address-heading"
                >
                  {translate("name")}:
                </BasicFormInputLabel>
                <div>
                  <select
                    onChange={selectChange}
                    className="overview-select-item"
                    defaultValue="Select an item"
                  >
                    <option value={selectedOption}>{translate("mr")}.</option>
                    <option value={selectedOption}>{translate("mrs")}.</option>
                    <option value={selectedOption}>{translate("miss")}.</option>
                    <option value={selectedOption}>{translate("pro")}. </option>
                  </select>
                </div>
              </div>

              <div className="col-sm-12 col-md-4 col-lg-4">
                <BasicFormInputLabel htmlFor="firstName">
                {translate("firstName")}:
                </BasicFormInputLabel>
                <BasicFormInput
                  type="text"
                  name="firstName"
                  id="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  red={touched.firstName && errors.firstName}
                />
                {touched.firstName &&  errors.firstName ? (
                  <div className="form-validation-errors">
                    {errors.firstName}
                  </div>
                ): null}
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4">
                <BasicFormInputLabel htmlFor="lastName">
                {translate("lastName")}:
                </BasicFormInputLabel>
                <BasicFormInput
                  type="text"
                  name="lastName"
                  id="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  red={touched.lastName && errors.lastName}
                />
                {touched.lastName && errors.lastName ? (
                  <div className="form-validation-errors">
                    {errors.lastName}
                  </div>
                ): null}
              </div>
              <div className="col-sm-12 col-md-4 col-lg-3">
                <BasicFormInputLabel htmlFor="officePhone">
                {translate("officePhone")}:
                </BasicFormInputLabel>
                <BasicFormInput
                  type="text"
                  name="officePhone"
                  id="officePhone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.officePhone}
                  red={touched.officePhone && errors.officePhone}
                />
                {touched.officePhone && errors.officePhone ? (
                  <div className="form-validation-errors">
                    {errors.officePhone}
                  </div>
                ): null}
              </div>

              <div className="col-sm-12 col-md-4 col-lg-3">
                <BasicFormInputLabel htmlFor="mobile">
                {translate("mobile")}:
                </BasicFormInputLabel>
                <BasicFormInput
                  type="text"
                  id="mobile"
                  name="mobile"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.mobile}
                  red={touched.mobile && errors.mobile}
                />
                {touched.mobile && errors.mobile ? (
                  <div className="form-validation-errors">{errors.mobile}</div>
                ):null}
              </div>

              <div className="col-sm-12 col-md-4 col-lg-3">
                <BasicFormInputLabel htmlFor="jobTitle">
                {translate("jobTitle")}:
                </BasicFormInputLabel>
                <BasicFormInput
                  type="text"
                  name="jobTitle"
                  id="jobTitle"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.jobTitle}
                  red={touched.jobTitle && errors.jobTitle}
                />
                {touched.jobTitle && errors.jobTitle ? (
                  <div className="form-validation-errors">
                    {errors.jobTitle}
                  </div>
                ):null}
              </div>

              <div className="col-sm-12 col-md-4 col-lg-3">
                <BasicFormInputLabel htmlFor="department">
                {translate("department")}:
                </BasicFormInputLabel>
                <BasicFormInput
                  type="text"
                  name="department"
                  id="department"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.department}
                  red={touched.department && errors.department}
                />
                {touched.department && errors.department ? (
                  <div className="form-validation-errors">
                    {errors.department}
                  </div>
                ):null}
              </div>

              <div className="col-sm-12 col-md-4 col-lg-3">
                <BasicFormInputLabel id="accountName">
                {translate("accountName")}:
                </BasicFormInputLabel>
                <BasicFormInput
                  type="text"
                  name="accountName"
                  id="accountName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.accountName}
                  red={touched.accountName && errors.accountName}
                />
                {touched.accountName && errors.accountName ? (
                  <div className="form-validation-errors">
                    {errors.accountName}
                  </div>
                ):null}
              </div>

              <div className="col-sm-12 col-md-4 col-lg-3">
                <BasicFormInputLabel id="fax">{translate("fax")}:</BasicFormInputLabel>
                <BasicFormInput
                  type="text"
                  name="fax"
                  id="fax"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fax}
                  red={touched.fax && errors.fax}
                />
                {touched.fax && errors.fax ? (
                  <div className="form-validation-errors">{errors.fax}</div>
                ):null}
              </div>

              <div className="col-sm-12 col-md-4 col-lg-3">
                <BasicFormInputLabel htmlFor="email">
                {translate("email")}:
                </BasicFormInputLabel>
                <BasicFormInput
                  type="text"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  red={touched.email && errors.email}
                />
                {touched.email && errors.email ? (
                  <div className="form-validation-errors">{errors.email}</div>
                ):null}
              </div>

              <div className="col-sm-12 col-md-4 col-lg-3">
                <BasicFormInputLabel htmlFor="assignTo">
                {translate("assignTo")}:
                </BasicFormInputLabel>
                <BasicFormInput
                  type="text"
                  name="assignTo"
                  id="assignTo"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.assignTo}
                  red={touched.assignTo && errors.assignTo && true}
                  placeholder="type to search..."
                />
                {touched.assignTo && errors.assignTo ? (
                  <div className="form-validation-errors">
                    {errors.assignTo}
                  </div>
                ):null}
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12 text-left">
                <h1 className="address-heading mt-4">{translate("primaryAddress")}:</h1>
              </div>

              <div className="col-sm-12 col-md-4 col-lg-3">
                <BasicFormInputLabel htmlFor="primaryAddressStreet">
                {translate("primaryAddressStreet")}:
                </BasicFormInputLabel>
                <BasicFormInput
                  type="text"
                  name="primaryAddressStreet"
                  id="primaryAddressStreet"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.primaryAddressStreet}
                  red={
                    touched.primaryAddressStreet && errors.primaryAddressStreet
                  }
                />
                {touched.primaryAddressStreet &&
                  errors.primaryAddressStreet ? (
                    <div className="form-validation-errors">
                      {errors.primaryAddressStreet}
                    </div>
                  ):null}
              </div>
              <div className="col-sm-12 col-md-4 col-lg-3">
                <BasicFormInputLabel htmlFor="primaryAddressPostalCode">
                {translate("primaryAddressPostalCode")}:
                </BasicFormInputLabel>
                <BasicFormInput
                  type="text"
                  name="primaryAddressPostalCode"
                  id="primaryAddressPostalCode"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.primaryAddressPostalCode}
                  red={
                    touched.primaryAddressPostalCode &&
                    errors.primaryAddressPostalCode
                  }
                />
                {touched.primaryAddressPostalCode &&
                  errors.primaryAddressPostalCode ? (
                    <div className="form-validation-errors">
                      {errors.primaryAddressPostalCode}
                    </div>
                  ):null}
              </div>
              <div className="col-sm-12 col-md-4 col-lg-3">
                <BasicFormInputLabel htmlFor="primaryAddressCity">
                {translate("primaryAddressCity")}:
                </BasicFormInputLabel>
                <BasicFormInput
                  type="text"
                  name="primaryAddressCity"
                  id="primaryAddressCity"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.primaryAddressCity}
                  red={touched.primaryAddressCity && errors.primaryAddressCity}
                />
                {touched.primaryAddressCity && errors.primaryAddressCity ? (
                  <div className="form-validation-errors">
                    {errors.primaryAddressCity}
                  </div>
                ):null}
              </div>
              <div className="col-sm-12 col-md-4 col-lg-3">
                <BasicFormInputLabel htmlFor="primaryAddressState">
                {translate("primaryAddressState")}:
                </BasicFormInputLabel>
                <BasicFormInput
                  type="text"
                  name="primaryAddressState"
                  id="primaryAddressState"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.primaryAddressState}
                  red={
                    touched.primaryAddressState && errors.primaryAddressState
                  }
                />
                {touched.primaryAddressState && errors.primaryAddressState ? (
                  <div className="form-validation-errors">
                    {errors.primaryAddressState}
                  </div>
                ):null}
              </div>
              <div className="col-sm-12 col-md-4 col-lg-3">
                <BasicFormInputLabel htmlFor="primaryAddressCountry">
                {translate("primaryAddressCountry")}:
                </BasicFormInputLabel>
                <BasicFormInput
                  type="text"
                  name="primaryAddressCountry"
                  id="primaryAddressCountry"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.primaryAddressCountry}
                  red={
                    touched.primaryAddressCountry &&
                    errors.primaryAddressCountry
                  }
                />
                {touched.primaryAddressCountry &&
                  errors.primaryAddressCountry ? (
                    <div className="form-validation-errors">
                      {errors.primaryAddressCountry}
                    </div>
                  ):null}
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12 text-left">
                <h1 className="address-heading mt-4">{translate("alternateAddress")}:</h1>
              </div>

              <div className="col-sm-12 col-md-4 col-lg-3">
                <BasicFormInputLabel htmlFor="alternateAddressStreet">
                {translate("alternateAddressStreet")}:
                </BasicFormInputLabel>
                <BasicFormInput
                  type="text"
                  name="alternateAddressStreet"
                  id="alternateAddressStreet"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.alternateAddressStreet}
                  red={
                    touched.alternateAddressStreet &&
                    errors.alternateAddressStreet
                  }
                />
                {touched.alternateAddressStreet &&
                  errors.alternateAddressStreet ? (
                    <div className="form-validation-errors">
                      {errors.alternateAddressStreet}
                    </div>
                  ):null}
              </div>
              <div className="col-sm-12 col-md-4 col-lg-3">
                <BasicFormInputLabel htmlFor="alternateAddressPostalCode">
                {translate("alternateAddressPostalCode")}:
                </BasicFormInputLabel>
                <BasicFormInput
                  type="text"
                  name="alternateAddressPostalCode"
                  id="alternateAddressPostalCode"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.alternateAddressPostalCode}
                  red={
                    touched.alternateAddressPostalCode &&
                    errors.alternateAddressPostalCode
                  }
                />
                {touched.alternateAddressPostalCode &&
                  errors.alternateAddressPostalCode ? (
                    <div className="form-validation-errors">
                      {errors.alternateAddressPostalCode}
                    </div>
                  ):null}
              </div>
              <div className="col-sm-12 col-md-4 col-lg-3">
                <BasicFormInputLabel htmlFor="alternateAddressCity">
                {translate("alternateAddressCity")}:
                </BasicFormInputLabel>
                <BasicFormInput
                  type="text"
                  name="alternateAddressCity"
                  id="alternateAddressCity"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.alternateAddressCity}
                  red={
                    touched.alternateAddressCity && errors.alternateAddressCity
                  }
                />
                {touched.alternateAddressCity &&
                  errors.alternateAddressCity ? (
                    <div className="form-validation-errors">
                      {errors.alternateAddressCity}
                    </div>
                  ):null}
              </div>
              <div className="col-sm-12 col-md-4 col-lg-3">
                <BasicFormInputLabel htmlFor="alternateAddressState">
                {translate("alternateAddressState")}:
                </BasicFormInputLabel>
                <BasicFormInput
                  type="text"
                  name="alternateAddressState"
                  id="alternateAddressState"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.alternateAddressState}
                  red={
                    touched.alternateAddressState &&
                    errors.alternateAddressState
                  }
                />
                {touched.alternateAddressState &&
                  errors.alternateAddressState ? (
                    <div className="form-validation-errors">
                      {errors.alternateAddressState}
                    </div>
                  ):null}
              </div>
              <div className="col-sm-12 col-md-4 col-lg-3">
                <BasicFormInputLabel htmlFor="alternateAddressCountry">
                {translate("alternateAddressCountry")}:
                </BasicFormInputLabel>
                <BasicFormInput
                  type="text"
                  name="alternateAddressCountry"
                  id="alternateAddressCountry"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.alternateAddressCountry}
                  red={
                    touched.alternateAddressCountry ||
                    errors.alternateAddressCountry
                  }
                />
                {touched.alternateAddressCountry &&
                  errors.alternateAddressCountry ? (
                    <div className="form-validation-errors">
                      {errors.alternateAddressCountry}
                    </div>
                  ):null}
              </div>
              <div className="container-fluid">
                <div className="row">
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
            </div>
          </div>
        </form>
      </div>
      <div className="form-heading-container">
        <h5 className="form-tab-heading"> {translate("MoreInformation")}</h5>
      </div>
      <div className="basic-white-form">
        <form>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 col-md-4 col-lg-3">
                <BasicFormInputLabel htmlFor="leadSource">
                {translate("leadSource")}:
                </BasicFormInputLabel>
                <div className="dropdown-container">
                  <select
                    onChange={selectChange}
                    className="overview-select-item"
                    placeholder="Select an item"
                  >
                    <option value={selectedOption}>
                      {translate("coldCall")}
                    </option>
                    <option value={selectedOption}>
                      {translate("existingCustomer")}
                    </option>
                    <option value={selectedOption}>
                      {translate("selfGenerated")}
                    </option>
                    <option value={selectedOption}>
                      {translate("employee")}
                    </option>
                    <option value={selectedOption}>
                      {translate("partner")}
                    </option>
                    <option value={selectedOption}>
                      {translate("publicRelationship")}
                      
                    </option>
                    <option value={selectedOption}>
                      {translate("directMail")}
                    </option>
                    <option value={selectedOption}>
                      {translate("conference")}
                    </option>
                    <option value={selectedOption}>
                      {translate("tradeShow")}
                    </option>
                    <option value={selectedOption}>
                      {translate("website")}
                    </option>
                    <option value={selectedOption}>
                      {translate("wordOfMouth")}
                    </option>
                    <option value={selectedOption}>
                      {translate("email")}
                    </option>
                    <option value={selectedOption}>
                      {translate("campaign")}
                    </option>
                    <option value={selectedOption}>
                      {translate("other")}
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-3">
                <BasicFormInputLabel htmlFor="reportTo">
                {translate("reportTo")}:
                </BasicFormInputLabel>
                <BasicFormInput
                  type="text"
                  name="reportTo"
                  id="reportTo"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.reportTo}
                  placeholder="Type to search..."
                  red={touched.reportTo && errors.reportTo}
                />
                {touched.reportTo && errors.reportTo ? (
                  <div className="form-validation-errors">
                    {errors.reportTo}
                  </div>
                ):null}
              </div>

              <div className="col-sm-12 col-md-4 col-lg-3">
                <BasicFormInputLabel htmlFor="campaign">
                {translate("campaign")}:
                </BasicFormInputLabel>
                <BasicFormInput
                  type="text"
                  name="campaign"
                  id="campaign"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.campaign}
                  red={touched.campaign && errors.campaign}
                  placeholder="type to search..."
                />
                {touched.campaign && errors.campaign ? (
                  <div className="form-validation-errors">
                    {errors.campaign}
                  </div>
                ):null}
              </div>
              <div className="col-sm-12 col-md-4 col-lg-3">
                <BasicFormInputLabel htmlFor="dateModified">
                {translate("dateModified")}:
                </BasicFormInputLabel>
                <BasicFormInput
                  type="date"
                  id="dateModified"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.dateModified}
                  red={touched.dateModified && errors.dateModified}
                />
                {touched.dateModified && errors.dateModified ? (
                  <div className="form-validation-errors">
                    {errors.dateModified}
                  </div>
                ):null}
              </div>
              <div className="col-sm-12 col-md-4 col-lg-3">
                <BasicFormInputLabel htmlFor="dateCreated">
                {translate("dateCreated")}:
                </BasicFormInputLabel>
                <BasicFormInput
                  type="date"
                  id="dateCreated"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.dateCreated}
                  red={touched.dateCreated && errors.dateCreated}
                />
                {touched.dateCreated && errors.dateCreated ? (
                  <div className="form-validation-errors">
                    {errors.dateCreated}
                  </div>
                ):null}
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="container p-4">
        <div className="row">
          <div className="col-sm-12 text-sm-center text-md-right">
            <button className="btn btn-primary m-1"
              type="submit"
            >
              {translate("save")}
            </button>
            <button className="btn btn-primary">{translate("cancel")}</button>
          </div>

        </div>
      </div>
    </form>  
    </React.Fragment>
  );
};

const FirstForm = withFormik<MyContactFormProps, FormValues>({
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
    firstName: Yup.string()
      .trim()
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed")
      .min(3, "Too Short!")
      .max(20, "Too Long!")
      .required("* Firstname is required"),
    lastName: Yup.string()
      .trim()
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed")
      .min(3, "Too Short!")
      .max(20, "Too Long!")
      .required("* Lastname is required"),
    officePhone: Yup.string()
      .required("Mobile number is Required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "* phone number is required"
      )
      .min(10)
      .max(10),
    mobile: Yup.string()
      .required("Mobile number is Required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "* phone number is required"
      )
      .min(10)
      .max(10),
    jobTitle: Yup.string().required("* Job Title is Required"),
    department: Yup.string().required("* Department is Required"),
    accountName: Yup.string().required("* Account Name is Required"),
    fax: Yup.string().required("* Fax is Required"),
    email: Yup.string()
      .email("Field should contain a valid e-mail")
      .max(255)
      .required("* E-mail is required"),
    assignTo: Yup.string().required("* Assign to some one"),
    description: Yup.string().required("* Description is required"),
    primaryAddressStreet: Yup.string().required("* Required"),
    primaryAddressPostalCode: Yup.string().required("* Required"),
    primaryAddressCity: Yup.string()
      .required("* Required")
      .trim()
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
    primaryAddressState: Yup.string()
      .required("* Required")
      .trim()
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
    primaryAddressCountry: Yup.string()
      .required("* Required")
      .trim()
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
    alternateAddressStreet: Yup.string().required("*Required"),
    alternateAddressPostalCode: Yup.string().required("*Required"),
    alternateAddressCity: Yup.string()
      .required("*Required")
      .trim()
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
    alternateAddressState: Yup.string()
      .required("*Required")
      .trim()
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
    alternateAddressCountry: Yup.string()
      .required("*Required")
      .trim()
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
    reportTo: Yup.string().required("* Report to Someone"),
    campaign: Yup.string().required("* Campaign to Someone"),
    dateCreated: Yup.number().required("* Date is Required"),
    dateModified: Yup.number().required("* Modified Date is Required"),
  }),
  handleSubmit({ firstName, lastName, officePhone, mobile }: FormValues) {
    console.log("firstName", firstName);
    console.log("lastName", lastName);
    console.log("officePhone", officePhone);
    console.log("mobile", mobile);
  },
})(InnerForm);

const OverViewForm = (props: any) => {
  return (
    <div>
      <FirstForm />
    </div>
  );
};

export default OverViewForm;
