import React, { useState } from "react";
import "./CreateAccount.css";
import OverViewForm from "./OverViewForm";
import MoreInformationTab from "./MoreInformationTab";
import Other from "./OtherFormTab";
import { translate } from "languages";
import { FormTabs } from "components/forms";

const overview = translate("overView");
console.log(typeof overview);
const moreInformation = translate("moreInformation");
const other = translate("other");

type TabsType = {
  label: any;
  index: number;
  Component: React.FC<{}>;
}[];

// Tabs Array
const tabs: TabsType = [
  {
    label: overview,
    index: 1,
    Component: OverViewForm,
  },
  {
    label: moreInformation,
    index: 2,
    Component: MoreInformationTab,
  },
  {
    label: other,
    index: 3,
    Component: Other,
  },
];

const overViewTab: TabsType = [
  {
    label: overview,
    index: 1,
    Component: OverViewForm,
  },
];
const moreInfoTab: TabsType = [
  {
    label: moreInformation,
    index: 2,
    Component: MoreInformationTab,
  },
];
const otherTab: TabsType = [
  {
    label: other,
    index: 3,
    Component: Other,
  },
];
const CreateAccount = () => {
  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);
  return (
    //form page
    <div className="create-contacts-bg-container">
      <div className="contacts-top-container">
        <div>
          <h4 className="contacts-h4-heading">
            {translate("accounts")} {translate("create")}
          </h4>
        </div>
        <div>
          <button className="contact-save-button">{translate("save")}</button>
          <button className="contact-cancel-button">
            {translate("cancel")}
          </button>
        </div>
      </div>
      <hr className="contacts-hr-line" />
      <div>
        <div className="contacts-three-button-container">
          {/* tabs*/}
          <FormTabs
            selectedTab={selectedTab}
            onClick={setSelectedTab}
            tabs={tabs}
          />

          {/* {
    label: "Tab Two",
    index: 2,
    Component: TabTwo
  },
  {
    label: "Tab Three",
    index: 3,
    Component: TabThree
  } */}
          {/* <button className="">OVERVIEW</button>
                    <button>MORE INFORMATION</button>
                    <button>OTHER</button> */}
        </div>
      </div>
    </div>
  );
};
export default CreateAccount;
