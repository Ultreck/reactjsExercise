import React from "react";
import CustomTabs from "./CustomTabs";

const TabTest = () => {

  const randomComponent = () => {
    return <div className="text">Some random content</div>;
  };
  const tabs = [
    {
      label: "Tab 1",
      content: <div className="text">This is content for tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div className="text">This is content for tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <randomComponent />,
    },
  ];

  const handleChange = (currentTabIndex) => {
    console.log(currentTabIndex);
  };
  return (
    <div>
      <CustomTabs tabContents={tabs} onChange={handleChange} />
      <div className="text"></div>
    </div>
  );
};

export default TabTest;
