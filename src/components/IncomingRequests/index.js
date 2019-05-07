import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
// import Icon from '@collab-ui/react/es/Icon';

class IncomingRequests extends Component {

    iconType = () => {
        const iconName = `icon-${this.props.type}_16`;
        return (
          <i className={`cui-icon icon ${iconName} mini-side-bar-icon`} />
        );
    };

  render() {
    return (
    <Fragment>
        <div className={`${this.props.active ? 'incoming-active-request' : ''} incoming-request cui-alert cui-alert--meeting`}>
                <div className="left-icon-column">
                    {this.iconType()}
                </div>
            <div className="request-content cui-alert__content">
                <div className="cui-alert__title" title="Important Meeting">{this.props.name}</div>
                <div className="cui-alert__message" title="This is important">{this.props.messagePreview}</div>
                <div className="incoming-time">
                    <i className="icon icon-reset_16" />
                    <span>01:41</span>
                </div>
            </div>
        </div>
    </Fragment>
    );
  }
}

IncomingRequests.propTypes = {
    active: PropTypes.bool,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    messagePreview: PropTypes.string.isRequired,
};

IncomingRequests.defaultProps = {
    active: false
};

export default IncomingRequests;
