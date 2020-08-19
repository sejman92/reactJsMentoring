import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyClassComponent from './MyClassComponent';
import MyReactPureComponent from './MyReactPureComponent';
import FunctionalComponent from './FunctionalComponent';

function App() {
  return (
    <div className="App" id="root">
        <MyClassComponent/>
        <MyReactPureComponent/>
        <FunctionalComponent/>
    </div>
  );
}

export default App;
