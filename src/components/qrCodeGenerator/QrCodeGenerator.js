import React, { useState } from "react";
import QRCode from "react-qr-code";

const QrCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleGenerateQrCode = () => {
    setQrCode(input);
    setInput('');
  };
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="text">
        <h1 className="text">QR Code Generator</h1>
        <div className="text">
          <input
            type="text"
            name="qr-code"
            placeholder="Enter your value here"
            className="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button
            disabled={input.trim() !== "" ? false : true}
            className="text"
            onClick={handleGenerateQrCode}>
            Generate
          </button>
        </div>
        <div className="text">
            <QRCode id="qr-code-value" value={qrCode} size={300} bgColor="#fff"/>
        </div>
      </div>
    </div>
  );
};

export default QrCodeGenerator;
