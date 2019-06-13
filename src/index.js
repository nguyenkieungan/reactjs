import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter, Redirect, HashRouter, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Home from './Home';
import Students from './Student';
import Countdown from './Countdown';
import RefsForm from './refs-form/RefsForm';
import Redux from './redux/index';
import SearchYtb from './search-youtube/index';
import UserManagement from './user-management/index';

var routing = (
  <HashRouter>
    <div className="react-ex">
      <div className="container-fluid">
        <div className="row"> 
          <div className="react-ex__header">
            <p>Study Report - nguyen.kieu.ngan</p>
          </div>
        </div>
        <div className="row">
          <div className="react-ex__sidebar col-sm-3">
            <ul>
              <li>
                <Link to="/students">19/03/21 - Student List</Link>
              </li>
              <li>
                <Link to="/countdown">19/04/21 - Countdown</Link>
              </li>
              <li>
                <Link to="/search-youtube">19/05/21 - Search Youtube API</Link>
              </li>
              <li>
                <Link to="/user-management">19/06/21 - User Management</Link>
              </li>
              <li>
                <Link to="/refs-form">Practice Day 1 - Refs Form</Link>
              </li>
              <li>
                <Link to="/redux">Practice Day 2 - Redux</Link>
              </li>
            </ul>
          </div>
          <Route path="/reactjs" exact component={Home}/>
          <Route path="/students" component={Students}/>
          <Route path="/countdown" component={Countdown}/>
          <Route path="/search-youtube" component={SearchYtb} />
          <Route path="/user-management" component={UserManagement} />
          <Route path="/refs-form" component={RefsForm} />
          <Route path="/redux" component={Redux} />
        </div>
        <div className="row"> 
          <div className="react-ex__footer">
            <p>studyreport@2019 - <a href="https://github.com/nguyenkieungan/reactjs">https://github.com/nguyenkieungan/reactjs</a></p>
          </div>
        </div>
      </div>
    </div>
  </HashRouter>
)
library.add(fas);

ReactDOM.render(routing, document.getElementById('root'));

