import React from 'react';
import logo from './logo.svg';
import './App.css';

//custom
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <h1>FIB CALCULATOR V2</h1>
          <Link to="/" >Home</Link>
          <Link to="/otherpage" >Other Page</Link>
        </header>
        <div>
          <Route exact path="/" component={Fib} />
          <Route exact path="/" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
