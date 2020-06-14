import React, { useState } from 'react';
import './App.css';
import Parent from './parents'
import CounterContext from './Countercontext'

function App() {
  const countState = useState(1)
  return (
    <CounterContext.Provider value={countState}>
    <div className="App">
      <Parent name="Bilal"/>
    </div>
    </CounterContext.Provider>
  );
}

export default App;
