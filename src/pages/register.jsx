import React from "react";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleChange = event => {
    this.setState({ firstName: event.target.firstName });
    this.setState({ lastName: event.target.lastName });
    this.setState({ username: event.target.username });
    this.setState({ email: event.target.email });
    this.setState({ password: event.target.password });
    this.setState({ confirmPassword: event.target.confirmPassword });
  };

  handleSubmit(event) {
    event.preventDefault();
    var registerData = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
      confirmPassword: event.target.confirmPassword.value
    };

    var registerDataJSON = JSON.stringify(registerData);
    console.log(registerDataJSON);

    if (registerData.password === registerData.confirmPassword) {
      console.log("isto");
    } else {
      console.log("nije isto");
    }
  }
  render() {
    document.getElementById("mainTitle").style.visibility = "hidden";
    document.getElementById("mainSubtitle").style.visibility = "hidden";
    return (
      <div className="registerComponent">
        <form className="form_register" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div class="row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                  name="firstName"
                  onChange={this.handleChange}
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                  name="lastName"
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputUsername" class="col-sm-2 col-form-label">
              Username
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputUsername"
                name="username"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail" class="col-sm-2 col-form-label">
              Email
            </label>
            <div class="col-sm-10">
              <input
                type="email"
                class="form-control"
                id="inputEmail"
                name="email"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Password
            </label>
            <div class="col-sm-10">
              <input
                type="password"
                class="form-control"
                id="inputPassword"
                name="password"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPasswordConfirm" class="col-sm-2 col-form-label">
              Confirm password
            </label>
            <div class="col-sm-10">
              <input
                type="password"
                class="form-control"
                id="inputPasswordConfirm"
                name="confirmPassword"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
