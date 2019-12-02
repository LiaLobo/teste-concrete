import React from 'react'

import './icon.css'

const Icon = (props) => {
    const { iconClass, icon, alt, iconSpan } = props
    return (
        <div className='distance-icons'>
            <img className={iconClass} src={icon} alt={alt}/> <span className='icon-name'> {iconSpan}</span>
        </div>
    )
}

export default Icon