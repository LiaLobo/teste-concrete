import React, { Fragment } from 'react'
import ImageProfile from './ImageProfile/ImageProfile'
import Description from '../Description/Description'
import Icon from '../Icon/Icon'
import Organization from '../../../../assets/icons/organization icon.png'
import Location from '../../../../assets/icons/location icon.png'
import Star from '../../../../assets/icons/star icon.png'
import Repositories from '../../../../assets/icons/repositorie icon.png'
import Followers from '../../../../assets/icons/followers icon.png'

import './profile.css'

const Profile = () => {
    return (
        <Fragment>
            <ImageProfile />
            <Description 
                classDescriptionH4='user-name'
                userName='Darth Vader'
                classDescriptionP='user-login'
                userLogin='Anakin'
            />
            <div className='block-icon'>
                <Icon
                    iconClass='margin organization-icon'
                    icon={Organization}
                    iconSpan='The Galactic Empire'
                />
                <Icon
                    iconClass='margin location-icon'
                    icon={Location}
                    iconSpan='The Galactic Empire'
                />
                <Icon
                    iconClass='margin star-icon'
                    icon={Star}
                    iconSpan='The Galactic Empire'
                />
                <Icon
                    iconClass='margin respositories-icon'
                    icon={Repositories}
                    iconSpan='The Galactic Empire'
                />
                <Icon
                    iconClass='margin followers'
                    icon={Followers}
                    iconSpan='The Galactic Empire'
                />
            </div>
        </Fragment>
    )
}

export default Profile