import React, { Fragment } from 'react'
import Nav from './components/NavSearch/Nav'
import Profile from './components/Profile/Profile'
import Description from './components/Profile/Description/Description'
import Icon from './components/Profile/Icon/Icon'
import Organization from '../../assets/icons/organization icon.png'

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
            <Icon
                iconClass='margin organization-icon'
                icon={Organization}
                iconSpan='The Galactic Empire'
            />
        </Fragment>
    )
}

export default Result