import React, { Component } from "react";
import PureChild from "./pure-child";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
    console.log("constructor - chạy 1 lần duy nhất");
  }

  UNSAFE_componentWillMount() {
    console.log("componentWillMount - chạy 1 lần duy nhất");
  }

  componentDidMount() {
    /**
     * call api
     */
    console.log("componentDidMount - chạy 1 lần duy nhất");
  }

  UNSAFE_componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log("shouldComponentUpdate", nextProps,nextState);
    if(nextState.number === 2){
      return false
    }

    return true;
  }

  render() {
    console.log("render");
    return (
      <div>
        <h3>*LifeCycle</h3>
        <h1>Number: {this.state.number}</h1>
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
            });
          }}
        >
          Click
        </button>
        <hr />
        <PureChild />
      </div>
    );
  }
}
