// import { FormTabs } from "components/forms";

// import OtherFormTab from "./OtherFormTab";
import OverViewForm from "./OverViewForm";
import {useState} from 'react'
import './CreateContact.css';

// type TabsType = {
//     label: string;
//     index: number;
//     Component: React.FC<{}>;
//   }[];
  
  // Tabs Array
  // const tabs: TabsType = [
  //   {
  //     label: "OVERVIEW",
  //     index: 1,
  //     Component: OverViewForm
  //   },
  //   {
  //       label: "MORE INFORMATION",
  //       index: 2,
  //       Component: MoreInformationTab
  //     },
  //   {
  //       label: "OTHER",
  //       index: 3,
  //       Component: OtherFormTab
  //     }
  // ]
  const CreateContact = () => {
  //   const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);
  //   const [disableSave, setDisableSave]=useState<boolean>(true)

  //   const settingDisableSave=(bool:boolean)=>{
  //     setDisableSave(bool)
  //   }

  const [submitStatus, setSubmitStatus]=useState(true)
    
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
            {/* <div className="contacts-white-form"> */}
                {/* <div className="contacts-three-button-container"> */}
                  {/* tabs*/}
                {/* <FormTabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} /> */}
                <div>
                  <OverViewForm setSubmitStatus={setSubmitStatus}/>
                  {/* <MoreInformationTab /> */}
                  {/* <OtherFormTab/> */}
                </div>
                </div>
            // </div>
        // </div>
    )
}
export default CreateContact;
