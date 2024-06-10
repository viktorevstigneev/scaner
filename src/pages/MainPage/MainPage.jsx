import { Html5Qrcode } from "html5-qrcode";
import React, { useState, useEffect } from "react";
import "./style.css";
import Content from "./Content";
import ScanerPage from "../ScanerPage";

function MainPage() {
  const [isEnabled, setEnabled] = useState(false);
  const [isOpenScaner, setIsOpnScaner] = useState(false);

  return (
    <main className="main" id="main">
      {!isOpenScaner ? (
        <Content setIsOpnScaner={setIsOpnScaner} />
      ) : (
        <ScanerPage isOpenScaner={isOpenScaner} setIsOpnScaner={setIsOpnScaner} />
      )}
    </main>
  );
}

export default MainPage;
