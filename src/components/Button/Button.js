import React, { Fragment }from 'react'
import IconSearch from '../../assets/icons/Search Icon.png'

import './button.css'

const Button = (props) => {
    return (
        <Fragment>
            <button>
                <img className='search-icon' src={IconSearch} alt='Ícone de busca'/>
            </button>
        </Fragment>
    )
}

export default Button