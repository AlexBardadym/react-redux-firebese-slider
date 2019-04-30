import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./button.css";
import { Link } from "react-router-dom";

class Button extends Component {
  render() {
    return (
      <Link to={this.props.link}>
        <a className="waves-effect waves-light btn">{this.props.btnName}</a>
      </Link>
    );
  }
}

export default Button;
