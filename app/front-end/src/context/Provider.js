import React, { useState } from 'react';
import Context from './Context';


export default function Provider({ children }) {
  const [token, setToken] = useState('');
  const [id, setId] = useState('');
  const [idEdit, setIdEdit] = useState('');

  const [accessUser, setAccessUser] = useState('');
  const [isLogged, setIsLogged] = useState(false);


  const stateHook = {
    token,
    id,
    accessUser,
    isLogged,
    idEdit,
    setIdEdit,
    setIsLogged,
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
