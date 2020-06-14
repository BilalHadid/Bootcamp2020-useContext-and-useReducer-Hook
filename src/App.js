import React from 'react';
import './App.css';
import Parent from './parents'
import CounterContext from './Countercontext'

function App() {
  return (
    <CounterContext.Provider>
    <div className="App">
      <Parent name="Bilal"/>
    </div>
    </CounterContext.Provider>
  );
}

export default App;
