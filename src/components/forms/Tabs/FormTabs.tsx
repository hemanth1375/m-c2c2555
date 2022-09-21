import React, { FC } from "react";

import './FormTabs.css'



type TabsProps = {
  overviewtab: {
    // label: string;
    // Component: FC<{ }>
  };
  moreInfoTab: {
    // label: string;
    // Component: FC<{ }>
  };
  otherTab: {
    // label: string;
    // Component: FC<{ }>
  };
  // selectedTab: number;
  // onClick: (index: number) => void;
  orientation?: "horizontal" | "vertical";
  className?: string;
};

/**
 * Avalible Props
 * @param className string
 * @param tab Array of object
 * @param selectedTab number
 * @param onClick Function to set the active tab
 * @param orientation Tab orientation Vertical | Horizontal
 */
const FormTabs: FC<TabsProps> = ({
  className = "tabs-component",
  orientation = "horizontal"
}) => {
  // const Panel = tabs && tabs.find((tab) => tab.index === selectedTab);

  return (
    <div
      className={
        orientation === "vertical" ? className + " vertical" : className
      }
    >
      {/* <div role="tablist" aria-orientation={orientation}>
        {tabs.map((tab) => (
          <button
            className={selectedTab === tab.index ? "active" : ""}
            onClick={() => onClick(tab.index)}
            key={tab.index}
            type="button"
            role="tab"
            aria-selected={selectedTab === tab.index}
            aria-controls={`tabpanel-${tab.index}`}
            tabIndex={selectedTab === tab.index ? 0 : -1}
            id={`btn-${tab.index}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        aria-labelledby={`btn-${selectedTab}`}
        id={`tabpanel-${selectedTab}`}
      >
        {Panel && <Panel.Component index={selectedTab} />}
      </div> */}
    </div>
  );
};
export default FormTabs;



//how to use this tab component !!!!important 
//use the below code from which component you use this component

// type TabsType = {
//     label: string;
//     index: number;
//     Component: React.FC<{}>;
//   }[];
  
//   // Tabs Array
//   const tabs: TabsType = [
//     {
//       label: "OVERVIEW",
//       index: 1,
//       Component: OverViewForm
//     },
//     {
//         label: "MORE INFORMATION",
//         index: 2,
//         Component: MoreInformationTab
//       },
//     {
//         label: "OTHER",
//         index: 3,
//         Component: OtherFormTab
//       }
//   ]

// const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);
// <FormTabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />