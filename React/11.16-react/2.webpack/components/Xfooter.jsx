import React from "react";
import store from "../store.js";
class Xfooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "xfooter组件"
    }
    //this.getInputValue = this.getInputValue.bind(this)
  }
  getInputValue(e) {
    //console.log(this)
    //this.setState({name: e.target.value})
    store.dispatch({type: "SETNAME", name: e.target.value})
  }
  render() {
    return (
      <div style={{
        border: "1px solid green"
      }}>
        <input onChange={this.getInputValue.bind(this)}/>
        <div>{this.state.name}</div>
      </div>
    )
  }
  componentDidMount() {
    //console.log(store.getState())
  }
}

class Xlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "xlist组件"
    }
    //this.getInputValue = this.getInputValue.bind(this)
  }
  getInputValue(e) {
    //console.log(this)
    //this.setState({name: e.target.value})
    store.dispatch({type: "SETNAME", name: e.target.value})
  }
  render() {
    return (
      <div style={{
        border: "1px solid green"
      }}>
        <input onChange={this.getInputValue.bind(this)}/>
        <div>{this.state.name}</div>
      </div>
    )
  }
  componentDidMount() {
    //console.log(store.getState())
  }
}

export {Xfooter, Xlist}
