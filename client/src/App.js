import React from 'react';
import Dashboard from './views/Dashboard';
import CreatePirate from './views/CreatePirate';
import PirateInfo from './views/PirateInfo';
import {Router} from '@reach/router';
import RegLog from './views/RegLog';
import LogOutButton from './components/LogoutButton';

function App() {
  return (
    <div className="App">
      
      <LogOutButton/>
      <Router>
        <RegLog path="/"/>
        <Dashboard path="/pirates"/>
        <CreatePirate path="pirate/new"/>
        <PirateInfo path="pirate/:id"/>
      </Router>
    </div>
  );
}

export default App;
