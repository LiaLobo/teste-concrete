import React from 'react'
import Description from '../Description/Description'

import './repositories.css'

const Repositories = (props) => {
    const { title, description } = props
    // console.log(props)
    return (
        <div className='repo-margin-top'>
            <Description
                classDescriptionH4='repo-name'
                title={title}
                classDescriptionP='repo-description'
                description={description}
            />
        </div>
    )
}

export default Repositories