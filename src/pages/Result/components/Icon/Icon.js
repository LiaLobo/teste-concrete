import React from 'react'

import './icon.css'

const Icon = (props) => {
    const { iconClass, icon, iconSpan } = props
    return (
        <div className='distance-icons'>
            <img className={iconClass} src={icon} alt='Ícone com descrição do perfil do Github'/> <span className='icon-name'>{iconSpan}</span>
        </div>
    )
}

export default Icon