import React, { Component } from 'react';
import IncomingRequests from '../IncomingRequests';
// import HistoryRequest from '../HistoryRequest';
// import Icon from '@collab-ui/react/es/Icon';

class ActiveContactList extends Component {

  render () {
    return (
      <div id="active-contact-list" className="active-contact-list">
        {/* <div className="incoming-list"> */}
          <IncomingRequests name="Agent1 Elena" messagePreview="3762 Sierra Road" active={true} type="chat" />
          <IncomingRequests name="Kailey Swift" messagePreview="Hello" type="email" />
        {/* </div> */}
    </div>
    );
  }
}

export default ActiveContactList;

