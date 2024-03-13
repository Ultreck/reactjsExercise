import React, { useState } from "react";
import Data from "./Data";

const Accordian = () => {
  const [selected, setselected] = useState(null);
  const [enableMultiSelection, setenableMultiSelection] = useState(false);
  const [multipleSelected, setmultipleSelected] = useState([]);

  const handleSingleSelection = (e) => {
    console.log(e);
    setselected(e === selected ? null : e);
  };

  const handleMultiSelection = (e) => {
    let copyMultiple = [...multipleSelected];
    const findCurrentIndex = copyMultiple.indexOf(e);
    if (findCurrentIndex === -1) {
      copyMultiple.push(e);
    } else {
      copyMultiple.splice(findCurrentIndex, 1);
    }

    setmultipleSelected(copyMultiple);
  };
  console.log(multipleSelected);

  return (
    <div className="flex justify-center items-center">
      <div className="text w-1/2 ">
        <div
          className="text-white bg-[#614101]"
          onClick={() => setenableMultiSelection(!enableMultiSelection)}>
          Enable Multiple Selection
        </div>
        {Data && Data.length > 0 ? (
          Data.map((dataItems) => (
            <div key={dataItems?.answer} className="text-white bg-[#614101] my-5 cursor-pointer px-10">
              <div
                className="text flex justify-between "
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItems?.id)
                    : () => handleSingleSelection(dataItems?.id)
                }>
                <h3 className="text-lg font-bold">{dataItems.question}</h3>
                <span className="text">+</span>
              </div>
              {enableMultiSelection
                ? multipleSelected.indexOf(dataItems?.id) !== -1 && (
                    <div className="text">{dataItems?.answer}</div>
                  )
                : selected === dataItems?.id && (
                    <div className="text">{dataItems?.answer}</div>
                  )}
              {/* {selected === dataItems?.id ? (
                <div className="text">{dataItems?.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div className="text">No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
