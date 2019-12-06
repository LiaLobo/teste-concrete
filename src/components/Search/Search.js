import React from 'react'
import IconSearch from '../../assets/icons/Search Icon.png'

import './search.css'

const Search = (props) => {
    const { placeholder, inputValue, click } = props
    return (
        <div className='search'>
            <input className='search-input' type='text' placeholder={placeholder} onChange={inputValue}></input>
       
                <button onClick={click}>
                    <img className='search-icon' src={IconSearch} alt='Ícone de busca'/>
                </button>
        </div>
    )
}

export default Search