import React from 'react';
import { Link } from "react-router-dom";
import { navigation as links } from '../constants';

function App() {
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li>
            <Link to={link.destination}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default App;
