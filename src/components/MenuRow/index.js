import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Icon from '@collab-ui/react/es/Icon';

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
              <Icon className="menu-option" name="icon-info_16" />
            </div>
            <div className="icon-div">
              <Icon className="menu-option" name="icon-recents_16" />
            </div>
            <div className="icon-div">
              <Icon className="menu-option" name="icon-archive_16" />
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
