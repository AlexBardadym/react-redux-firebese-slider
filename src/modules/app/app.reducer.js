import { createReducer } from "redux-act";
import * as appActions from "./app.actions";

const initialState = {
  user: {
    userName: "Mike",
    password: "123"
  }
};

const reducer = {
  [appActions.changeBtnName]: state => ({
    ...state,
    inputText: "button clicked",
    inputTextStyle: {
      textDecorationLine: "line-through",
      textDecorationStyle: "solid",
      isChecked: { checked: "checked" }
    }
  })
};

export default createReducer(reducer, initialState);
