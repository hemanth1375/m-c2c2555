import React, { FC, useState, useRef } from "react";
import { useForm, Resolver } from "react-hook-form";
import { BasicFormInput, BasicFormInputLabel } from "components/forms";
import { translate } from "languages";
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

  const phoneNumberValidation = (event: any) => {
    setPhoneNumber(event.target.value);
  };

  return (
    //overview form
    <div className="App">
      <form onSubmit={onSubmit} className="overview-form">
        {/* second line form detailes */}

        <div className="over-view-form-bottom-containers">
          <div className="left-container">
            <div>
              <BasicFormInputLabel bold>
                {translate("name")}:
              </BasicFormInputLabel>
              <BasicFormInput {...register("officePhone")} />
            </div>
            <div className="dotted-horizontal-line-container">
              <hr className="dotted-horizontal-line-bottom" />
            </div>
          </div>
          <div className="right-container">
            <div>
              <BasicFormInputLabel bold>
                {translate("officePhone")}:
              </BasicFormInputLabel>
              <BasicFormInput
                {...register("mobile")}
                className="overview-input-form-bottom"
              />
              {/* {
              
              if(phoneNumber.length<=9){return <h1>enter 10 numbers</h1>}
} */}
            </div>

            <div className="dotted-horizontal-line-container-bottom">
              <hr className="dotted-horizontal-line-bottom" />
            </div>
          </div>
        </div>
        <div className="over-view-form-bottom-containers">
          <div className="left-container">
            <div>
              <BasicFormInputLabel bold>
                {translate("website")}:
              </BasicFormInputLabel>
              <BasicFormInput {...register("officePhone")} />
            </div>
            <div className="dotted-horizontal-line-container">
              <hr className="dotted-horizontal-line-bottom" />
            </div>
          </div>
          <div className="right-container">
            <div>
              <BasicFormInputLabel bold>
                {translate("fax")}:
              </BasicFormInputLabel>
              <BasicFormInput {...register("mobile")} />
            </div>

            <div className="dotted-horizontal-line-container-bottom">
              <hr className="dotted-horizontal-line-bottom" />
            </div>
          </div>
        </div>
        <div className="over-view-form-bottom-containers"></div>
        <div>
          <div className="right-container">
            <div>
              <BasicFormInputLabel bold>
                {translate("emailAddress")}:
              </BasicFormInputLabel>
              <BasicFormInput {...register("mobile")} />
            </div>

            <div className="dotted-horizontal-line-container-bottom">
              <hr className="dotted-horizontal-line-bottom" />
            </div>
          </div>
        </div>
        <div className="over-view-form-bottom-containers">
          <div className="left-container">
            <div>
              <BasicFormInputLabel bold>
                {translate("billingAddress")}:
              </BasicFormInputLabel>
              <div className="over-view-address-form">
                <div className="over-view-address-label-form">
                  <BasicFormInputLabel>
                    {translate("billingStreet")}
                  </BasicFormInputLabel>
                </div>
                <BasicFormInput {...register("officePhone")} />
              </div>
              <div className="over-view-address-form">
                <div className="over-view-address-label-form">
                  <BasicFormInputLabel>
                    {translate("billingPostalCode")}
                  </BasicFormInputLabel>
                </div>
                <BasicFormInput {...register("officePhone")} />
              </div>
              <div className="over-view-address-form">
                <div className="over-view-address-label-form">
                  <BasicFormInputLabel>
                    {translate("billingCity")}
                  </BasicFormInputLabel>
                </div>
                <BasicFormInput {...register("officePhone")} />
              </div>
              <div className="over-view-address-form">
                <div className="over-view-address-label-form">
                  <BasicFormInputLabel>
                    {translate("billingState")}
                  </BasicFormInputLabel>
                </div>
                <BasicFormInput {...register("officePhone")} />
              </div>
              <div className="over-view-address-form">
                <div className="over-view-address-label-form">
                  <BasicFormInputLabel>
                    {translate("billingCountry")}
                  </BasicFormInputLabel>
                </div>
                <BasicFormInput {...register("officePhone")} />
              </div>
            </div>
            <div className="dotted-horizontal-line-container">
              <hr className="dotted-horizontal-line-bottom" />
            </div>
          </div>

          <div className="right-container">
            <div>
              <BasicFormInputLabel bold>
                {translate("shippingAddress")}:
              </BasicFormInputLabel>
              <div className="over-view-address-form">
                <div className="over-view-address-label-form">
                  <BasicFormInputLabel>
                    {translate("shippingStreet")}
                  </BasicFormInputLabel>
                </div>
                <BasicFormInput
                  {...register("officePhone")}
                  className="overview-input-form-bottom"
                />
              </div>
              <div className="over-view-address-form">
                <div className="over-view-address-label-form">
                  <BasicFormInputLabel>
                    {translate("shippingPostalCode")}
                  </BasicFormInputLabel>
                </div>
                <BasicFormInput {...register("officePhone")} />
              </div>
              <div className="over-view-address-form">
                <div className="over-view-address-label-form">
                  <BasicFormInputLabel>
                    {translate("shippingCity")}
                  </BasicFormInputLabel>
                </div>
                <BasicFormInput {...register("officePhone")} />
              </div>
              <div className="over-view-address-form">
                <div className="over-view-address-label-form">
                  <BasicFormInputLabel>
                    {translate("shippingState")}
                  </BasicFormInputLabel>
                </div>
                <BasicFormInput {...register("officePhone")} />
              </div>
              <div className="over-view-address-form">
                <div className="over-view-address-label-form">
                  <BasicFormInputLabel>
                    {translate("shippingCountry")}
                  </BasicFormInputLabel>
                </div>
                <BasicFormInput {...register("officePhone")} />
              </div>
            </div>

            <div className="dotted-horizontal-line-container-bottom">
              <hr className="dotted-horizontal-line-bottom" />
            </div>
          </div>
        </div>
        <div className="over-view-form-bottom-containers">
          <div className="left-container">
            <div>
              <BasicFormInputLabel bold>
                {translate("description")}:
              </BasicFormInputLabel>
              <textarea
                ref={textareaRef}
                onChange={textAreaChange}
                className="over-view-form-textarea"
              >
                {value}
              </textarea>
            </div>
            <div className="dotted-horizontal-line-container">
              <hr className="dotted-horizontal-line-bottom" />
            </div>
          </div>
          <div className="right-container">
            <div>
              <BasicFormInputLabel bold>
                {translate("assignedTo")}:
              </BasicFormInputLabel>
              <input
                {...register("mobile")}
                className="overview-input-form-bottom assigned-to-form"
                placeholder="type to search.."
              />
            </div>

            <div className="dotted-horizontal-line-container-bottom">
              <hr className="dotted-horizontal-line-bottom" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default OverViewForm;
