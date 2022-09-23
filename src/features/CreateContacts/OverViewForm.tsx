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
  console.log(textareaRef)
  const [value, setValue] = useState<string>();
  console.log(value)
  // This function is triggered when the select changes
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const TriggredValue = event.target.value;
    setSelectedOption(TriggredValue);
  };

  const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
    console.log(textAreaChange)
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
      
      <div className="heading-form-container">
        <h5 className="heading-form">{translate("overViewForm")}:</h5>
      </div>
      <div className="contacts-white-form mb-5">
        <form onSubmit={handleSubmit} className="overview-form">
          <div className="over-view-form-flex-container">
            <div className="half-overview-form">
              <div className="overview-form-name-container">
                <strong className="overview-form-name">{translate("name")}:</strong>
              </div>
              <div className="first-last-container">
                <div className="dropdown-container">
                  <select
                    onChange={selectChange}
                    className="overview-select-item"
                    defaultValue={"Mr."}
                  >
                    <option value={selectedOption}>{translate("mr")}:</option>
                    <option value={selectedOption}>{translate("ms")}:.</option>
                    <option value={selectedOption}>{translate("mrs")}:.</option>
                    <option value={selectedOption}>{translate("miss")}:.</option>
                    <option value={selectedOption}>{translate("dr")}:.</option>
                    <option value={selectedOption}>{translate("pro")}:.</option>
                  </select>
                </div>
                <div className="d-flex flex-column">
                  <div>
                    <BasicFormInputLabel htmlFor="formFirstName">
                    {translate("firstName")}:
                    </BasicFormInputLabel>
                    <BasicFormInput
                      type="text"
                      name="firstName"
                      id="formFirstName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                      className="overview-input-form"
                      red={touched.firstName && errors.firstName}
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
                    {translate("lastName")}:
                    </BasicFormInputLabel>
                    <BasicFormInput
                      type="text"
                      name="lastName"
                      id="formLastName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                      className="overview-input-form"
                      red={touched.lastName && errors.lastName}
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
                  {translate("officePhone")}:
                  </BasicFormInputLabel>
                  <BasicFormInput
                    type="text"
                    name="officePhone"
                    id="formOfficePhone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.officePhone}
                    red={touched.officePhone && errors.officePhone}
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
                  {translate("mobile")}:
                  </BasicFormInputLabel>
                  <BasicFormInput
                    type="text"
                    name="mobile"
                    id="formMobile"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.mobile}
                    red={touched.mobile && errors.mobile}
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
                  {translate("jobTitle")}:
                  </BasicFormInputLabel>
                  <BasicFormInput
                    type="text"
                    name="jobTitle"
                    id="formJobTitle"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.jobTitle}
                    red={touched.jobTitle && errors.jobTitle}
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
                  {translate("department")}:
                  </BasicFormInputLabel>
                  <BasicFormInput
                    type="text"
                    name="department"
                    id="formDepartment"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.department}
                    red={touched.department && errors.department}
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
                  {translate("accountName")}:
                  </BasicFormInputLabel>
                  <BasicFormInput
                    type="text"
                    name="accountName"
                    id="formAccountName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.accountName}
                    red={touched.accountName && errors.accountName}
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
                  <BasicFormInputLabel id="formFax">{translate("fax")}:</BasicFormInputLabel>
                  <BasicFormInput
                    type="text"
                    name="fax"
                    id="formFax"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.fax}
                    red={touched.fax && errors.fax}
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
                  <BasicFormInputLabel id="formEmail">{translate("email")}:</BasicFormInputLabel>
                  <BasicFormInput
                    type="email"
                    name="email"
                    id="formEmail"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    red={touched.email && errors.email}
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
                  {translate("assignTo")}:
                  </BasicFormInputLabel>
                  <BasicFormInput
                    type="text"
                    name="assignTo"
                    id="assignTo"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.assignTo}
                    red={touched.assignTo && errors.assignTo}
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
                  {translate("description")}:
                  </BasicFormInputLabel>
                  <textarea
                    className="over-view-form-textarea"
                    id="formDescription"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                    rows={1}
                    cols={49}
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
                <h1 className="overview-label-form-bottom">{translate("primaryAddress")}:</h1>
                <div className="form-address-container-row">
                  <div className="over-view-form-input-box-width">
                    <div className="over-view-address-form">
                      <div className="over-view-address-label-form">
                        <BasicFormInputLabel htmlFor="primaryAddressStreet">
                        {translate("primaryAddressStreet")}:
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
                          errors.primaryAddressStreet 
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
                        {translate("primaryAddressPostalCode")}:
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
                          errors.primaryAddressPostalCode 
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
                        {translate("primaryAddressCity")}:
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
                          errors.primaryAddressCity
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
                        {translate("primaryAddressState")}:
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
                          errors.primaryAddressState
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
                        {translate("primaryAddressCountry")}:
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
                          errors.primaryAddressCountry
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
                {translate("otherAddress")}:
                </h1>
                <div className="form-address-container-row">
                  <div className="over-view-form-input-box-width">
                    <div className="over-view-address-form">
                      <div className="over-view-address-label-form">
                        <BasicFormInputLabel htmlFor="alternateAddressStreet">
                        {translate("alternateAddressStreet")}:
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
                          errors.alternateAddressStreet
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
                        {translate("alternateAddressPostalCode")}:
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
                          errors.alternateAddressPostalCode
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
                        {translate("alternateAddressCity")}:
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
                          errors.alternateAddressCity
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
                        {translate("alternateAddressState")}:
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
                          errors.alternateAddressState
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
                        {translate("alternateAddressCountry")}:
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
                          errors.alternateAddressCountry}
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
        <h5 className="heading-form">{translate("moreInformation")}:</h5>
      </div>
      <div className="contacts-white-form">
        <form onSubmit={handleSubmit} className="overview-form">
          <div className="contacts-white-form-moreinfo">
            <div className="more-info-form-flex-container-row-three">
              <div className="more-info-drop-down">
                <BasicFormInputLabel>{translate("leadSource")}:</BasicFormInputLabel>
                <div className="dropdown-container">
                  <select
                    onChange={selectChange}
                    className="overview-select-item"
                    placeholder="Select an item"
                  >
                    <option value={selectedOption}>{translate("coldCall")}:</option>
                    <option value={selectedOption}>{translate("existingCustomer")}:</option>
                    <option value={selectedOption}>{translate("selfGenerated")}:</option>
                    <option value={selectedOption}>{translate("employee")}:</option>
                    <option value={selectedOption}>{translate("partner")}:</option>
                    <option value={selectedOption}>{translate("publicRelationship")}: {translate("relationship")}:</option>
                    <option value={selectedOption}>{translate("directMail")}:</option>
                    <option value={selectedOption}>{translate("conference")}:</option>
                    <option value={selectedOption}>{translate("tradeShow")}:</option>
                    <option value={selectedOption}>{translate("website")}:</option>
                    <option value={selectedOption}>{translate("wordOfMouth")}:</option>
                    <option value={selectedOption}>{translate("email")}:</option>
                    <option value={selectedOption}>{translate("campaign")}:</option>
                    <option value={selectedOption}>{translate("other")}:</option>
                  </select>
                </div>
              </div>
              <div className="over-view-form-input-box-width">
                <div>
                  <BasicFormInputLabel htmlFor="leadSource">
                  {translate("reportTo")}:
                  </BasicFormInputLabel>
                  <BasicFormInput
                    type="text"
                    id="reportTo"
                    placeholder="Type to search..."
                    className="more-info-input-box"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.reportTo}
                    red={touched.reportTo && errors.reportTo}
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
                {translate("campaign")}:
                </BasicFormInputLabel>
                <BasicFormInput
                  type="text"
                  id="campaign"
                  placeholder="Type to search..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.campaign}
                  red={touched.campaign && errors.campaign}
                />
                {touched.campaign && errors.campaign && (
                  <div className="form-validation-errors">
                    {errors.campaign}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="dotted-horizontal-line-container-bottom">
            <hr className="dotted-horizontal-line-bottom" />
          </div>

          <div className="other-infromation-form-container">
            <div className="over-view-form-input-box-width">
              <BasicFormInputLabel htmlFor="dateCreated">
              {translate("dateCreated")}:
              </BasicFormInputLabel>
              <BasicFormInput
                type="date"
                className="more-info-date-input"
                id="dateCreated"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.dateCreated}
                red={touched.dateCreated && errors.dateCreated}
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
                {translate("dateModified")}:
              </BasicFormInputLabel>
              <BasicFormInput
                type="date"
                placeholder="date"
                className="more-info-date-input address-form-margin"
                id="dateModified"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.dateModified}
                red={touched.dateModified && errors.dateModified}
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
    firstName: Yup.string().trim()
   .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed")
   .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Firstname is required"),
    lastName: Yup.string().trim()
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed')
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Lastname is required"),
    officePhone: Yup.string().required("Mobile number is Required")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "phone number is required"
    ).min(10).max(10),
    mobile: Yup.string()
    .required("Mobile number is Required")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "phone number is required"
    ).min(10).max(10),
    jobTitle: Yup.string().required("* Job Title is Required"),
    department: Yup.string().required("* Department is Required"),
    accountName: Yup.string().required("* Account Name is Required"),
    fax: Yup.string().required("* Fax is Required"),
    email: Yup.string().email("Field should contain a valid e-mail").max(255).required("E-mail is required"),
    assignTo: Yup.string().required("* Assign to some one"),
    description: Yup.string().required("* Description is required"),
    primaryAddressStreet: Yup.string().required("* Required"),
    primaryAddressPostalCode: Yup.string().required("* Required"),
    primaryAddressCity: Yup.string().required("* Required").trim()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
    primaryAddressState: Yup.string().required("* Required").trim()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
    primaryAddressCountry: Yup.string().required("* Required").trim()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
    alternateAddressStreet: Yup.string().required("*Required"),
    alternateAddressPostalCode: Yup.string().required("*Required"),
    alternateAddressCity: Yup.string().required("*Required").trim()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
    alternateAddressState: Yup.string().required("*Required").trim()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
    alternateAddressCountry: Yup.string().required("*Required").trim()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
    reportTo: Yup.string().required("* Report to Someone"),
    campaign: Yup.string().required("* Campaign to Someone"),
    dateCreated: Yup.number().required("* Date is Required"),
    dateModified: Yup.number().required("* Modified Date is Required"),
  }),
  handleSubmit({ firstName, lastName, officePhone, mobile}: FormValues) {
    console.log("firstName", firstName);
    console.log("lastName", lastName);
    console.log("officePhone", officePhone);
    console.log("mobile", mobile)
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
