import React, { useState } from "react";

const CustomTabs = ({ tabContents, onChange }) => {
  const [currentTabIndex, setcurrentTabIndex] = useState(0);
  const handleOnClick = (currentIndex) => {
    setcurrentTabIndex(currentIndex);
    onChange(currentIndex);
  };
  return (
    <div>
      <div className="text">
        {tabContents?.map((tabItem, index) => (
          <div
            onClick={() => handleOnClick(index)}
            className="text"
            key={tabItem?.label}>
            <span className="text">{tabItem?.label}</span>
          </div>
        ))}
      </div>
      <div className="text">
        {tabContents[currentTabIndex] && tabContents[currentTabIndex]?.content}
      </div>
    </div>
  );
};

export default CustomTabs;
