import React from 'react'
import './BotSpecs.css'

function BotSpecs({bot}) {

    const { id, name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot

    return (
        <div className="specs-container">
            <div className="specs">
                <div className="current-avatar">
                    <img className="avatar" src={avatar_url} alt="robot" />
                </div>
                <div className="current-details">
                    <p className="current-name">Name: {name}</p>
                    <p className="current-phrase-header">Catchphrase</p>
                    <p className="current-phrase">{catchphrase}</p>
                    <p className="current-class">Class: {bot_class} <i className="class-icon fa-solid fa-shield-halved"></i></p>
                    <div className="current-stats">
                        <p className="current-stat"><i className="health-icon fa-solid fa-heart-pulse"></i>{health}</p>
                        <p className="current-stat"><i className="damage-icon fa-solid fa-bolt"></i>{damage}</p>
                        <p className="current-stat"><i className="armor-icon fa-solid fa-shield-halved"></i>{armor}</p>
                    </div>
                    <button>Go Back</button>
                    <button>Enlist</button>
                </div>
            </div>
        </div>
    )
}

export default BotSpecs