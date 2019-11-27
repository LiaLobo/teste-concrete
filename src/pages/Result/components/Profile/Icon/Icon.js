import React, { Fragment }from 'react'

import './icon.css'

const Icon = (props) => {
    const { iconClass, icon, iconSpan } = props
    return (
        <Fragment>
            <img className={iconClass} src={icon} alt='Ícone com descrição do perfil do Github'/> <span className='icon-name'>{iconSpan}</span>
        </Fragment>
    )
}

export default Icon