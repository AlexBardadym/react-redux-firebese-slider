import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import { Link } from "react-router-dom";

class UserDataPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m12">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Mike Page</span>
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div className="card-action">
                <Link to={"./"}>
                  <a href="#">Back</a>
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
