import React from 'react'

import './description.css'

const Description = (props) => {
    const { classDescriptionH4, userName, classDescriptionP, userLogin } = props
    return (
        <div>
            <h4 className={classDescriptionH4}>{userName}</h4>
            <p className={classDescriptionP}>{userLogin}</p>
        </div>
    )
}

export default Description