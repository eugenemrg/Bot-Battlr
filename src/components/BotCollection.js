import React from 'react'
import Bot from './Bot'

function BotCollection({allBots, updateBotArmy}) {
    return (
        <div className='bot-collection'>
            {allBots.map( (bot) => {
                return <Bot key={bot.id} bot={bot} updateBotArmy={updateBotArmy} />
            })}
        </div>
    )
}

export default BotCollection