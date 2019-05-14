// import { Link, NavLink, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
// import { Route, Switch } from 'react-router-dom';
import AppHeader from './AppHeader';
// import LoginPage from './Login';
// import HomePage from './Home';
// import AboutPage from './About';
// import BlogPage from './Blog';
// import NotFoundPage from './NotFound';
import MiniSideNav from './MiniSideNav';
import ExpandedActivityColumn from './ExpandedActivityColumn';
import CustomerInfo from './CustomerInfo';

import ActivitiesColumn from './ActivitiesColumn';
// import Task from './Task';

class App extends Component {

  // constructor () {
  //   super();
  //   this.state = {
  //     data: null
  //   };
  // }

  // componentDidMount() {
  //     // Call our fetch function below once the component mounts
  //   this.callBackendAPI()
  //     .then(res => this.setState({ data: res.express }))
  //     .catch(err => console.log(err));
  // }
  //   // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  // callBackendAPI = async () => {
  //   const response = await fetch('/express_backend');
  //   const body = await response.json();
  //   console.log(body);

  //   if (response.status !== 200) {
  //     throw Error(body.message);
  //   }
  //   return body;
  // };

  render() {
    return (
      <div className="md-main">
        <AppHeader isLoggedIn={true} />
        <div className="app-content">
          <MiniSideNav />
          <ActivitiesColumn />
          <ExpandedActivityColumn />
          <CustomerInfo />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};

export default hot(module)(App);
