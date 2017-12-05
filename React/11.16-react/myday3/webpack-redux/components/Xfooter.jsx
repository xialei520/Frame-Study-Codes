import React from "react";
import {connect} from "react-redux";
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
  componentDidMount(){
    console.log(this);
    this.props.dispatch({type:"SETNAME", name:"xialei"})
    console.log(this.props.skill)
  }
}
export default connect((state) =>{
  return state
})(Xfooter)
