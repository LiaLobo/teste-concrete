import React from 'react'
import { Link } from 'react-router-dom'

import './logo.css'

const Logo = (props) => {
    const { classFontH1, classFontSpan } = props
    return (
        <div>
            <Link to='/'>
                <h1 className={classFontH1}> Github <span className={classFontSpan}>Search</span></h1>
            </Link>
        </div>
    )
}

export default Logo