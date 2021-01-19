import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';
import {Link} from "react-router-dom";



function Another() {

    const [count,setCount] = useState(0);

    return (
        <div className="another"> 
        <header className="App-header">
        <button onClick={() => setCount(count+1)}>{count}</button>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Link
            to="/anotherOne" 
          >
            Learn React
          </Link>
        </header>
    
      </div>
      );
    }

function AnotherOne(){

    return(
        <div>
            I'm in the another File
            loaded on another page!
        </div>
    );
}

    export default Another;
    export {AnotherOne};