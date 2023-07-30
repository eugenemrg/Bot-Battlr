import { useEffect, useState } from 'react';
import './App.css';
import YourBotArmy from './components/YourBotArmy'
import BotCollection from './components/BotCollection';

function App() {

  const [allBots, setAllBots] = useState([])
  const [botArmy, setBotArmy] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/bots')
    .then(r => r.json())
    .then(data => setAllBots(data))
  }, [])

  function addNewBotToBotArmy(selectedBot) {
    if(!botArmy.includes(selectedBot)) setBotArmy([...botArmy, selectedBot])
  }

  return (
    <div className="App">
      <YourBotArmy botArmy={botArmy}/>
      <BotCollection allBots={allBots} updateBotArmy={addNewBotToBotArmy} />
    </div>
  );
}

export default App;
