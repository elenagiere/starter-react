import React, { Component } from 'react';
import Task from '../Task';
// import HistoryRequest from '../HistoryRequest';
// import Icon from '@collab-ui/react/es/Icon';

class ActiveContactList extends Component {

  render () {
    return (
      <div id="active-contact-list" className="active-contact-list">
          <Task name="Agent1 Elena" messagePreview="3762 Sierra Road" active={true} type="chat" />
          <Task name="Kailey Swift" messagePreview="Hello" type="email" />
          <Task name="Boo Radley" messagePreview="boo" type="chat" new={true} />
    </div>
    );
  }
}

export default ActiveContactList;

