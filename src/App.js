import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

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


function Counter(props) {
  const [count, setCount] = useState(10);
  return(
      <div>
        <h1>Count:  {count} </h1>
      </div>
    );
  }


export default App;
