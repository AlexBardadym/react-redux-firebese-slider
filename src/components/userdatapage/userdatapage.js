import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import { Link } from "react-router-dom";
import firebase from "../firebase";

class UserDataPage extends Component {
  state = {
    currentUser: localStorage.getItem("currentUser")
  };

  signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log("log out"))
      .catch(error => console.log(error));
    localStorage.setItem("logIn", "false");
    localStorage.setItem("currentUser", "");
  };

  reRender = () => {
    setTimeout(() => {
      this.setState({
        currentUser: localStorage.getItem("currentUser")
      });
    }, 0);
  };

  render() {
    return (
      <div className="container">
        {this.reRender()}
        <div className="row">
          <div className="col s12 m12">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{this.state.currentUser}</span>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </p>
              </div>
              <div className="card-action">
                <Link to={"./"}>
                  <a href="#" onClick={this.signOut}>
                    log out
                  </a>
                </Link>
                <Link to={"./slider"}>
                  <a href="#">go to slider</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserDataPage;
