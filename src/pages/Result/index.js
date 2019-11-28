import React, { Fragment } from 'react'
import Nav from './components/NavSearch/Nav'
import Profile from './components/Profile/Profile'

import './styles.css'

const Result = () => {
    return (
        <Fragment>
            <div className='result-nav'>
                <Nav />
            </div>
            <div>
                <Profile />
            </div>
        </Fragment>
    )
}

export default Result