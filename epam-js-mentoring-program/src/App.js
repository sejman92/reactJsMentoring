import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyClassComponent from './MyClassComponent';
import MyReactPureComponent from './MyReactPureComponent';

function App() {
  return (
    <div className="App" id="root">
        <MyClassComponent></MyClassComponent>
        <MyReactPureComponent></MyReactPureComponent>
    </div>
  );
}

export default App;
