import React, { Dispatch, SetStateAction, useState } from 'react';
import './userInput.css';

// const check = async() => await fetch('/hello').then(res => res.json())
// .then(res => console.log(res));
// check();

const UserInput = () => {
  const [userName, setUserName]: [string, Dispatch<SetStateAction<string>>] = useState('');

  const getUserName = async(userName: string) => {
    console.log(userName);
    await fetch('/userName', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({userName: userName}),
    
  }).then(res => res.json())
    .then(res => console.log(res));
  }

  const getTweetCount = async(input: string) => {
    await fetch('/tweetCount',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({userName: input})
  }).then(res => res.json())
    .then(res => console.log(res));
  }
  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      getTweetCount(userName);
    }
  }

  return (
    <div className="UserInput">
       {/* @ts-ignore */}
      <input placeholder='Enter Username' value={userName} onInput={e => setUserName(e.target.value)} onKeyDown={handleKeyDown}/>
      <button onClick={() => getTweetCount(userName)}>Search</button>
    </div>
  );
}

export default UserInput;