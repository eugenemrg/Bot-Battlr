import { useEffect, useState } from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
      <YourBotArmy />
      <BotCollection allBots={allBots} />
    </div>
  );
}

export default App;
