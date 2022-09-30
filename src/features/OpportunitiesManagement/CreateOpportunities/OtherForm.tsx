import React, { useState, useRef } from "react";
import "./BasicForm.css";
import { BasicFormInput, BasicFormInputLabel } from "components/forms";
import { withFormik, FormikProps } from "formik";
import * as Yup from "yup";
import { translate } from 'languages';

interface FormValues {
  
  dateModified?:number;
  dateCreated?: number;
}

interface OtherProps {
  ref?: any;
  setSubmit: boolean;
}

interface MyFormProps {
  
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

  return (
    <React.Fragment>
       <div className="basic-white-form">
       <form onSubmit={handleSubmit} id="my-opportunity-form">
           <div className='container-fluid'>
             <div className="row">
               <div className="col-sm-12 col-md-6 col-lg-6">
               <BasicFormInputLabel htmlFor="formDateModified">
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
                   {touched.dateModified && errors.dateModified && (
                  <div className="form-validation-errors">
                    {errors.dateModified}
                  </div>
                )}
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
              <BasicFormInputLabel htmlFor="formDateCreated">
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
                  {touched.dateCreated && errors.dateCreated && (
                  <div className="form-validation-errors">
                    {errors.dateCreated}
                  </div>
                )}
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
   
    dateModified:props.initialDateModified,
    dateCreated:props.initialDateCreated
  }),
  validationSchema: Yup.object().shape({
        
    dateCreated: Yup.date().required("* Date is Required"),
    dateModified: Yup.date().required("* Modified Date is Required"),
  }),
  handleSubmit({  }: FormValues) {
    console.log("opportunityName", "opportunityName");
   
  },
})(InnerForm);


const OtherForm = (props: any) => {
  return (
    <div>
      <FirstForm />
    </div>
  );
};
export default OtherForm;









