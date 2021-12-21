import React, { Component } from "react";

export default class FormValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        manv: "",
        tennv: "",
        email: "",
      },
      errors: {
        manv: "",
        tennv: "",
        email: "",
      },
      formValid: false,
      manvValid: false,
      tennvValid: false,
      emailValid: false,
    };
  }

  handleOnchange = (event) => {
    const { name, value } = event.target;
    this.setState({
      values: { ...this.state.values, [name]: value },
    });
  };

  handleErrors = (event) => {
    const { name, value } = event.target;
    // dk ? "DK dung" : "DK sai"
    let mess = value.trim() === "" ? "Vui lòng nhập " + name : "";
    let { manvValid, tennvValid, emailValid } = this.state;

    switch (name) {
      case "manv":
        manvValid = mess === "" ? true : false;
        if (value && value.length <= 4) {
          manvValid = false;
          mess = "Do dai ky tu phai tu 5 tro len";
        }
        break;

      case "tennv":
        tennvValid = mess === "" ? true : false;
        break;

      case "email":
        emailValid = mess === "" ? true : false;
        if (value && !value.match("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$")) {
          emailValid = false;
          mess = "Email k hop le";
        }
        break;

      default:
        break;
    }

    this.setState(
      {
        errors: { ...this.state.errors, [name]: mess },
        manvValid,
        tennvValid,
        emailValid,
        formValid: manvValid && tennvValid && emailValid,
      },
      () => {
        // this.handleFormValid();
      }
    );
  };

  //   handleFormValid = () => {
  //     const { manvValid, tennvValid, emailValid } = this.state;
  //     this.setState({
  //       formValid: manvValid && tennvValid && emailValid,
  //     });
  //   };

  render() {
    return (
      <div className="container">
        <h3 className="title">*FormValidation</h3>
        <form>
          <div className="form-group">
            <label>Mã nhân viên</label>
            <input
              type="text"
              className="form-control"
              name="manv"
              onChange={this.handleOnchange}
              onBlur={this.handleErrors}
            />
            {this.state.errors.manv && (
              <div className="alert alert-danger">{this.state.errors.manv}</div>
            )}
          </div>
          <div className="form-group">
            <label>Tên nhân viên</label>
            <input
              type="text"
              className="form-control"
              name="tennv"
              onChange={this.handleOnchange}
              onBlur={this.handleErrors}
            />
            {this.state.errors.tennv && (
              <div className="alert alert-danger">
                {this.state.errors.tennv}
              </div>
            )}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={this.handleOnchange}
              onBlur={this.handleErrors}
            />
            {this.state.errors.email && (
              <div className="alert alert-danger">
                {this.state.errors.email}
              </div>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-success"
            disabled={!this.state.formValid}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
