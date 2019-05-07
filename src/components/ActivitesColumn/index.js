import React, { Component } from 'react';
import IncomingRequests from '../IncomingRequests';
import HistoryRequest from '../HistoryRequest';
// import Icon from '@collab-ui/react/es/Icon';

class ActivitiesColumn extends Component {

  // componentDidMount () {
  //   const parentContainer = document.getElementById('activities-column');
  //   // console.log(parentContainer);
  //   parentContainer.appendChild(document.getElementById('my-webexteams-recents-widget'));
  // }

  render () {
    return (
      <div id="activities-column" className="activities-column">
          <div className="incoming-list">
              <IncomingRequests name="James Catalano" messagePreview="3762 Sierra Road" active={true} type="chat" />
              <IncomingRequests name="Kailey Swift" messagePreview="Hello" type="email" />
          </div>
          <div className="history-row">
              <span>History</span>
              <i className="icon icon-arrow-down_16" />
          </div>
          <div className="menu-row">
              <div className="icon-div">
                <span className="menu-option">All</span>
              </div>
              <div className="icon-div">
              <i className="cui-icon icon icon-audio-call_16 menu-option" />
              </div>
              <div className="icon-div">
              <i className="cui-icon icon icon-email_16 menu-option" />
              </div>
              <div className="icon-div active">
              <i className="cui-icon icon icon-chat_16 menu-option" />
              </div>
          </div>
      <div className="history-content incoming-list">
        <HistoryRequest />
        <HistoryRequest />
      </div>
    </div>
    );
  }
}

export default ActivitiesColumn;

