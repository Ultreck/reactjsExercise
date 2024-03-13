import React, { useEffect, useState } from "react";

const RandomColor = () => {
  const [typeOfColor, settypeOfColor] = useState("hex");
  const [color, setcolor] = useState("#000000");

  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };
  const handleCreateRandomHexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
      setcolor(hexColor);
    }
    console.log(hexColor);
  };
  const handleCreateRandomRgbColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    
    setcolor(`rgb(${r}, ${g}, ${b})`); 
  };

  useEffect(() => {
   if(typeOfColor === 'rgb' ) handleCreateRandomRgbColor();
   else handleCreateRandomHexColor();
  }, [typeOfColor])
  
  return (
    <div>
      <div
        className={`w-full h-screen py-10 text-center`}
        style={{ backgroundColor: color }}>
        <button
          onClick={() => settypeOfColor("hex")}
          className="text-black font-bold border mx-5 px-5 py-1 bg-[#64ffda]">
          Create Hex Color
        </button>
        <button
          onClick={() => settypeOfColor("rgb")}
          className="text-black font-bold border mx-5 px-5 py-1 bg-[#64ffda]">
          Create Rgb Color
        </button>
        <button
          onClick={
            typeOfColor === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
          className="text-black font-bold border mx-5 px-5 py-1 bg-[#64ffda]">
          Generate Random Color
        </button>
        <div className="text-white font-bold ">
            <h3 className="text text-2xl mt-48">{typeOfColor === "rgb"? "RGB Color" : "HEX Color"}</h3>
            <h1 className="text text-4xl mt-4" >{color}</h1>
        </div>
      </div>
    </div>
  );
};

export default RandomColor;
