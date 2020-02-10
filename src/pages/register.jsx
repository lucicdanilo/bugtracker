import React from "react";

class Register extends React.Component {
  render() {
    return (
      <div className="registerComponent">
        <form className="form_register">
          <div className="form-group">
            <div class="row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                />
              </div>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputUsername" class="col-sm-2 col-form-label">
              Username
            </label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="inputUsername" />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail" class="col-sm-2 col-form-label">
              Email
            </label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="inputEmail" />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Password
            </label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPassword" />
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
