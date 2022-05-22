import React, { Dispatch, SetStateAction, useState } from 'react';
import TwitterAPI from '../../Backend/twitterAPI';
import './userInput.css';

const UserInput = () => {

  const [userName, setUserName]: [string, Dispatch<SetStateAction<string>>] = useState('');

  const check = (name: string) => {
    TwitterAPI(name);
    // console.log(name);
  }

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      check(userName);
    }
  }

  return (
    <div className="UserInput">
       {/* @ts-ignore */}
      <input placeholder='Enter Username' value={userName} onInput={e => setUserName(e.target.value)} onKeyDown={handleKeyDown}/>
      <button onClick={() => check(userName)}>Search</button>
    </div>
  );
}

export default UserInput;
