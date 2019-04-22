import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Students from './Student';
import Countdown from './Countdown';


var routing = (
  <Router>
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
            </ul>
          </div>
          <Route path="/students" component={Students}/>
          <Route path="/countdown" component={Countdown}/>
        </div>
        <div className="row"> 
          <div className="react-ex__footer">
            <p>studyreport@2019 - <a href="https://github.com/nguyenkieungan/reactjs">https://github.com/nguyenkieungan/reactjs</a></p>
          </div>
        </div>
      </div>
    </div>
  </Router>
)

library.add(fas);

ReactDOM.render(routing, document.getElementById('root'));

