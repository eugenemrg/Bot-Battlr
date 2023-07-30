import { useEffect, useState } from 'react';
import './App.css';
import YourBotArmy from './components/YourBotArmy'
import BotCollection from './components/BotCollection';

function App() {

  const [allBots, setAllBots] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/bots')
    .then(r => r.json())
    .then(data => setAllBots(data))
  }, [])

  return (
    <div className="App">
      <YourBotArmy />
      <BotCollection allBots={allBots} />
    </div>
  );
}

export default App;
