import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Students from './Student';
import Countdown from './Countdown';

var routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/students">StudyReport - 19/03/21 - Student List</Link>
        </li>
        <li>
          <Link to="/countdown">StudyReport - 19/04/21 - Countdown</Link>
        </li>
      </ul>
      <Route path="/students" component={Students}/>
      <Route path="/countdown" component={Countdown}/>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

