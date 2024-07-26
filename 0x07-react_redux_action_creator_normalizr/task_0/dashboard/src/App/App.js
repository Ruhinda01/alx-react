import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { getLatestNotification } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';
import AppContext from './AppContext';


const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: AppContext._currentValue.user,
      logOut: this.logOut,
      listNotifications: [
        {id: 1, type: 'default', value: 'New course available'},
        {id: 2, type: 'urgent', value: 'New resume available'},
        {id: 3, type: 'urgent', html: {__html: getLatestNotification()}},
      ]
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
  }

  logIn = (email, password) => {
    this.setState({ user:
      { email: email, password: password, isLoggedIn: true }
    });
  }

  logOut = () => {
    this.setState({ user:
      { email: '', password: '', isLoggedIn: false }
    });
  }

  markNotificationAsRead = (id) => {
    const { listNotifications } = this.state;
    this.setState({ listNotifications: listNotifications.filter((notification) => notification.id !== id) });
  }

  render() {
    const { user, logOut } = this.state;
    return (
      <AppContext.Provider value={{ user, logOut }}>
        <Fragment>
          <Notifications
          listNotifications={this.state.listNotifications}
          displayDrawer={this.state.displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
          markNotificationAsRead={this.markNotificationAsRead}
           />
          <div className={css(AppStyles.App)}>
            <Header />
            { user.isLoggedIn ?
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom> :
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={this.logIn} />
            </BodySectionWithMarginBottom>}
            <BodySection title="News from the School">
              <p>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </BodySection>
            <Footer />
          </div>
        </Fragment>
      </AppContext.Provider>
    );
  }
}

const AppStyles = StyleSheet.create({
  App: {
    boxSizing: "border-box",
    fontFamily: "Arial, Helvetica, sans-serif"
  },
});

App.propTypes = {
//   isLoggedIn: PropTypes.bool,
//   logOut: PropTypes.func
};

App.defaultProps = {
//   isLoggedIn: false,
//   logOut: () => {}
};

export default App;
