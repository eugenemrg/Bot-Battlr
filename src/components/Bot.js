import React from 'react'

function Bot({properties}){

    const {name, health, damage, armor, bot_class, catchphrase, avatar_url} = properties

    return (
        <div className="card">
            <img className="avatar" src={avatar_url} alt={name} />
            <div className="description">
                <p className="identification">{name}</p>
                <p className="catchphrase">{catchphrase}</p>
            </div>
            <div className="stats">
                <p className="stat">{health}</p>
                <p className="stat">{damage}</p>
                <p className="stat">{armor}</p>
            </div>
        </div>
    )
}

export default Bot