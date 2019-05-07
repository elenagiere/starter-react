import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Icon from '@collab-ui/react/es/Icon';

class MenuRow extends Component {

    icons = () => {

      const icons = this.props.iconNames.map((iconName) => {(
        <div className="icon-div">
          <Icon
            name={`icon-${iconName}_16`}
            className='mini-side-bar-icon' />
        </div>
      );
    });

      return icons;
    };

  render() {
    return (
    <Fragment>
      <div className="menu-row">
        {this.icons()}
            {/* <div className="icon-div">
              <Icon className="menu-option" name="icon-info_16" />
            </div>
            <div className="icon-div">
              <Icon className="menu-option" name="icon-recents_16" />
            </div>
            <div className="icon-div">
              <Icon className="menu-option" name="icon-archive_16" />
            </div> */}
        </div>
    </Fragment>
    );
  }
}

MenuRow.propTypes = {
    iconNames: PropTypes.arrayOf(PropTypes.string).isRequired,
    withText: PropTypes.bool
};

MenuRow.defaultProps = {
  withText: false
};

export default MenuRow;
