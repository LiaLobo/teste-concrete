import React from 'react'
import IconSearch from '../../assets/icons/Search Icon.png'
import { Link } from 'react-router-dom'

import './search.css'

const Search = () => {
    return (
        <div className='search'>
            <input className='search-input' type='text'></input>
            <Link to='/result'>
                <button>
                    <img className='search-icon' src={IconSearch} alt='Ícone de busca'/>
                </button>
            </Link>
        </div>
    )
}

export default Search