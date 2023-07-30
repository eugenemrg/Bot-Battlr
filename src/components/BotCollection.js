import React from 'react'
import Bot from './Bot'

function BotCollection({allBots}) {
    return (
        <div className='bot-collection'>
            {allBots.map( (bot) => {
                return <Bot properties={bot} />
            })}
        </div>
    )
}

export default BotCollection