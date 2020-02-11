import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({ email: event.target.email });
    this.setState({ password: event.target.password });
  };

  handleSubmit(event) {
    event.preventDefault();
    var loginData = {
      email: event.target.email.value,
      password: event.target.password.value
    };

    var loginDataJSON = JSON.stringify(loginData);
    console.log(loginDataJSON);
  }
  render() {
    document.getElementById("mainTitle").style.visibility = "hidden";
    document.getElementById("mainSubtitle").style.visibility = "hidden";
    return (
      <div className="loginComponent">
        <form className="form_login" onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              onChange={this.handleChange}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Log in
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
