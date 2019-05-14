import React, { Component } from 'react';

class ExpandedActivityColumn extends Component {

    componentDidMount () {
      const parentContainer = document.getElementById('communication-body');
      parentContainer.appendChild(document.getElementById('my-webexteams-widget'));
    }

    render() {
      return (
        <div id="expanded-activity-column" className="expanded-activity-column">
          <div className="communication-header icon-text-row">
            <span>Chat</span>
            <div className="menu-row white">
              <div className="icon-div">
                <i className="cui-icon icon icon-call-forward_16 menu-option" />
              </div>
              <div className="icon-div">
                <i className="cui-icon icon icon-device-in-room_16 menu-option" />
              </div>
              <div className="icon-div">
                <i className="cui-icon icon icon-camera_16 menu-option" />
              </div>
              <div className="icon-div">
                <i className="cui-icon icon icon-cancel_16 menu-option" />
              </div>
            </div>
          </div>
          <div id="communication-body" className="communication-body" />
        </div>
      );
    }
}

export default ExpandedActivityColumn;
