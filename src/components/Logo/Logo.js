import React from 'react'
import { Link } from 'react-router-dom'

import './logo.css'

const Logo = () => {
    return (
        <div>
            <Link to='/'>
                <h1 className='github-search'> Github <span className='github-search text-style-1'> Search </span></h1>
            </Link>
        </div>
    )
}

export default Logo