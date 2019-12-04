import React from 'react'

import './imageProfile.css'

const ImageProfile = (props) => {
    const { imgProf } = props
    return (
        <img className='user-avatar'
            src={imgProf} alt='Foto de perfil do Github' />
    )
}

export default ImageProfile