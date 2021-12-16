import React, { Component } from "react";
import { connect } from "react-redux";

class Search extends Component {
  handleOnchange = (event) => {
    const { value } = event.target;
    this.props.keyword(value);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control mb-3 w-50"
        onChange={this.handleOnchange}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    keyword: (key) => {
      const action = {
        type: "GET_KEYWORD",
        payload: key,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(Search);
