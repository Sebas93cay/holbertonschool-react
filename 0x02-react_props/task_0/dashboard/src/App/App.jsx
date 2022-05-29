import './App.css';
import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Login } from '../Login/Login';
import { Notifications } from '../Notifications/Notifications';

function App() {
  return (
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
  );
}

export default App;
