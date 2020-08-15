import React from 'react';
import block0 from './images/block0.JPG';
import block1 from './images/block1.JPG';
import block2 from './images/block2.JPG';
import block3 from './images/block3.JPG';
import block4 from './images/block4.JPG';
import { Checkbox } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          1. Think of a number between 1 and 31.
        </p>
        <p>
          2. Check the boxes that have that number.
        </p>
        <ul className="BlockImages">
          <li>
            <div><img src={block0} alt="block0" /></div>
            <div><Checkbox value="checkedA" inputProps={{ 'aria-label': 'Checkbox A' }}/></div>
          </li>
          <li><img src={block1} alt="block1" /></li>
          <li><img src={block2} alt="block2" /></li>
          <li><img src={block3} alt="block3" /></li>
          <li><img src={block4} alt="block4" /></li>
        </ul>
        
      </header>
    </div>
  );
}

export default App;
