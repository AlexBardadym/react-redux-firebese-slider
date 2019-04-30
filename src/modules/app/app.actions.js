import { createAction, dispatch } from "redux-act";

export const changeBtnName = createAction("change button name");

export const makeAnotherName = () => dispatch => {
  dispatch(changeBtnName());
};
