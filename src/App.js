import React from "react";
import Button from "./components/button/button";
import AuthorizationForm from "./components/autorizationform/autorizationform";
import UserDataPage from "./components/userdatapage/userdatapage";
import "./App.css";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <div>
                <Button btnName="sign up" link={"/sign-up"} />
                <Button btnName="sign in" link={"/sign-in"} />
              </div>
            )}
          />
          <Route exact path="/sign-in" component={AuthorizationForm} />
          <Route exact path="/sign-up" component={AuthorizationForm} />
          <Route exact path="/user-data-page" component={UserDataPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
