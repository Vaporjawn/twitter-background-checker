import React from 'react';
import UserInput from '../../Components/UserInput/userInput';
import './home.css';

const Home = () => {
  return (
    <div className="HomeBackground">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <UserInput/>
      </header>
    </div>
  );
}

export default Home;
