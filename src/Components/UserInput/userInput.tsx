import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './userInput.css';

const UserInput = () => {

  const [userName, setUserName]: [string, Dispatch<SetStateAction<string>>] = useState('');

  const check = (name: string) => {
    console.log(name);
  }

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      check(userName);
    }
  }

  return (
    <div className="UserInput">
       {/* @ts-ignore */}
      <input value={userName} onInput={e => setUserName(e.target.value)} onKeyDown={handleKeyDown}/>
      <button onClick={() => check(userName)} className='SearchButton'>Search</button>
    </div>
  );
}

export default UserInput;
