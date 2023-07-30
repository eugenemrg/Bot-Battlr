import React from 'react'

function EnlistedBot({ bot }) {

    const { name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot

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
        <div className="army-card">
            <img className="avatar" src={avatar_url} alt={name} />
            <div className="description">
                <p className="identification">{name}{getBotClassIcon(bot_class)}</p>
                <p className="catchphrase">{catchphrase}</p>
            </div>
            <div className="stats">
                <p className="stat"><i className="fa-solid fa-heart-pulse"></i>{health}</p>
                <p className="stat"><i className="fa-solid fa-bolt"></i>{damage}</p>
                <p className="stat"><i className="fa-solid fa-shield-halved"></i>{armor}</p>
            </div>
        </div>
    )
}

export default EnlistedBot