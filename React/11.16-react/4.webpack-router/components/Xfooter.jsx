import React from "react";
import {connect} from "react-redux";
import {Route, Link} from 'react-router-dom'
import Acp from "./Child/Acp.jsx";
import Bcp from "./Child/Bcp.jsx";

class Xfooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "xfooter组件"
    }
    //this.getInputValue = this.getInputValue.bind(this)
  }
  getInputValue(e) {
    this.props.dispatch({type: "SETNAME", name: e.target.value})
  }
  render() {
    return (
      <div style={{
        border: "1px solid green"
      }}>
        <input onChange={this.getInputValue.bind(this)}/>
        <div>{this.state.name}</div>
        <div>{this.props.interest[1]}</div>
        <div>{this.props.name}</div>
        <ul>
          <li>
            <Link to="/footer/a">footer/a</Link>
          </li>
          <li>
            <Link to="/footer/b">footer/b</Link>
          </li>
        </ul>
        <Route path="/footer/a" component={Acp}/>
        <Route path="/footer/b" component={Bcp}/>
      </div>
    )
  }
  componentDidMount() {
    this.props.dispatch({type: "SETNAME", name: "gz"})
    console.log(this)
    //console.log(store.getState())
  }
}
//连接store,把redux里面的state挂载到props上
// store.subscribe和store.getState
export default connect((state) => {
  return state
})(Xfooter);
