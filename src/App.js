import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var personM = {
    name :"Tareq Soleman Selim",
    job : "Businessman"
  }
  var personF ={
    name: "Hasina Khanam",
    job: "House Maker"
  }
  var style = {
    backgroundColor: "white",
    color: "blue"
  }

 const friends = ['Oishi', 'Samia', 'Talha', 'Fahua', 'Lima'];
 
const productName = [
  {name: 'Photoshop', price:'$5.66'},
  {name:'Adobe XD', price:'$4.55'},
  {name: 'Illustrator', price:'$6.99'}
]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* Dynamically Passing Component */}
        <ul>
          {
             friends.map( friend =><li>{friend}</li> )
          }
        </ul>
        {/* starting basics w react */}
        <p>Tasnim Tareq</p>
        <h6 style={style}>Father: {personM.name+ "  "} Job: {personM.job} </h6>
        <h6 style= {{backgroundColor: "yellow", color: "red"}}>Mother : {personF.name+ "   "} Job: {personF.job}</h6> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          {
            productName.map(pd => <Products product={pd}></Products>)
          }
        </ul>
        {/* basic way to purse data from an object into component
        <Products productName={productName[0]}></Products>
        <Products productName={productName[1]}></Products>
        <Products productName={productName[2]}></Products> */}
        <Person name="Tareq Soleman Selim" work="Bussinessman"></Person>
        <Person name="Hasina Khanam" work="Housewife"></Person>
        <Person name="Mohaimin Tareq" work="Student"></Person>
        <Person name="Tasnim Tareq" work="Student"></Person>
        <Person name="Tafannum Tareq" work="Student"></Person>
      </header>
    </div>
  );
}

//component passing from object(efficiently)
function Products(props) {
  const productStyle ={
    border: '1px solid grey',
    borderRadius: '5px',
    margin: '7px',
    width: '280px',
    display: 'block'
  }
  // const {name, price} = props.productName;
  return(
    <div style= {productStyle}>
      <h4>Name: {props.productName.name}</h4>
      <h3>Price: {props.productName.price}</h3>
      <button>Buy Now</button>
    </div>
  )
}

//basic component and returning multiple command
function Person(props) {
  const personStyle = {
    border: '2px red solid',
    width: '400px',
    margin: '10px'
  }
  
  return (
    <div style={personStyle}>
      <h4>Name: {props.name}</h4>
      <h5>Designation: {props.work}</h5>
    </div>
  )
}

export default App;
