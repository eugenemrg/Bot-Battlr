import { useEffect, useState } from 'react';
import './App.css';
import YourBotArmy from './components/YourBotArmy'
import BotCollection from './components/BotCollection';

function App() {

  const [allBots, setAllBots] = useState([])
  const [botArmy, setBotArmy] = useState([])
  const [enlistedClasses, setEnlistedClasses] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/bots')
    .then(r => r.json())
    .then(data => setAllBots(data))
  }, [])

  // Update list of classes already in bot army
  useEffect(() => {
    setEnlistedClasses(botArmy.map( bot => bot.bot_class))
  }, [botArmy])

  function addNewBotToBotArmy(selectedBot) {
    if(!botArmy.includes(selectedBot) && !enlistedClasses.includes(selectedBot.bot_class)){
      setBotArmy([...botArmy, selectedBot])
    }
  }

  function removeBotFromBotArmy(id) {
    setBotArmy(botArmy.filter(bot => bot.id !== id))
  }

  return (
    <div className="App">
      <YourBotArmy botArmy={botArmy} removeBot={removeBotFromBotArmy}/>
      <BotCollection allBots={allBots} updateBotArmy={addNewBotToBotArmy} />
    </div>
  );
}

export default App;
