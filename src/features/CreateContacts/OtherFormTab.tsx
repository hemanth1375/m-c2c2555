import React, { FC, Fragment } from "react";
import "./OtherFormTab.css";

const OtherFormTab: FC<{}> = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    //other information tab form
    <Fragment>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="other-infromation-form-container">
            <div className="other-form-label-container">
              <label>DATE CREATED:</label>
              <input type="text" className="other-form-input-container" />
            </div>
            <div className="other-form-label-container">
              <label>DATE MODIFIED:</label>
              <input type="text" className="other-form-input-container" />
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};
export default OtherFormTab;
