import React, { Component } from 'react';
// import IncomingRequests from '../IncomingRequests';
// import SearchInput from '@collab-ui/react/es/SearchInput';
// import HistoryRequest from '../HistoryRequest';
// import MessageBox from '../MessageBox';
// import ChatInput from '../ChatInput';
// import Icon from '@collab-ui/react/es/Icon';


class ExpandedActivityColumn extends Component {

    componentDidMount () {
      const parentContainer = document.getElementById('expanded-activity-column');
      // console.log(parentContainer);
      parentContainer.appendChild(document.getElementById('my-webexteams-widget'));
    }

    render() {
      return (
        <div id="expanded-activity-column" className="expanded-activity-column">
        {/* <div className="chat-body">
          <div id="my-webexteams-widget" />
          <div className="header">
            <span>Chat</span>
            <div className="menu-row inline left">
                <div className="icon-div">
                  <Icon className="menu-option" name="icon-call-forward_16" />
                </div>
                <div className="icon-div">
                  <Icon className="menu-option" name="icon-chat-persistent_16" />
                </div>
                <div className="icon-div">
                  <Icon className="menu-option" name="icon-cancel_16" />
                </div>
            </div>
          </div>
          <MessageBox />
          <MessageBox />
          <MessageBox />
        </div>
        <ChatInput /> */}
      </div>
      );
    }
}

export default ExpandedActivityColumn;
