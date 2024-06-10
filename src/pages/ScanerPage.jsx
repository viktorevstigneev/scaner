import { Html5Qrcode } from "html5-qrcode";
import React, { useState, useEffect } from "react";
import "./../App.css";

function ScanerPage({ isOpenScaner, setIsOpnScaner, setQrMessage, qrMessage }) {
  useEffect(() => {
    const config = { fps: 10, qrbox: { width: 300, height: 300 } };

    const html5QrCode = new Html5Qrcode("qrCodeContainer");

    const qrScanerStop = () => {
      if (html5QrCode && html5QrCode.isScanning) {
        html5QrCode
          .stop()
          .then((ignore) => console.log("Scaner stop"))
          .catch((err) => console.log("Scaner error"));
      }
    };

    const qrCodeSuccess = (decodedText) => {
      setQrMessage(decodedText);
      setIsOpnScaner(false);
    };

    if (isOpenScaner) {
      html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccess);
      setQrMessage("");
    } else {
      qrScanerStop();
    }

    return () => {
      qrScanerStop();
    };
  }, [isOpenScaner]);

  return (
    <div className="scaner">
      <div id="qrCodeContainer" />
      {qrMessage && <div className="qr-message">{qrMessage}</div>}
      <button
        className="start-button"
        onClick={() => setIsOpnScaner(!isOpenScaner)}
      >
        {isOpenScaner ? "On" : "Off"}
      </button>
    </div>
  );
}

export default ScanerPage;
