import React from 'react';
import block0 from './images/block0.JPG';
import block1 from './images/block1.JPG';
import block2 from './images/block2.JPG';
import block3 from './images/block3.JPG';
import block4 from './images/block4.JPG';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul className="BlockImages">
          <li><img src={block0} alt="block0" /></li>
          <li><img src={block1} alt="block1" /></li>
          <li><img src={block2} alt="block2" /></li>
          <li><img src={block3} alt="block3" /></li>
          <li><img src={block4} alt="block4" /></li>
        </ul>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
