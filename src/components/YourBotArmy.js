import React from 'react'
import EnlistedBot from './EnlistedBot'

function YourBotArmy({botArmy}) {
    return (
        <div className='army-collection'>
            {botArmy.map( (bot) => {
                return <EnlistedBot key={bot.id} bot={bot}/>
            })}
        </div>
    )
}

export default YourBotArmy