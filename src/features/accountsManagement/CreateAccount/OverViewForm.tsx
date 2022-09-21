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
                {translate("NAME")}:
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
                {translate("OFFICE PHONE")}:
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
                {translate("WEBSITE")}:
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
                {translate("FAX")}:
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
                {translate("EMAIL ADDRESS")}:
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
                {translate("BILLING ADDRESS")}:
              </BasicFormInputLabel>
              <div className="over-view-address-form">
                <div className="over-view-address-label-form">
                  <BasicFormInputLabel>
                    {translate("Billing Street")}
                  </BasicFormInputLabel>
                </div>
                <BasicFormInput {...register("officePhone")} />
              </div>
              <div className="over-view-address-form">
                <div className="over-view-address-label-form">
                  <BasicFormInputLabel>
                    {translate("Billing Postal Code")}
                  </BasicFormInputLabel>
                </div>
                <BasicFormInput {...register("officePhone")} />
              </div>
              <div className="over-view-address-form">
                <div className="over-view-address-label-form">
                  <BasicFormInputLabel>
                    {translate("Billing City")}
                  </BasicFormInputLabel>
                </div>
                <BasicFormInput {...register("officePhone")} />
              </div>
              <div className="over-view-address-form">
                <div className="over-view-address-label-form">
                  <BasicFormInputLabel>
                    {translate("Billing State")}
                  </BasicFormInputLabel>
                </div>
                <BasicFormInput {...register("officePhone")} />
              </div>
              <div className="over-view-address-form">
                <div className="over-view-address-label-form">
                  <BasicFormInputLabel>
                    {translate("Billing Country")}
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
                {translate("SHIPPING ADDRESS")}:
              </BasicFormInputLabel>
              <div className="over-view-address-form">
                <div className="over-view-address-label-form">
                  <BasicFormInputLabel>
                    {translate("Shipping Street")}
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
                    {translate("Shipping Postal Code")}
                  </BasicFormInputLabel>
                </div>
                <BasicFormInput {...register("officePhone")} />
              </div>
              <div className="over-view-address-form">
                <div className="over-view-address-label-form">
                  <BasicFormInputLabel>
                    {translate("Shipping City")}
                  </BasicFormInputLabel>
                </div>
                <BasicFormInput {...register("officePhone")} />
              </div>
              <div className="over-view-address-form">
                <div className="over-view-address-label-form">
                  <BasicFormInputLabel>
                    {translate("Shipping State")}
                  </BasicFormInputLabel>
                </div>
                <BasicFormInput {...register("officePhone")} />
              </div>
              <div className="over-view-address-form">
                <div className="over-view-address-label-form">
                  <BasicFormInputLabel>
                    {translate("Shipping Country")}
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
                {translate("DESCRIPTION")}:
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
                {translate("ASSIGNED TO")}:
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
