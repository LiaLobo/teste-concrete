import React from 'react'

import './description.css'

const Description = (props) => {
    const { classDescriptionH4, title, classDescriptionP, description } = props
    return (
        <div>
            <h4 className={classDescriptionH4}>{title}</h4>
            <p className={classDescriptionP}>{description}</p>
        </div>
    )
}

export default Description