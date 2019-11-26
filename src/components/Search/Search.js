import React from 'react'
import IconSearch from '../../assets/icons/Search Icon.png'

import './search.css'

const Search = (props) => {
    return (
        <div className='search'>
            <input className='search-input'></input>
            <button>
                <img className='search-icon' src={IconSearch} alt='Ícone de busca'/>
            </button>
        </div>
    )
}

export default Search