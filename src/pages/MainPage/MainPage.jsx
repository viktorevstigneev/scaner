import { Html5Qrcode } from "html5-qrcode";
import React, { useState, useEffect } from "react";
import "./style.css";
import Content from "./Content";
import ScanerPage from "../ScanerPage";

function MainPage() {
  const [isOpenScaner, setIsOpnScaner] = useState(false);
  const [qrMessage, setQrMessage] = useState("");

  return (
    <main className="main" id="main">
      {!isOpenScaner ? (
        <Content setIsOpnScaner={setIsOpnScaner} qrMessage={qrMessage} />
      ) : (
        <ScanerPage
          isOpenScaner={isOpenScaner}
          setIsOpnScaner={setIsOpnScaner}
          qrMessage={qrMessage}
          setQrMessage={setQrMessage}
        />
      )}
    </main>
  );
}

export default MainPage;
