import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import { connect } from "react-redux";
import * as appActions from "../../modules/app/app.actions";
import { Redirect } from "react-router";
import firebase from "../firebase";

class AuthorizationForm extends Component {
  state = {
    redirect: false
  };

  componentWillMount() {
    if (localStorage.getItem("logIn") === "true") {
      this.setState({
        redirect: true
      });
    }
  }

  signInUser = () => {
    const emailInput = document.getElementById("emailInput");
    const passwordInput = document.getElementById("password");

    firebase
      .auth()
      .signInWithEmailAndPassword(emailInput.value, passwordInput.value)
      .catch(error => console.log(error));

    //<<<< this is observer
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        localStorage.setItem("logIn", "true");
        this.setState({
          redirect: true
        });

        localStorage.setItem("currentUser", `${user.email}`);
      }
    });
  };

  createUser = () => {
    const emailInput = document.getElementById("emailInput");
    const passwordInput = document.getElementById("password");

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
      .catch(error => console.log(error));

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        localStorage.setItem("logIn", "true");
        this.setState({
          redirect: true
        });
        localStorage.setItem("currentUser", `${user.email}`);
      }
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/user-data-page" />;
    } else {
      return (
        <div className="valign-wrapper row login-box">
          <div className="col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4 #e8eaf6 indigo lighten-5">
            <form>
              <div className="card-content">
                <span className="card-title">Enter e-mail and password</span>
                <div className="row">
                  <div className="input-field col s12">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      className="validate"
                      name="email"
                      id="emailInput"
                    />
                  </div>
                  <div className="input-field col s12">
                    <label htmlFor="password">Password </label>
                    <input
                      type="password"
                      className="validate"
                      name="password"
                      id="password"
                    />
                  </div>
                </div>
              </div>
              <div className="card-action center-align">
                <a
                  className="waves-effect waves-light btn #5c6bc0 indigo lighten-1"
                  onClick={this.signInUser}
                >
                  sign in
                </a>
                <input
                  type="reset"
                  id="reset"
                  className="btn #5c6bc0 indigo lighten-4 waves-effect waves-light"
                  value="Clear"
                />
                <a
                  className="waves-effect waves-light btn #5c6bc0 indigo lighten-1"
                  onClick={this.createUser}
                >
                  sign up
                </a>
              </div>
            </form>
          </div>
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
