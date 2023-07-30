import React from 'react'
import Bot from './Bot'

function BotCollection({allBots, updateBotArmy, onDelete}) {
    return (
        <div className='bot-collection'>
            {allBots.map( (bot) => {
                return <Bot key={bot.id} bot={bot} updateBotArmy={updateBotArmy} onDelete={onDelete} />
            })}
        </div>
    )
}

export default BotCollection