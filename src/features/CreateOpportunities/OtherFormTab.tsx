import React, { FC, Fragment } from "react";
import { BasicFormInput, BasicFormInputLabel } from "components/forms";
import { translate } from "languages";
import "./OtherFormTab.css";

const OtherFormTab: FC<{}> = () => {
  return (
    //other information tab form
    <Fragment>
      <div>
        <form>
          <div className="other-infromation-form-container">
            <div className="other-form-label-container">
              <BasicFormInputLabel>
                {translate("DATE CREATED")}:
              </BasicFormInputLabel>
              <input type="text" className="other-form-input-container" />
            </div>
            <div className="other-form-label-container">
              <BasicFormInputLabel>
                {translate("DATE MODIFIED")}:
              </BasicFormInputLabel>
              <input type="text" className="other-form-input-container" />
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};
export default OtherFormTab;
