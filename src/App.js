import React from "react";
import Button from "./components/button/button";
import AuthorizationForm from "./components/autorizationform/autorizationform";
import UserDataPage from "./components/userdatapage/userdatapage";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import SimpleSlider from "./components/userslider/userslider";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Switch>
          <Route exact path="/" component={AuthorizationForm} />
          <Route exact path="/user-data-page" component={UserDataPage} />
          <Route exact path="/slider" component={SimpleSlider} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
