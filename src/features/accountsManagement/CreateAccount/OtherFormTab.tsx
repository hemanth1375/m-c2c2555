import React, { FC, Fragment } from "react";
import { BasicFormInputLabel } from "components/forms";
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
                {translate("dateCreated")}:
              </BasicFormInputLabel>
              <input type="text" className="other-form-input-container" />
            </div>
            <div className="other-form-label-container">
              <BasicFormInputLabel>
                {translate("dateModified")}:
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
