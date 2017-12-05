import React from "react";
import {connect} from "react-redux"
class Xheader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "xheader组件"
    }
  }
  render() {
    return (
      <div style={{
        border: "1px solid red"
      }}>
        <div>{this.state.name}</div>
        <div>{this.props.name}</div>
      </div>
    )
  }
  componentDidMount() {
    let self = this;
  }
}

export default connect((state) => {
  return state
})(Xheader)
