import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Greetings from './welcome/Greetings';
import Main from './layout/Main';

function App() {
  return (
    <div className="App">
      <Greetings name="Nikoo" />
      <Main />
    </div>
  );
}

export default App;
