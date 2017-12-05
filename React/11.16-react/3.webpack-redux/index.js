import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux"
import store from "./store.js";

import Xheader from "./components/Xheader.jsx"
import Xfooter from "./components/Xfooter.jsx"
ReactDOM.render(
  <Provider store={store}>
  <div>
    <Xheader/>
    <Xfooter/>
  </div>
</Provider>, document.querySelector("#demo"))
