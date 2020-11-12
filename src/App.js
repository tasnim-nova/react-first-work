import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <Counter></Counter>
       <Users></Users>
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

  function Users(){
    const [users, setUsers] = useState([]);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
    }, [])
  

    return(
      <div>
        <h3>Dynamic Users: {users.length}</h3>
        <ul>
          {
            users.map(user => <li>Name:{user.name} ; Email:{user.email}</li>)
          }
        </ul>
      </div>
    )
  }


export default App;
