import React from 'react'
import IconSearch from '../../assets/icons/Search Icon.png'
import { Link } from 'react-router-dom'

import './search.css'

const Search = (props) => {
    return (
        <div className='search'>
            <input className='search-input' type='text' onChange={props.inputValue}></input>
       
                <button onClick={props.click}>
                    <img className='search-icon' src={IconSearch} alt='Ícone de busca'/>
                </button>
        </div>
    )
}

export default Search