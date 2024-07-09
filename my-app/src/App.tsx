// import React, { useEffect } from 'react';
// import './App.css';


// import { Provider, useSelector } from 'react-redux';

// import { BrowserRouter, Outlet, useNavigate } from 'react-router-dom';
// import Nav from './Component/nav/nav.component';
// import { Routing } from './Routing';
// import store from './Redux/Store';

// const App = () => {
//   const isAuthenticated = sessionStorage.getItem('userId')
//   const navigate = useNavigate();

//   useEffect(() => {

    
//     if (!sessionStorage.getItem("userId")) {
//       navigate('/Login');
//     }
//   }, [navigate]);

 

//   return (
//     <>

//      <Provider store={store}>
//        <BrowserRouter>
//             {/* nav טוענת את ה */}
//             <Nav></Nav>
//             {/* טוענת את כל הצהרות הניתובים */}
//            <Routing></Routing> 
//         </BrowserRouter>
//         </Provider>
   
//      <Nav></Nav>
//       {/* <Outlet /> */}
//     {/* <p>hello</p> */}
//       <Outlet />
//     </>
//   );
// };

// export default App;
import React, { useEffect } from 'react';
import './App.css';


import { Provider, useSelector } from 'react-redux';

import { BrowserRouter, Outlet, useNavigate } from 'react-router-dom';
import Nav from './Component/nav/nav.component';
import { Routing } from './Routing';
import store from './Redux/Store';

const App = () => {
  const isAuthenticated = sessionStorage.getItem('userId')
  const navigate = useNavigate();

  useEffect(() => {

    
    if (!sessionStorage.getItem("userId")) {
      navigate('/login');
    }
  }, [navigate]);

 

  return (
    <>
    <Nav></Nav>
    <div>ruti</div>
    </>
  );
};

export default App;