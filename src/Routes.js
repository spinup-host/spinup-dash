import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from './components/login/login';
import Dashboard from "./components/dashboard/dashboard";
import { HelloWorld } from "./components/HelloWorld";


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
      <Route path="/" exact component={HelloWorld} />
      <Route path="/login" exact component={Login} />
      <Route path="/dashboard" exact component={Dashboard} />
      {/* <ProtectedRoute path="/dashboard" component={Dashboard}/> */}
    </Switch>
  );
};
export default Routes;
