
import React, { FC, useState, useRef } from "react";
import { useForm, Resolver } from "react-hook-form";
import "./OverViewForm.css";

type FormValues = {
  firstName: string;
  lastName: string;
  officePhone: number;
  mobile: number;
  jobTitle: string;
  fax: string | number;
  email: string | number;
  primaryAddress: string | number;
  otherAddress: string | number;
  description: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: !values.lastName ? {} : values,
    errors: !values.lastName
      ? {
          lastName: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  };
};

const OverViewForm: FC<{}> = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [selectedOption, setSelectedOption] = useState<string>();
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [value, setValue] = useState<string>();
  // This function is triggered when the select changes
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const TriggredValue = event.target.value;
    setSelectedOption(TriggredValue);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: resolver,
  });

  const onSubmit = handleSubmit((data) => alert(JSON.stringify(data)));

  const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const phoneNumberValidation = (event:any) => {
    setPhoneNumber(event.target.value)
  }

  return (
    //overview form
    <div className="App">
      <form onSubmit={onSubmit} className="overview-form">
        {/* <div className="over-view-form-flex-container">
          <div className="half-overview-form">
            <div className="overview-form-name-container">
              <strong className="overview-form-name">NAME :</strong>
            </div>
            <div className="first-last-container">
              <div className="dropdown-container">
                <select
                  onChange={selectChange}
                  className="overview-select-item"
                 
                >
                  <option selected disabled>
                    Select an item
                  </option>
                  <option value={selectedOption} >Mr.</option>
                  <option value={selectedOption}>Ms.</option>
                  <option value={selectedOption}>Mrs.</option>
                  <option value={selectedOption}>Miss.</option>
                  <option value={selectedOption}>Dr.</option>
                  <option value={selectedOption}>Pro.</option>
                </select>
              </div>
              <div>
                <label className="overview-label-form">First Name</label>
                <input
                  {...register("firstName")}
                  className="overview-input-form first-name"
                />
                {errors?.firstName && (
                  <p className="overview-error-paragraph">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="overview-label-form">Last Name</label>
                <input
                  {...register("lastName")}
                  className="overview-input-form"
                />
                {errors?.lastName && (
                  <p className="overview-error-paragraph">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="dotted-horizontal-line-container">
          <hr className="dotted-horizontal-line" />
        </div> */}

        {/* second line form detailes */}

        <div className="container">
          <div className="row">
            <div className="col-sm-6 vline">
              <div>
                <label className="overview-label-form-bottom">OPPORTUNITY NAME:</label>
                <input
                  {...register("officePhone")}
                  className="overview-input-form-bottom"
                />
              </div>
              <div className="dotted-horizontal-line-container">
                <hr className="dotted-horizontal-line-bottom" />
              </div>
              <div>
              <label className="overview-label-form-bottom">OPPORTUNITY AMOUNT:</label>
              </div>
              <div className="currency-container">
                <div>
                 
                  <label className="overview-label-form">currency</label>
                  {/* <input
                    {...register("officePhone")}
                    className="overview-input-form-bottom account-name"
                    placeholder="Select an item"
                  /> */}
                  <div className="dropdown-container">
                <select
                  onChange={selectChange}
                  className="overview-select-item"
                 
                >
                  <option selected disabled>
                    Select an item
                  </option>
                  <option value={selectedOption} >USD</option>
                  
                </select>
                  </div>
                </div>
                <div>
                  <label className="overview-label-form">Opportunity Amount</label>
                  <input
                    {...register("firstName")}
                    className="overview-input-form first-name"
                    />
                </div>
              </div>
              <hr className="line" />
              <div className="dotted-horizontal-line-container">
                <hr className="dotted-horizontal-line-bottom" />
              </div>
              <div>
                <label className="overview-label-form-bottom">SALES STAGES:</label>
                <div className="dropdown-container">
                <select
                  onChange={selectChange}
                  className="overview-select-item"
                 
                >
                  <option selected disabled>
                    Select an item
                  </option>
                    <option value={selectedOption} >Prospecting</option>
                    <option value={selectedOption} >Qualifications</option>
                    <option value={selectedOption} >Need Analysis</option>
                    <option value={selectedOption} >Value Preposition</option>
                    <option value={selectedOption} >Identifying Decision Makers</option>
                    <option value={selectedOption} >Perception Analysis</option>
                    <option value={selectedOption} >Proposal Price Quote</option>
                    <option value={selectedOption} >Closed Won</option>
                    <option value={selectedOption} >Closed Lost</option>
                </select>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default OverViewForm;
