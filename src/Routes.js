import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/login/login";
import Dashboard from "./components/dashboard/dashboard";
import ClusterInfo from "./components/clusterinfo/clusterinfo";
import Settings from "./components/settings/settings";
import BackupInfo from "./components/backup/backupinfo"

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
      <Route path="/" exact component={Login} />
      <Route path="/login" exact component={Login} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/dashboard/settings" exact component={Settings}/>
      <Route path="/dashboard/:id" component={ClusterInfo} />
      <Route path="/backup" component={BackupInfo}/>
    </Switch>
  );
};
export default Routes;
