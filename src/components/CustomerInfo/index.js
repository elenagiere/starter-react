import React from 'react';
import Avatar from '@momentum-ui/react/es/Avatar';

const CustomerInfo = () => {
  return (
    <div className="customer-info">
      <div className="menu-row">
          <div className="icon-div active">
            <i className="cui-icon icon icon-info_16 menu-option" />
          </div>
          <div className="icon-div">
            <i className="cui-icon icon icon-recents_16 menu-option" />
          </div>
          <div className="icon-div">
            <i className="cui-icon icon icon-archive_16 menu-option" />
          </div>
      </div>
      <div className="main">
        <Avatar title="Michael Littlefoot" size="xlarge" />
        <h3>Michael Littlefoot</h3>
        <div className="table">
          <div className="header-column">
            <p>Contact</p>
            <p>Email Address</p>
            <p>Home Address</p>
            <p>Topic</p>
            <p>Arrival time</p>
          </div>
          <div className="value-column">
            <p>4081551212</p>
            <p>michael.littlefoot@email.com</p>
            <p>377 Sierra Road</p>
            <p>New bike</p>
            <p>4/8/18 12:30 P.M.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
