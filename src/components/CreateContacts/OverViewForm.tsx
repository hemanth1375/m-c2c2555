import React, { FC, useState, useRef } from "react";
import { useForm, Resolver } from "react-hook-form";
import "./OverViewForm.css";

type FormValues = {
  firstName: string;
  lastName: string;
  officePhone: number;
  mobile: number;
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
  const [selectedOption, setSelectedOption] = useState<String>();
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [value, setValue] = useState<String>();
  // This function is triggered when the select changes
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
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

  return (
    <div className="App">
      <form onSubmit={onSubmit} className="overview-form">
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
                >
                  <option selected disabled>
                    Select an item
                  </option>
                  <option value="mr">Mr.</option>
                  <option value="ms">Ms.</option>
                  <option value="mrs">Mrs.</option>
                  <option value="miss">Miss.</option>
                  <option value="dr">Dr.</option>
                  <option value="pro">Pro.</option>
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
        </div>

        {/* second line form detailes */}

        <div className="over-view-form-bottom-containers">
          <div className="left-container">
            <div>
              <label className="overview-label-form-bottom">OFFICE PHONE:</label>
              <input
                {...register("officePhone")}
                className="overview-input-form-bottom"
              />
            </div>
            <div className="dotted-horizontal-line-container">
              <hr className="dotted-horizontal-line-bottom" />
            </div>
          </div>
          <div className="right-container">
            <div>
              <label className="overview-label-form-bottom">MOBILE:</label>
              <input
                {...register("mobile")}
                className="overview-input-form-bottom"
              />
            </div>

            <div className="dotted-horizontal-line-container-bottom">
              <hr className="dotted-horizontal-line-bottom" />
            </div>
          </div>
        </div>
        <div className="over-view-form-bottom-containers">
          <div className="left-container">
            <div>
              <label className="overview-label-form-bottom">JOB TITLE:</label>
              <input
                {...register("officePhone")}
                className="overview-input-form-bottom"
              />
            </div>
            <div className="dotted-horizontal-line-container">
              <hr className="dotted-horizontal-line-bottom" />
            </div>
          </div>
          <div className="right-container">
            <div>
              <label className="overview-label-form-bottom">DEPARTMENT:</label>
              <input
                {...register("mobile")}
                className="overview-input-form-bottom"
              />
            </div>

            <div className="dotted-horizontal-line-container-bottom">
              <hr className="dotted-horizontal-line-bottom" />
            </div>
          </div>
        </div>
        <div className="over-view-form-bottom-containers">
          <div className="left-container">
            <div>
              <label className="overview-label-form-bottom">ACCOUNT NAME:</label>
              <input
                {...register("officePhone")}
                className="overview-input-form-bottom account-name"
              />
            </div>
            <div className="dotted-horizontal-line-container">
              <hr className="dotted-horizontal-line-bottom" />
            </div>
          </div>

          <div className="right-container">
            <div>
              <label className="overview-label-form-bottom">FAX:</label>
              <input
                {...register("mobile")}
                className="overview-input-form-bottom"
              />
            </div>

            <div className="dotted-horizontal-line-container-bottom">
              <hr className="dotted-horizontal-line-bottom" />
            </div>
          </div>
        </div>
        <div>
        <div className="right-container">
            <div>
              <h3 className="overview-label-form-bottom">EMAIL ADDRESS:</h3>
              <div className="overview-form-email">
              <label>Email Address</label>
              </div>
              <input
                {...register("mobile")}
                className="overview-input-form-bottom"
              />
            </div>

            <div className="dotted-horizontal-line-container-bottom">
              <hr className="dotted-horizontal-line-bottom" />
            </div>
          </div>
        </div>
        <div className="over-view-form-bottom-containers">
          <div className="left-container">
            <div>
              <h1 className="overview-label-form-bottom">PRIMARY ADDRESS:</h1>
              <div className="over-view-address-form">
              <div className="over-view-address-label-form">
                <label>Primary Address Street</label>
               </div> 
                <input
                {...register("officePhone")}
                className="overview-input-form-bottom"
              />
              </div>
              <div className="over-view-address-form">
              <div className="over-view-address-label-form">
                <label>Primary Address Postal Code</label>
                </div>
                <input
                {...register("officePhone")}
                className="overview-input-form-bottom"
              />
              </div>
              <div className="over-view-address-form">
              <div className="over-view-address-label-form">
                <label>Primary Address City</label>
                </div>
                <input
                {...register("officePhone")}
                className="overview-input-form-bottom"
              />
              </div>
              <div className="over-view-address-form">
              <div className="over-view-address-label-form">
                <label>Primary Address State</label>
                </div>
                <input
                {...register("officePhone")}
                className="overview-input-form-bottom"
              />
              </div>
              <div className="over-view-address-form">
              <div className="over-view-address-label-form">
                <label>Primary Address Country</label>
                </div>
                <input
                {...register("officePhone")}
                className="overview-input-form-bottom"
              />
              </div>

            </div>
            <div className="dotted-horizontal-line-container">
              <hr className="dotted-horizontal-line-bottom" />
            </div>
          </div>

          <div className="right-container">
            <div>
              <h1 className="overview-label-form-bottom">OTHER ADDRESS:</h1>
              <div className="over-view-address-form">
              <div className="over-view-address-label-form">
                <label>Alternate Address Street</label>
                </div>
                <input
                {...register("officePhone")}
                className="overview-input-form-bottom"
              />
              </div>
              <div className="over-view-address-form">
              <div className="over-view-address-label-form">
                <label>Alternate Address Postal Code</label>
               </div> 
                <input
                {...register("officePhone")}
                className="overview-input-form-bottom"
              />
           
              </div>
              <div className="over-view-address-form">
                <div className="over-view-address-label-form">
                <label>Alternate Address City</label>
                </div>
                <input
                {...register("officePhone")}
                className="overview-input-form-bottom"
              />
              </div>
              <div className="over-view-address-form">
              <div className="over-view-address-label-form">
                <label>Alternate Address State</label>
                </div>
                <input
                {...register("officePhone")}
                className="overview-input-form-bottom"
              />
              </div>
              <div className="over-view-address-form">
                <div className="over-view-address-label-form">
                <label>Alternate Address Country</label>
                </div>
                <input
                {...register("officePhone")}
                className="overview-input-form-bottom"
              />
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
              <label className="overview-label-form-bottom">DESCRIPTION:</label>
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
              <label className="overview-label-form-bottom">ASSIGNED TO:</label>
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
