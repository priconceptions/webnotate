import "../css/popup.css";
import Popup from "./popup/Popup.js";
import React from "react";
import { render } from "react-dom";

render(
  <Popup />,
  window.document.getElementById("app-container")
);
