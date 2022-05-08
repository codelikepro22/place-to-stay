import React from 'react';
import BottomNav from './components/BottomNav';
import Loading from './components/Loading';
import NavBar from './components/NavBar';
import Notification from './components/Notification';
import Login from './components/user/Login';

const App = () => {
  return (
    <>
      <Loading />
      <Notification />
      <Login />
      <NavBar />
      <BottomNav />
    </>
  );
};

export default App;
