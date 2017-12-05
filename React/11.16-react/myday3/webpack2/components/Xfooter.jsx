import React from "react";
import store from "../store.js";
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
      </div>
    )
  }
}

class Xlist extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name:"Xlist组件"
    }
  }
  getInputValue(e){
    store.dispatch({type:"SETNAME", name:e.target.value})
  }
  render(){
    return (<div style={{border:"1px solid orange"}}>
      <input onChange={this.getInputValue.bind(this)}/>
      <div>{this.state.name}</div>
    </div>)
  }
  componentDidMount(){
    console.log(store.getState())
  }
}
export {Xfooter, Xlist}
