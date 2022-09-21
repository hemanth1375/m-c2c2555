import React, { FC, useState, useRef } from "react";
import "./BasicForm.css";
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
  primaryAddress?: string | number;
  otherAddress?: string | number;
  description?: string;
}

interface OtherProps {
  ref?: any;
}

interface MyFormProps {
  initialFirstName?: string;
  initialLastName?: string;
  initialOfficePhone?: number;
  initialMobile?: number;
  initialJobTitle?: string;
  initialFax?: string;
  initialEmail?: string;
  initialDescription?: string;
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

  console.log(errors);
  return (
    <React.Fragment>
      <div className="App">
        <form onSubmit={handleSubmit} className="overview-form">
          

          {/* second line form detailes */}

          <div className="over-view-form-bottom-containers">
            <div className="left-container">
              <div>
                <label
                  className="overview-label-form-bottom"
                  id="formOfficePhone"
                >
                  OPPORTUNITY NAME:
                </label>
                <input
                  type="text"
                  name="officePhone"
                  id="formOfficePhone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.officePhone}
                  className="overview-input-form-bottom"
                />
              </div>
              {touched.officePhone && errors.officePhone && (
                <div className="invalid-feedback">{errors.officePhone}</div>
              )}
              <div className="dotted-horizontal-line-container">
                <hr className="dotted-horizontal-line-bottom" />
              </div>
            </div>
            <div className="right-container">
            <div>
                <label
                  className="overview-label-form-bottom"
                  htmlFor="formAccountName"
                >
                  ACCOUNT NAME:
                </label>
                <input
                  type="text"
                  name="accountName"
                  id="formAccountName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.accountName}
                  className="overview-input-form-bottom account-name"
                />
              </div>
              {touched.accountName && errors.accountName && (
                <div className="invalid-feedback">{errors.accountName}</div>
              )}
              <div className="dotted-horizontal-line-container">
                <hr className="dotted-horizontal-line-bottom" />
              </div>
            </div>
          </div>
          <div className="over-view-form-bottom-containers">
            <div className="left-container">
              <div>
                <label className="overview-label-form-bottom" id="formJobTitle">
                  OPPORTUNITY AMOUNT:
                </label>
                <div className="dropdown-container">
                  <select
                    onChange={selectChange}
                    className="overview-select-item"
                    value={value}
                  >
                    <option value={selectedOption}>Select an item</option>
                    <option value={selectedOption}>USD</option>
                    
                  </select>
                </div>
              </div>
              
              
              <div className="dotted-horizontal-line-container">
                <hr className="dotted-horizontal-line-bottom" />
              </div>
            </div>
            <div className="right-container">
              <div>
                <label
                  className="overview-label-form-bottom"
                  htmlFor="formDepartment"
                >
                  DEPARTMENT:
                </label>
                <input
                  type="text"
                  name="department"
                  id="formDepartment"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.department}
                  className="overview-input-form-bottom"
                />
              </div>
              {touched.department && errors.department && (
                <div className="invalid-feedback">{errors.department}</div>
              )}
              <div className="dotted-horizontal-line-container-bottom">
                <hr className="dotted-horizontal-line-bottom" />
              </div>
            </div>
          </div>
          <div className="over-view-form-bottom-containers">
            <div className="left-container">
              <div>
                <label
                  className="overview-label-form-bottom"
                  htmlFor="formAccountName"
                >
                  ACCOUNT NAME:
                </label>
                <input
                  type="text"
                  name="accountName"
                  id="formAccountName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.accountName}
                  className="overview-input-form-bottom account-name"
                />
              </div>
              {touched.accountName && errors.accountName && (
                <div className="invalid-feedback">{errors.accountName}</div>
              )}
              <div className="dotted-horizontal-line-container">
                <hr className="dotted-horizontal-line-bottom" />
              </div>
            </div>

            <div className="right-container">
              <div>
                <label className="overview-label-form-bottom" htmlFor="formFax">
                  FAX:
                </label>
                <input
                  type="text"
                  name="fax"
                  id="formFax"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fax}
                  className="overview-input-form-bottom"
                />
              </div>
              {touched.fax && errors.fax && (
                <div className="invalid-feedback">{errors.fax}</div>
              )}
              <div className="dotted-horizontal-line-container-bottom">
                <hr className="dotted-horizontal-line-bottom" />
              </div>
            </div>
          </div>
          <div>
            <div className="right-container">
              <div>
                <label
                  className="overview-label-form-bottom"
                  htmlFor="formEmail"
                >
                  EMAIL ADDRESS:
                </label>
                <input
                  type="text"
                  name="email"
                  id="formEmail"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="overview-input-form-bottom"
                />
              </div>
              {touched.email && errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
              <div className="dotted-horizontal-line-container-bottom">
                <hr className="dotted-horizontal-line-bottom" />
              </div>
            </div>
          </div>
          
          <div className="over-view-form-bottom-containers">
            <div className="left-container">
              <div>
                <label
                  className="overview-label-form-bottom"
                  htmlFor="formDesription"
                >
                  DESCRIPTION:
                </label>
                <textarea
                  className="over-view-form-textarea"
                  id="formDescription"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                ></textarea>
              </div>
              {touched.description && errors.description && (
                <div className="invalid-feedback">{errors.description}</div>
              )}
              <div className="dotted-horizontal-line-container">
                <hr className="dotted-horizontal-line-bottom" />
              </div>
            </div>
            <div className="right-container">
              <div>
                <label className="overview-label-form-bottom">
                  ASSIGNED TO:
                </label>
                <input
                  type="text"
                  className="overview-input-form-bottom assigned-to-form"
                  placeholder="type to search.."
                />
              </div>

              <div className="dotted-horizontal-line-container-bottom">
                <hr className="dotted-horizontal-line-bottom" />
              </div>
            </div>
          </div>
          <button
            disabled={
              !!(errors.firstName && touched.firstName) ||
              !!(errors.lastName && touched.lastName)
            }
            type="submit"
          >
            {" "}
            Submit
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

const FirstForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: (props) => ({
    firstName: props.initialFirstName,
    lastName: props.initialLastName,
  }),
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required("first name is required"),
    lastName: Yup.string().required("last name is required"),
  }),
  handleSubmit({ firstName, lastName }: FormValues) {
    console.log("firstName", firstName);
    console.log("lastName", lastName);
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

const BasicForm: React.FC<{}> = (props: any) => {
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
export default BasicForm;


       