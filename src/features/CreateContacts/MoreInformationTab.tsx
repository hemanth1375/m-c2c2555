import React, { FC, Fragment } from "react";
import { translate } from "languages";

import "./MoreInformationTab.css";

const MoreInformationTab: FC<{}> = () => {
  const cursorHandler = () => {
    console.log(44);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
  }

  return (
    //more information form tab
    <Fragment>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="more-information-form-div-container">
              <label
                htmlFor="leadSource"
                className="more-information-label-form"
              >
                LEAD SOURCE:
              </label>
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
            <div className="more-information-dotted-horizontal-line">
              <hr className="more-information-dotted-horizontal-line-bottom" />
            </div>
            <div>
              <div className="over-view-form-bottom-containers">
                <div className="left-container">
                  <label
                    htmlFor="leadSource"
                    className="more-information-label-form"
                  >
                    REPORTS TO:
                  </label>
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
                  <label
                    htmlFor="leadSource"
                    className="more-information-label-form"
                  >
                    CAMPAIGN:
                  </label>
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
