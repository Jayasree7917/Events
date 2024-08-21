import React from "react";
import './App.css';
import Header from './components/Header';
import Dnd from './components/Dnd';
import TedxSec from "./components/TedxSec";
import Sdv from "./components/Sdv";
import Aar from "./components/Aar";
import Fist from "./components/Fist";

function App() {
  return (
    <div className="App">
      <Header/>
      <Dnd/>
      <TedxSec/>
      <Sdv/>
      <Aar/>
      <Fist/>
    </div>
  );
}

export default App;

