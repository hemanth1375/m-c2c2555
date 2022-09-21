import React, { FC, Fragment } from "react";
import { BasicFormInput, BasicFormInputLabel } from "components/forms";
import { translate } from "languages";

import "./MoreInformationTab.css";

const MoreInformationTab: FC<{}> = () => {
  const cursorHandler = () => {
    console.log(44);
  };

  return (
    //more information form tab
    <Fragment>
      <div>
        <div>
          <form>
            <div>
              <div className="over-view-form-bottom-containers">
                <div className="left-container">
                  <BasicFormInputLabel htmlFor="leadSource" bold>
                    {translate("TYPE")}:
                  </BasicFormInputLabel>
                  <input
                    type="text"
                    id="leadSource"
                    placeholder="Select an item..."
                    onClick={cursorHandler}
                  />
                  <hr
                    className="more-infromation-horizontal-line"
                    onClick={cursorHandler}
                  />
                </div>
                <div className="more-information-dotted-horizntal-line">
                  <div className="more-information-dotted-horizntal-line-bottom">
                    <hr />
                  </div>
                </div>
                <div className="right-container">
                  <BasicFormInputLabel htmlFor="leadSource" bold>
                    {translate("INDUSTRY")}:
                  </BasicFormInputLabel>
                  <input
                    type="text"
                    id="leadSource"
                    placeholder="Select an item..."
                    onClick={cursorHandler}
                  />
                  <hr
                    className="more-infromation-horizontal-line"
                    onClick={cursorHandler}
                  />
                </div>
              </div>
            </div>
            <div className="more-information-dotted-horizntal-line">
              <div className="more-information-dotted-horizntal-line-bottom"></div>
            </div>
            <div>
              <div className="over-view-form-bottom-containers">
                <div className="left-container">
                  <BasicFormInputLabel htmlFor="leadSource" bold>
                    {translate("ANNUAL REVENUE")}:
                  </BasicFormInputLabel>
                  <input
                    type="text"
                    id="leadSource"
                    placeholder="Select an item..."
                    onClick={cursorHandler}
                  />
                  <hr
                    className="more-infromation-horizontal-line"
                    onClick={cursorHandler}
                  />
                </div>
                <div className="right-container">
                  <BasicFormInputLabel htmlFor="leadSource" bold>
                    {translate("EMPLOYEES")}:
                  </BasicFormInputLabel>
                  <input
                    type="text"
                    id="leadSource"
                    placeholder="Select an item..."
                    onClick={cursorHandler}
                  />
                  <hr
                    className="more-infromation-horizontal-line"
                    onClick={cursorHandler}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="over-view-form-bottom-containers">
                <div className="left-container">
                  <BasicFormInputLabel htmlFor="leadSource" bold>
                    {translate("MEMBER OF")}:
                  </BasicFormInputLabel>
                  <input
                    type="text"
                    id="leadSource"
                    placeholder="Select an item..."
                    onClick={cursorHandler}
                  />
                  <hr
                    className="more-infromation-horizontal-line"
                    onClick={cursorHandler}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="over-view-form-bottom-containers">
                <div className="left-container">
                  <BasicFormInputLabel htmlFor="leadSource" bold>
                    {translate("CAMPAIGN")}
                  </BasicFormInputLabel>
                  <input
                    type="text"
                    id="leadSource"
                    placeholder="Select an item..."
                    onClick={cursorHandler}
                  />
                  <hr
                    className="more-infromation-horizontal-line"
                    onClick={cursorHandler}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default MoreInformationTab;
