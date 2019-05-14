import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@momentum-ui/react/es/Button';
import List from '@momentum-ui/react/es/List';
import ListItem from '@momentum-ui/react/es/ListItem';
import Topbar from '@momentum-ui/react/es/Topbar';
import TopbarNav from '@momentum-ui/react/es/TopbarNav';
import TopbarMobile from '@momentum-ui/react/es/TopbarMobile';
import TopbarRight from '@momentum-ui/react/es/TopbarRight';
import * as actions from '../Login/actions';
import { Avatar } from '@momentum-ui/react';

class AppHeader extends Component {
  logoutUser = () => {
    console.log('log out user'); // eslint-disable-line no-console
    this.props.actions.logoutUser();
  };

  render() {
    console.log('isLoggedIn: ', this.props.isLoggedIn);
    const logoIcon = <i className="icon icon-cisco-logo" />;
    const getAvatar = () => {
      const number = Math.floor(Math.random() * 101);
      const gender = Math.random() >= 0.5 ? 'women' : 'men';
      return `https://randomuser.me/api/portraits/${gender}/${number}.jpg`;
    };
    const navItems = (
      <Fragment />
    );
    const topBarPopoverContent = (
        <List>
          <ListItem onClick={this.logoutUser}>Log out</ListItem>
        </List>
    );

    const topbarRight = this.props.isLoggedIn ? (
      <div className="md-top-bar__user">
        {/* <Popover
          direction="bottom-right"
          content={topBarPopoverContent}
          popoverTrigger="Click"
          closeOnClick> */}
          <i className="cui-icon icon icon-analysis_20 app-header-icon" />
          <i className="cui-icon icon icon-alert_20 app-header-icon" />
          <i className="cui-icon icon icon-settings_20 app-header-icon" />
          <button
            className="md-avatar md-button--none"
            aria-haspopup="true"
            onClick={this.logoutUser}>
            <Avatar
              title="name"
              type="active"
              alt="user"
              // className="cui-avatar__img"
              size={84}
              src={getAvatar()} />
          </button>
        {/*</Popover> */}
      </div>
    ) : (
      <div className="md-top-bar__logged-out">
        <Link to="/login">Log In</Link>
        <Button color="blue">Sign Up</Button>
      </div>
    );

    return (
      <Fragment>
        <Topbar
          title="Customer Journey Platform"
          color="dark"
          image={logoIcon}
          anchor="/"
          fixed>
          <TopbarNav>{navItems}</TopbarNav>
          <TopbarRight>{topbarRight}</TopbarRight>
          <TopbarMobile>
            {navItems}
            {/* <ListItemSeparator /> */}
      {topBarPopoverContent}
          </TopbarMobile>
        </Topbar>
      </Fragment>
    );
  }
}

AppHeader.propTypes = {
  actions: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool
};

// function mapStateToProps(state) {
//   return {
//     isLoggedIn: state.user.loggedIn,
//   };
// }

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  // mapStateToProps,
  mapDispatchToProps
)(AppHeader);
