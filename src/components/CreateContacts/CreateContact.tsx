import React, {useState} from "react";
import './CreateContact.css';
import OverViewForm from "./OverViewForm";
import MoreInformationTab from "./MoreInformationTab";
import OtherFormTab from "./OtherFormTab";
import { FormTabs } from "components/forms";

type TabsType = {
    label: string;
    index: number;
    Component: React.FC<{}>;
  }[];
  
  // Tabs Array
  const tabs: TabsType = [
    {
      label: "OVERVIEW",
      index: 1,
      Component: OverViewForm
    },
    {
        label: "MORE INFORMATION",
        index: 2,
        Component: MoreInformationTab
      },
    {
        label: "OTHER",
        index: 3,
        Component: OtherFormTab
      }
  ]
  const CreateContact = () => {
    const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);
    return(
      //form page
        <div className="create-contacts-bg-container">
            <div className="contacts-top-container">
            <div>
                <h4 className="contacts-h4-heading">CONTACTS CREATE</h4>
            </div>
            <div>
                <button className="contact-save-button">Save</button>
                <button className="contact-cancel-button">Cancel</button>
            </div>
            </div>
            <hr className="contacts-hr-line"/>
            <div>
                <div className="contacts-three-button-container">
                  {/* tabs*/}
                <FormTabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
               
               
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
    )
}
export default CreateContact;
