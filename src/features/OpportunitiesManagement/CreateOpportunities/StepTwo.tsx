import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { translate } from "languages";

const stepTwoValidationSchema = Yup.object({
    date_modified: Yup.date().required("* Date is Required"),
    date_created: Yup.date().required("* Date is Required")
});

const StepTwo = (props:any) => {
  const handleSubmit = (values:any) => {
    props.next(values, true);
  };

  return (
    <Formik
      validationSchema={stepTwoValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
          {({ values }) => (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <h3>CREATE OPPORTUNITY</h3><hr/>
                        <p style={{fontSize:"16px",fontWeight:"550"}}>OTHER</p>
                    </div>
                </div>
        
              
        <Form>
            
                      <div className="row">
                        <div className="col-sm-12 col-md-6">
                                  <p>{translate("dateModified")}:</p>
                            <div className="d-flex flex-column">
                                  <Field type="date" name="date_modified" />
                                  <div className="error-text">
                                    <ErrorMessage name="date_modified" /> 
                                  </div>
                            </div>
                        </div> 
                          <div className="col-sm-12 col-md-6">
                                  <p>{translate("dateCreated")}:</p>
                            <div className="d-flex flex-column">
                                  <Field type="date" name="date_created" />
                                  <div className="error-text">
                                    <ErrorMessage name="date_created" /> 
                                  </div>
                              </div>
                          </div> 

                          
                      </div>
            
            <div className="text-right mr-5 mt-5">
                <button className="btn btn-primary mr-5" type="button" onClick={() => props.prev(values)}>
                    Back
                </button>
                <button className="btn btn-primary" type="submit">Submit</button>
            </div>
         </Form>
        </div>
        </>
      )}
    </Formik>
  );
};
export default StepTwo;