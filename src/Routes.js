import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// import { Login } from '';
// import { Dashboard } from '';
import { HelloWorld } from "./Components/HelloWorld";
const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (localStorage.getItem("token")) {
        return <Component />;
      } else {
        return <Redirect to={"/login"} />;
      }
    }}
  />
);
const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={HelloWorld} />
      {/* <Route path="/login" component={Login} /> */}
      {/* <ProtectedRoute path="/dashboard" component={Dashboard}/> */}
    </Switch>
  );
};
export default Routes;
