import React from 'react'
import Search from '../../components/Search/Search'
import Logo from '../../components/Logo/Logo'

import './styles.css'

export default function Home() {
    return (
        <div className='home'>
            <Logo />
            <Search />
        </div>
    )
}