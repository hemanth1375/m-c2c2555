import React, {useState} from "react";
import './CreateOpportunities.css';
import OverViewForm from "./BasicForm";
import OtherFormTab from "./OtherFormTab";
import { FormTabs } from "components/forms";
import BasicForm from './BasicForm';
type TabsType = {
    label: string;
    index: number;
    Component: React.FC<{}>;
  }[];
  
  // Tabs Array
  const tabs: TabsType = [
    {
      label: "BASIC",
      index: 1,
      Component: BasicForm
    },
    {
        label: "OTHER",
        index: 2,
        Component: OtherFormTab
      }
  ]
  const CreateOpportunity = () => {
    const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);
    return(
      //form page
        <div className="create-contacts-bg-container">
            <div className="contacts-top-container">
            <div>
                <h4 className="contacts-h4-heading">CREATE OPPORTUNITIES</h4>
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
               
               
                </div>
            </div>
        </div>
    )
}
export default CreateOpportunity;
