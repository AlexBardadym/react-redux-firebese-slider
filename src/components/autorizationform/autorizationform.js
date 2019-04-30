import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import { connect } from "react-redux";
import * as appActions from "../../modules/app/app.actions";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";

class AuthorizationForm extends Component {
  state = {
    redirect: false
  };

  addUser = () => {
    const userNameInput = document.getElementById("userNameInput");
    const password = document.getElementById("password");
    this.setState({
      redirect: true
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/user-data-page" />;
    } else {
      return (
        <div className="container">
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col xl6">
                  <input id="emailInput" type="email" className="validate" />
                  <label htmlFor="emailInput">E-mail</label>
                </div>
                <div className="input-field col xl6">
                  <input id="password" type="password" className="validate" />
                  <label htmlFor="password">Password</label>
                </div>
              </div>
            </form>
          </div>
          <a className="waves-effect waves-light btn" onClick={this.addUser}>
            ok
          </a>
          <Link to={"./"}>
            <a className="waves-effect waves-light btn">Back</a>
          </Link>
        </div>
      );
    }
  }
}

function mapStateToProps({ app }) {
  return {
    user: app.user
  };
}

export default connect(
  mapStateToProps,
  { ...appActions }
)(AuthorizationForm);
