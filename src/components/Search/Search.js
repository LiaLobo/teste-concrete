import React, { Component } from 'react'
import IconSearch from '../../assets/icons/Search Icon.png'
import { Link } from 'react-router-dom'
import { getUser, getRepos } from '../../service/user';

import './search.css'

const Search = (props) => {
    return (
        <div className='search'>
            <input className='search-input' type='text' onChange={props.inputValue}></input>
            <Link to='/result'>
                <button onClick={props.click}>
                    <img className='search-icon' src={IconSearch} alt='Ícone de busca'/>
                </button>
            </Link>
        </div>
    )
}

export default Search