import React from 'react';
import { Route } from "react-router-dom";


import Landing from './components/LandingPage/Landing.js'

import './App.css';
import Login from './components/Auth/login.js';
import Register from './components/Auth/register.js';

function App() {
  return (
    <div className="App">
      <Route exact path={"/"} component={Landing} />
      <Route exact path={"/login"} component={Login} />
      <Route exact path={"/register"} component={Register} />
    </div>
  );
}

export default App;
