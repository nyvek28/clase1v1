import React from 'react';
import { Home, About, Contacts, Photos } from './pages';
import { Nav } from './components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/photos">
            <Photos />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
