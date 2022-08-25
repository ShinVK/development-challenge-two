import React from 'react';
import Context from './Context';


export default function Provider({ children }) {

  const stateHook = {}
  return (
    <Context.Provider value={ stateHook }>
      {children}
    </Context.Provider>
  );
}
