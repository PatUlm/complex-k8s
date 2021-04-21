import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link className="App-link" to="/">Fib Calculator v3</Link>
        <Link className="App-link" to="/otherpage">Other Page</Link>
      </header>
      <div className="Container">
        <Route exact path="/" component={Fib} />
        <Route path="/otherpage" component={OtherPage} />
      </div>
    </div>
  </Router>
);

export default App;
