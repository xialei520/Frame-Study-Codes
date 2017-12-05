import React from "react";
import ReactDOM from "react-dom";
import Xheader from "./components/Xheader.jsx";
import {Xfooter, Xlist} from "./components/Xfooter.jsx"
ReactDOM.render(
  <div>
    <Xheader/>
    <Xfooter/>
    <Xlist/>
  </div>,
  document.getElementById("demo")
)
