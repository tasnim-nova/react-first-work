import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <Counter></Counter>
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


function Counter() {
  const [count, setCount] = useState(10);

  return(
      <div>
        <h1>Count:  {count} </h1>
        <button style={{backgroundColor:'green', borderRadius: '5px', color:'white'}} onClick= {() => setCount(count-1)}>Decrease</button>
        <button style={{backgroundColor:'green', borderRadius: '5px', color:'white'}} onClick= {() => setCount(count+1)}>Increase</button>
      </div>
    );
  }


export default App;
