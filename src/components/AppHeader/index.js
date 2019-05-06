import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
// import Button from '@collab-ui/react/es/Button';
import List from '@collab-ui/react/es/List';
import ListItem from '@collab-ui/react/es/ListItem';
import Topbar from '@collab-ui/react/es/Topbar';
import TopbarNav from '@collab-ui/react/es/TopbarNav';
import TopbarMobile from '@collab-ui/react/es/TopbarMobile';
import TopbarRight from '@collab-ui/react/es/TopbarRight';
import * as actions from '../Login/actions';

class AppHeader extends Component {
  logoutUser = () => {
    console.log('log out user'); // eslint-disable-line no-console
    this.props.actions.logoutUser();
  };

  render() {
    const logoIcon = <i className="icon icon-cisco-logo" />;
    const navItems = (
      <Fragment>
        <ListItem
          customRefProp="innerRef"
          customAnchorNode={
            <NavLink exact to="/" activeClassName={'active'}>
              Home
            </NavLink>
          }
        />
        <ListItem
          customRefProp="innerRef"
          customAnchorNode={
            <NavLink to="/about" activeClassName={'active'}>
              About
            </NavLink>
          }
        />
        <ListItem
          customRefProp="innerRef"
          customAnchorNode={
            <NavLink to="/blog" activeClassName={'active'}>
              Blog
            </NavLink>
          }
        />
      </Fragment>
    );
    const topBarPopoverContent = (
        <List>
          <ListItem onClick={this.logoutUser}>Log out</ListItem>
        </List>
    );

    // const topbarRight = this.props.isLoggedIn ? (
    //   <div className="cui-top-bar__user">
    //     {/* <Popover
    //       direction="bottom-right"
    //       content={topBarPopoverContent}
    //       popoverTrigger="Click"
    //       closeOnClick> */}
    //       <button
    //         className="cui-avatar cui-button--none"
    //         aria-haspopup="true"
    //         onClick={this.logoutUser}>
    //         <img
    //           className="user-image"
    //           src={getAvatar()}
    //           alt="user"
    //         />
    //       </button>
    //     {/*</Popover> */}
    //   </div>
    // ) : (
    //   <div className="cui-top-bar__logged-out">
    //     <Link to="/login">Log In</Link>
    //     <Button color="blue">Sign Up</Button>
    //   </div>
    // );

    // const topbarRight = (
    //   <div className="cui-top-bar__user">
    //     {/* <Popover
    //       direction="bottom-right"
    //       content={topBarPopoverContent}
    //       popoverTrigger="Click"
    //       closeOnClick> */}
    //       <button
    //         className="cui-avatar cui-button--none"
    //         aria-haspopup="true"
    //         onClick={this.logoutUser}>
    //         <img
    //           className="user-image"
    //           src={getAvatar()}
    //           alt="user"
    //         />
    //       </button>
    //     {/*</Popover> */}
    //   </div>
    // );

    const topbarRight = this.props.isLoggedIn ? (
      <i className="icon-white icon icon-added-to-space_12" /> 
    ) : (
      null
    );

    return (
      <Fragment>
        <Topbar
          className="row"
          title="Customer Journey Platform"
          color="dark"
          image={logoIcon}
          anchor="/"
          fixed>
          <TopbarNav>{}</TopbarNav>
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

function mapStateToProps(state) {
  return {
    isLoggedIn: state.user.loggedIn,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppHeader);
