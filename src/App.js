import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// components
import DashboardComponent from './components/dashboard/index';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={DashboardComponent} />
          {/* <Route path="/SignUp" component={SignUp} /> */}
        </div>
      </Router>
    );
  }
}

export default App;