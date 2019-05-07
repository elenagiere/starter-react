import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
// import Icon from '@collab-ui/react/es/Icon';

class MenuRow extends Component {

    // iconType = () => {
    //     const iconName = `icon-${this.props.type}_16`;
    //     return (
    //         <Icon
    //         name={iconName}
    //         className='mini-side-bar-icon'
    //         />
    //     );
    // };

  render() {
    return (
    <Fragment>
      <div className="menu-row">
            <div className="icon-div">
            <i className="cui-icon icon icon-info_16 menu-option" />
            </div>
            <div className="icon-div">
              <i className="cui-icon icon icon-recents_16 menu-option" />
            </div>
            <div className="icon-div">
              <i className="cui-icon icon icon-archive_16 menu-option" />
            </div>
        </div>
    </Fragment>
    );
  }
}

MenuRow.propTypes = {
    active: PropTypes.bool,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    messagePreview: PropTypes.string.isRequired,
};

MenuRow.defaultProps = {
    active: false
};

export default MenuRow;
