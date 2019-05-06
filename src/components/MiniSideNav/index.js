import React from 'react';
import Icon from '@collab-ui/react/es/Icon';

const MiniSideNav = () => {
  return (
      <div className="mini-side-bar">
        <Icon 
            name='recents_20'
            className='mini-side-bar-icon'
            color="white" 
        />
        <Icon 
            name='dialpad_20'
            className='mini-side-bar-icon'
            color="white" 
        />
        <Icon name='email_20' className='mini-side-bar-icon' color="white" />
        <Icon name='help-circle_20' className='mini-side-bar-icon' color="white" />
      </div>
  );
};

export default MiniSideNav;
