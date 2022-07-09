import React, { Dispatch, SetStateAction, useState } from 'react';
import './userInput.css';

// const check = async() => await fetch('/hello').then(res => res.json())
// .then(res => console.log(res));
// check();

const UserInput = () => {
  const [userName, setUserName]: [string, Dispatch<SetStateAction<string>>] = useState('');
  const check = async(name: string) => {
    console.log(name);
    await fetch('/userNameTest', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: name}),
    
  }).then(res => res.json())
    .then(res => console.log(res));
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
