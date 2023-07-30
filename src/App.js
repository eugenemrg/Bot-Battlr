import { useEffect, useState } from 'react';
import './App.css';
import YourBotArmy from './components/YourBotArmy'
import BotCollection from './components/BotCollection';
import BotSpecs from './components/BotSpecs';

function App() {

  const [allBots, setAllBots] = useState([])
  const [botArmy, setBotArmy] = useState([])
  const [enlistedClasses, setEnlistedClasses] = useState([])
  const [selectedBot, setSelectedBot] = useState({})

  useEffect(() => {
    fetch('https://bots-api-h2ld.onrender.com/bots')
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

  function showBotDetails(selectedBot) {
    setSelectedBot({...selectedBot})
  }

  function removeBotFromBotArmy(id) {
    setBotArmy(botArmy.filter(bot => bot.id !== id))
  }

  function handleDeleteBot(id) {
    setAllBots(allBots.filter(bot => bot.id !== id))
    setBotArmy(botArmy.filter(bot => bot.id !== id))
  }

  return (
    <div className="App">
      <YourBotArmy botArmy={botArmy} removeBot={removeBotFromBotArmy}/>
      {(Object.keys(selectedBot).length > 0) ? <BotSpecs bot={selectedBot} updateBotArmy={addNewBotToBotArmy} /> : '' }
      <BotCollection allBots={allBots} viewBot={showBotDetails} onDelete={handleDeleteBot} />
    </div>
  );
}

export default App;
