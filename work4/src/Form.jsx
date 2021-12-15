import React, { Component } from "react";

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formValues: {
        username: "",
        email: "",
        password: "",
        repeatPassword: "",
        gender: "female",
        terms: false,
      },
      errors: {},
    };
  }

  validateValues = () => {
    const { formValues } = this.state;
    const errors = {};

    if (formValues.username.trim() === "") {
      errors.username = "Name is required";
    }

    if (formValues.username.trim().length > 20) {
      errors.username = "Name should be less than 20";
    }

    if (formValues.email.trim() === "") {
      errors.email = "Email is required";
    }

    if (!emailRegex.test(formValues.email.trim())) {
      errors.email = "Email should be a correct";
    }

    if (!passwordRegex.test(formValues.password.trim())) {
      errors.password = "Password should be a correct";
    }

    if (formValues.repeatPassword !== formValues.password) {
      errors.repeatPassword = "Password should match";
    }
    if (!formValues.terms) {
      errors.terms = "Terms should be accepted";
    }

    return errors;
  };

  alertMessage = (e) => {
    e.preventDefault();
    const { formValues } = this.state;

    const errors = this.validateValues();
    if (Object.keys(errors).length) {
      this.setState({
        errors,
      });
      return;
    }

    alert(JSON.stringify(formValues));
  };

  inputChange = (e) => {
    const { formValues } = this.state;
    const { name, value } = e.target;
    this.setState({
      formValues: {
        ...formValues,
        [name]: value,
      },
    });
  };

  checkboxChange = (e) => {
    const { formValues } = this.state;
    const { name, checked } = e.target;
    this.setState({
      formValues: {
        ...formValues,
        [name]: checked,
      },
    });
  };

  render() {
    const { formValues, errors } = this.state;
    return (
      <form onSubmit={this.alertMessage}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="username"
            value={formValues.username}
            onChange={this.inputChange}
          />
        </div>
        {errors.username ? <p>{errors.username}</p> : null}
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={formValues.email}
            onChange={this.inputChange}
          />
        </div>
        {errors.email ? <p>{errors.email}</p> : null}
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={this.inputChange}
          />
        </div>
        {errors.password ? <p>{errors.password}</p> : null}
        <div>
          <label>Repeat Password</label>
          <input
            type="password"
            name="repeatPassword"
            value={formValues.repeatPassword}
            onChange={this.inputChange}
          />
        </div>
        {errors.repeatPassword ? <p>{errors.repeatPassword}</p> : null}

        <fieldset>
          <legend>Gender</legend>
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            checked={formValues.gender === "female"}
            onChange={this.inputChange}
          />
          <label htmlFor="female">female</label>
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            checked={formValues.gender === "male"}
            onChange={this.inputChange}
          />
          <label htmlFor="male">male</label>
        </fieldset>
        <input type="checkbox" name="terms" onChange={this.checkboxChange} />
        <label htmlFor="terms">terms</label>
        {errors.terms ? <p>{errors.terms}</p> : null}
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
