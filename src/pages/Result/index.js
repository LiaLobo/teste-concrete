import React, { Fragment } from 'react'
import Nav from './components/NavSearch/Nav'
import Profile from './components/Profile/Profile'
import Description from './components/Profile/Description/Description'

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
            <Description 
                classDescriptionH4='user-name'
                userName='Darth Vader'
                classDescriptionP='user-login'
                userLogin='Anakin'
            />
        </Fragment>
    )
}

export default Result