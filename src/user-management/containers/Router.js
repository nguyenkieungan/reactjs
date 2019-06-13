import React, { Component } from 'react';
import { Route, Link, BrowserRouter, Redirect, HashRouter, Switch, NavLink } from 'react-router-dom';
import CreateUser from '../components/createUser';
import EditUser from '../components/editUser';
import UserList from '../components/todo_list';
import { withRouter } from "react-router-dom";

const AppRouter = ({match}) => {

  return (
    <HashRouter>
      <div className="App col-sm-9">
          <div className="App-header">
              <nav className="main-nav d-flex mt-3 mb-3">
                <div><NavLink activeClassName="selected" to={`${match.url}/list`}>User list</NavLink></div>
                <div><NavLink activeClassName="selected" to={`${match.url}/add`}>Create User</NavLink></div>
              </nav>
          </div>

          <div className="container">
              <Route path={`${match.path}/list`} component={UserList}/>
              <Route path={`${match.path}/add`} component={CreateUser}/>
              <Route path={`${match.path}/edit/:id`} component={EditUser}/>
          </div>
      </div>
    </HashRouter>
  )
};

export default withRouter(
(AppRouter)
);