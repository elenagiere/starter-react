import React, { Component } from 'react';
import HistoryRequest from '../HistoryRequest';
import Icon from '@collab-ui/react/es/Icon';

class HistoryList extends Component {

  // componentDidUpdate () {
  //   console.log(this.collapsed);
  //   this.displayTypeClass = this.collapsed ? "hide" : "";
  //   this.historyButtonPosition = this.collapsed ? "float-down" : "";
  //   console.log(this.displayTypeClass);
  //   console.log(this.historyButtonPosition);
  // }

  collapsed = false;
  displayTypeClass = '';
  historyButtonPosition = '';

  collapse() {
    console.log('collapse');
    this.collapsed = !this.collapsed;
    console.log(this.collapsed);

    // this.displayTypeClass = this.collapsed ? "hide" : "";
    this.displayTypeClass = '';
    this.historyButtonPosition = this.collapsed ? "float-down" : "";
    console.log(this.displayTypeClass);
    console.log(this.historyButtonPosition);
  }

  render () {
    return (
      <div id="history-list" className="history-list">
          <button id="history-header-button" className={`history-header-button`} onClick={this.collapse.bind(this)}>
              <span>History</span>
              <i className="icon icon-arrow-down_16" />
          </button>
          <div id="history-list-content">
            <div className="menu-row">
                <div className="icon-div">
                  <span className="menu-option">All</span>
                </div>
                <div className="icon-div">
                  <Icon className="menu-option" name="icon-audio-call_16" />
                </div>
                <div className="icon-div">
                  <Icon className="menu-option" name="icon-email_16" />
                </div>
                <div className="icon-div active">
                  <Icon className="menu-option" name="icon-chat_16" />
                </div>
            </div>
            <div className="history-content incoming-list">
              <HistoryRequest />
              <HistoryRequest />
            </div>
          </div>

    </div>
    );
  }
}

export default HistoryList;

