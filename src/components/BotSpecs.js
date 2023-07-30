import React from 'react'
import './BotSpecs.css'

function BotSpecs({bot}) {

    const { id, name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot

    function getBotClassIcon(botClass) {
        let icon
        switch (botClass) {
            case 'Support':
                icon = <i className="fa-regular fa-life-ring"></i>
                break;
            case 'Medic':
                icon =  <i className="fa-solid fa-truck-medical"></i>
                break;
            case 'Witch':
                icon = <i className="fa-solid fa-hat-wizard"></i>
                break;
            case 'Defender':
                icon = <i className="fa-solid fa-shield-halved"></i>
                break;
            case 'Assault':
                icon = <i className="fa-solid fa-jet-fighter"></i>
                break;
            case 'Captain':
                icon = <i className="fa-solid fa-medal"></i>
                break;
            default:
                icon = ''
                break;
        }
        return icon
    }

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
                    <p className="current-class">Class: {bot_class} {getBotClassIcon(bot_class)}</p>
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