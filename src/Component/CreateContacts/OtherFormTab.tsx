import React, { FC, Fragment, useState } from "react";
import "./OtherFormTab.css";

const OtherFormTab: FC<{}> = () => {
  return (
    <Fragment>
      <div>
        <form>
          <div className="other-infromation-form-container">
            <div className="other-form-label-container">
              <label>DATE CREATED:</label>
              <input type="text" className="other-form-input-container"/>
            </div>
            <div className="other-form-label-container">
              <label>DATE MODIFIED:</label>
              <input type="text" className="other-form-input-container"/>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};
export default OtherFormTab;
