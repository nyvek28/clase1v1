import React from 'react';
import { Home, About, Contacts, Photos } from './pages';
import { Nav, Photo } from './components';
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
          <Route path="/photos" exact>
            <Photos />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/photos/:id" component={Photo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
