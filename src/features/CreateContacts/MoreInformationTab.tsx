import React, { Fragment, useState } from "react";
import { BasicFormInput, BasicFormInputLabel } from "components/forms";
import { withFormik, FormikProps } from "formik";
import * as Yup from "yup";
import "./MoreInformationTab.css";

interface FormValues {
  reportTo?: string;
  campaign?: string;
  dateModified?: number;
  dateCreated?: number;
}

interface OtherProps {
  ref?: any;
}

interface MyFormProps {
  initialReportTo?: string;
  initialCampaign?: string;
  initialDateModified?: number;
  initialDateCreated?: number;
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {

  const [selectedOption, setSelectedOption] = useState<string>();
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const TriggredValue = event.target.value;
    setSelectedOption(TriggredValue);
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
    <Fragment>
      <div className="heading-form-container">
        <h5 className="heading-form">MORE INFORMATION</h5>
      </div>
      <div className="contacts-white-form">
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
          <button
            disabled={
              isSubmitting ||
              !!(errors.reportTo && touched.reportTo) ||
              !!(errors.campaign && touched.campaign)
            }
            type="submit"
          >
            {" "}
            Submit
          </button>
        </form>
      </div>
    </Fragment>
  );
};

const SecondForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: (props) => ({
    reportTo: props.initialReportTo,
    campaign: props.initialCampaign,
    dateCreated: props.initialDateCreated,
    dateModified: props.initialDateModified,
  }),
  validationSchema: Yup.object().shape({
    reportTo: Yup.string().required("* Report to Someone"),
    campaign: Yup.string().required("* Campaign to Someone"),
    dateCreated: Yup.number().required("* Date is Required"),
    dateModified: Yup.number().required("* Modified Date is Required"),
  }),
  handleSubmit({ reportTo, campaign, dateCreated, dateModified }: FormValues) {
    console.log("reportTo", reportTo);
    console.log("campaign", campaign);
    console.log("dateCreated", dateCreated);
    console.log("modifiedDate", dateModified);
  },
})(InnerForm);

const MoreInformationTab: React.FC<{}> = (props: any) => {
  return (
    <div>
      <SecondForm />
    </div>
  );
};

export default MoreInformationTab;

// const MoreInformationTab: FC<{}> = () => {
//   // const cursorHandler = () => {
//   //   console.log(44);
//   // };

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//   };

//   return (
//     //more information form tab
//     <Fragment>
//       <div className="heading-form-container">
//         <h5 className="heading-form">MORE INFORMATION</h5>
//       </div>
//       <div className="contacts-white-form">
//         <form onSubmit={handleSubmit}>
//           <div className="more-info-form-flex-container-row-three">
//             <div className="over-view-form-input-box-width">
//               <BasicFormInputLabel htmlFor="leadSource">
//                 LEAD SOURCE:
//               </BasicFormInputLabel>
//               <BasicFormInput
//                 type="text"
//                 id="leadSource"
//                 placeholder="Select an item..."
//               />
//             </div>

//             <div className="over-view-form-input-box-width">
//               <BasicFormInputLabel htmlFor="leadSource">
//                 REPORTS TO:
//               </BasicFormInputLabel>
//               <BasicFormInput
//                 type="text"
//                 id="leadSource"
//                 placeholder="Type to search..."
//                 className="more-info-input-box"
//               />
//             </div>
//             <div className="over-view-form-input-box-width">
//               <BasicFormInputLabel htmlFor="leadSource">
//                 CAMPAIGN:
//               </BasicFormInputLabel>
//               <BasicFormInput
//                 type="text"
//                 id="leadSource"
//                 placeholder="Type to search..."
//               />
//             </div>
//           </div>

//           <div className="dotted-horizontal-line-container-bottom">
//             <hr className="dotted-horizontal-line-bottom" />
//           </div>

//           <div className="other-infromation-form-container">
//             <div className="over-view-form-input-box-width">
//               <BasicFormInputLabel htmlFor="dateCreated">
//                 DATE CREATED:
//               </BasicFormInputLabel>
//               <BasicFormInput
//                 type="date"
//                 className="more-info-date-input"
//                 id="dateCreated"
//               />
//             </div>
//             <div className="over-view-form-input-box-width">
//               <BasicFormInputLabel
//                 htmlFor="dateModified"
//                 className="address-form-margin"
//               >
//                 DATE MODIFIED:
//               </BasicFormInputLabel>
//               <BasicFormInput
//                 type="date"
//                 placeholder="date"
//                 className="more-info-date-input address-form-margin"
//                 id="dateModified"
//               />
//             </div>
//           </div>
//           <div className="dotted-horizontal-line-container-bottom">
//             <hr className="dotted-horizontal-line-bottom" />
//           </div>
//         </form>
//       </div>
//     </Fragment>
//   );
// };

// export default MoreInformationTab;
