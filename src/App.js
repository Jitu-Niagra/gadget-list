import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Gadget from './Components/Gadget/Gadget';
import GadgetList from './Components/Gadget/GadgetList';

function App() {
  return (
    <div>
       <Navbar/>
    <GadgetList/>
    </div>
   
  );
}

export default App;
