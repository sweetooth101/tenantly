import React from 'react';
import { Route } from "react-router-dom";


import Landing from './components/LandingPage/Landing.js'

import './App.css';

function App() {
  return (
    <div className="App">
      <Route eact path={"/"} component={Landing} />
    </div>
  );
}

export default App;
