import React, { useEffect } from 'react';
import './App.css';


import { useSelector } from 'react-redux';

import { Outlet, useNavigate } from 'react-router-dom';
import Nav from './Component/nav/nav.component';

const App = () => {
  // const isAuthenticated = useSelector((state: { user: { isAuthenticated: boolean } }) => state.user.isAuthenticated);
  //const isAuthenticated = sessionStorage.getItem('userId')
  // const navigate = useNavigate();

  // useEffect(() => {

    
  //   if (!sessionStorage.getItem("userId")) {
  //     navigate('/Login');
  //   }
  // }, [navigate]);

 

  return (
    <>
     {/* <Nav></Nav> */}
      {/* <Outlet /> */}
    <p>hello</p>
      <Outlet />
    </>
  );
};

export default App;
