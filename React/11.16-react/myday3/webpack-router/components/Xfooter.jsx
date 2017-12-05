import React from "react";
import {connect} from "react-redux";
import {Route, Link} from "react-router-dom";

import Acp from "./child/Acp.jsx";
import Bcp from "./child/Bcp.jsx";

class Xfooter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name:"Xfooter组件"
    }
  }
  getInputValue(e){
    store.dispatch({type:"SETNAME", name:e.target.value})
  }
  render(){
    return (
      <div style={{border:"1px solid black"}}>
        <input onChange={this.getInputValue.bind(this)}/>
        <div>{this.state.name}</div>
        <ul>
          <li><Link to="/footer/a">footer/a</Link></li>
          <li><Link to="/footer/b">footer/b</Link></li>
        </ul>
        <Route path="/footer/a" component={Acp}/>
        <Route path="/footer/b" component={Bcp}/>
      </div>
    )
  }
  componentDidMount(){
    console.log(this);
    this.props.dispatch({type:"SETNAME", name:"xialei"})
    console.log(this.props.skill)
  }
}
export default connect((state) =>{
  return state
})(Xfooter)
