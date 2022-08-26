import React, { useState } from 'react';
import Context from './Context';


export default function Provider({ children }) {
  const [token, setToken] = useState('');
  const [id, setId] = useState('');
  const [accessUser, setAccessUser] = useState('');


  const stateHook = {
    token,
    id,
    accessUser,
    setId,
    setAccessUser,
    setToken,
  }
  return (
    <Context.Provider value={ stateHook }>
      {children}
    </Context.Provider>
  );
}
