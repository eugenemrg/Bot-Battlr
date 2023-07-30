import React from 'react'
import EnlistedBot from './EnlistedBot'

function YourBotArmy({botArmy, removeBot}) {
    return (
        <div className='army-collection'>
            {botArmy.map( (bot) => {
                return <EnlistedBot key={bot.id} bot={bot} removeBot={removeBot}/>
            })}
        </div>
    )
}

export default YourBotArmy