import React from 'react'
import Description from '../Description/Description'
import Icon from '../Icon/Icon'
import Star from '../../../../assets/icons/star icon.png'

import './repositories.css'

const Repositories = (props) => {
    console.log(props)
    return (
        <div className='repo-margin'>
            <Description
                classDescriptionH4='repo-name'
                userName='Darth Vader Repo'
                classDescriptionP='repo-description'
                userLogin='Anakin'
                nome={props.nome}
            />
            <Icon
                iconClass=''
                icon={Star}
                iconSpan='100'
            />
        </div>
    )
}

export default Repositories