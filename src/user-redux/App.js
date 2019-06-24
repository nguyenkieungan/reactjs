import React from 'react';
import { Route, Link, BrowserRouter, Redirect, HashRouter, Switch, NavLink } from 'react-router-dom';
// Container components
import UsersPage from './containers/UsersPage';
import EditUserPage from './containers/EditUserPage';
import AddUserPage from './containers/AddUserPage';
import { withRouter } from "react-router-dom";

const App = ({match}) => {
  return (
    <HashRouter>
      <div className="col-sm-9">
        <div className="user-management__header">
          <div className="d-flex main-nav justify-content-center">
            <div className="half-width"><NavLink activeClassName="selected" to={`${match.url}/users`}>User list</NavLink></div>
            <div className="half-width"><NavLink activeClassName="selected" to={`${match.url}/add`}>Add user</NavLink></div>
          </div>
        </div>

        <Route path={`${match.path}/users:pageNo?`} component={UsersPage}/>
        <Route path={`${match.path}/add`} component={AddUserPage}/>
        <Route path={`/user-redux/edit/:id`} component={EditUserPage}/>

      </div>
    </HashRouter>
  );
};

export default withRouter(
  (App)
);
