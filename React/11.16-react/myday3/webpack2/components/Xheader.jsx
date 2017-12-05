import React from "react";
import store from "../store.js"
class Xheader extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name:"Xheader组件"
    }
  }
  render(){
    return (<div style={{border:'1px solid red'}}>
      <div>{this.state.name}</div>
    </div>)
  }
  componentDidMount(){
    let self = this;

    store.subscribe(() => {
      self.setState({name:store.getState().name})
      console.log(store.getState().name)

    })
  }
}
export default Xheader
