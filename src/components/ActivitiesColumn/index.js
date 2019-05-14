import React, { Component } from 'react';
// import Task from '../Task';
// import HistoryRequest from '../HistoryRequest';
// import Icon from '@collab-ui/react/es/Icon';
import ActiveContactList from '../ActiveContactList';
import HistoryList from '../HistoryList';

class ActivitiesColumn extends Component {

  // componentDidMount () {
  //   const parentContainer = document.getElementById('activities-column');
  //   // console.log(parentContainer);
  //   parentContainer.appendChild(document.getElementById('my-webexteams-recents-widget'));
  // }

  render () {
    return (
      <div id="activities-column" className="activities-column">
          <ActiveContactList />
          <HistoryList />
      </div>
    );
  }
}

export default ActivitiesColumn;

