import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
// import Icon from '@collab-ui/react/es/Icon';

class MenuRow extends Component {

    icons = () => {

      const icons = this.props.iconNames.map((iconName) => {(
        <div className="icon-div">
          <i className={`cui-icon icon icon-${iconName}_16 mini-side-bar-icon`} />
        </div>
      );
    });

      return icons;
    };

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
    iconNames: PropTypes.arrayOf(PropTypes.string).isRequired,
    withText: PropTypes.bool
};

MenuRow.defaultProps = {
  withText: false
};

export default MenuRow;
