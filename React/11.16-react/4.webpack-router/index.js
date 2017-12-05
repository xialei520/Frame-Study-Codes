import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux"
import store from "./store.js";
import {HashRouter, Route, Link} from 'react-router-dom'
import Xheader from "./components/Xheader.jsx"
import Xfooter from "./components/Xfooter.jsx"
ReactDOM.render(
  <HashRouter>
  <Provider store={store}>
    <div>
      <ul>
        <li>
          <Link to="/">Xheader</Link>
        </li>
        <li>
          <Link to="/header">Xheader</Link>
        </li>
        <li>
          <Link to="/footer">Xfooter</Link>
        </li>
      </ul>
      <Route exact path="/" component={Xheader}/>
      <Route path="/header" component={Xheader}/>
      <Route path="/footer" component={Xfooter}/>
    </div>
  </Provider>
</HashRouter>, document.querySelector("#demo"))
