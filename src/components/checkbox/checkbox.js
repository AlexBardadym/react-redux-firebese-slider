import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import { connect } from "react-redux";
import * as appActions from "../../modules/app/app.actions";
import "./checkbox.css";

class Checkbox extends Component {
  render() {
    const { inputText, inputTextStyle, isChecked } = this.props;
    return (
      <p className="input">
        <label>
          <input type="checkbox" isChecked={isChecked} />
          <span style={inputTextStyle}>{inputText}</span>
        </label>
      </p>
    );
  }
}

function mapStateToProps({ app }) {
  return {
    inputText: app.inputText,
    inputTextStyle: app.inputTextStyle,
    isChecked: app.isChecked
  };
}

export default connect(
  mapStateToProps,
  { ...appActions }
)(Checkbox);
