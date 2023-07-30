import React from 'react'
import Bot from './Bot'

function BotCollection({allBots, viewBot, onDelete}) {
    return (
        <div className='bot-collection'>
            {allBots.map( (bot) => {
                return <Bot key={bot.id} bot={bot} viewBot={viewBot} onDelete={onDelete} />
            })}
        </div>
    )
}

export default BotCollection