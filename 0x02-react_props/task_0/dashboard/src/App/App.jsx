import './App.css';
import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Login } from '../Login/Login';
import { Notifications } from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import { CourseList } from '../CourseList/CourseList';

function App({ isLoggedIn = false }) {
  return (
    <>
      {isLoggedIn ? (
        <CourseList></CourseList>
      ) : (
        <>
          <Notifications></Notifications>
          <div className='App'>
            <Header></Header>
            <div className='App-body'>
              <Login></Login>
            </div>
            <Footer></Footer>
          </div>
        </>
      )}
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
