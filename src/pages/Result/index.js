import React, { Fragment } from 'react'
import Nav from './components/NavSearch/Nav'
import ImageProfile from './components/Profile/ImageProfile/ImageProfile'
import Description from './components/Description/Description'
import Repositories from './components/Repositories/Repositories'
import Icon from './components/Icon/Icon'
import Organization from '../../assets/icons/organization icon.png'
import Location from '../../assets/icons/location icon.png'
import Star from '../../assets/icons/star icon.png'
import Repositorie from '../../assets/icons/repositorie icon.png'
import Followers from '../../assets/icons/followers icon.png'

import './styles.css'

const Result = (props) => {
    // console.log(props)
    // const { repos } = props.location.state
    const user = props.location.state.user
    console.log(user)
    return (
        <Fragment>
            <div className='result-nav'>
                <Nav />
            </div>
            <div className='result-flex'>
                <div className='result-margin'>
                    <ImageProfile 
                        imgProf={user.avatar_url}
                    />
                    <Description 
                        classDescriptionH4='user-name'
                        title={user.name}
                        classDescriptionP='user-login'
                        description={user.login}
                    />
                <div className='block-icon'>
                    <Icon
                        iconClass='margin organization-icon'
                        icon={Organization}
                        iconSpan={user.bio}
                    />
                    <Icon
                        iconClass='margin location-icon'
                        icon={Location}
                        iconSpan={user.location}
                    />
                    <Icon
                        iconClass='margin star-icon'
                        icon={Star}
                        iconSpan={user.email}
                    />
                    <Icon
                        iconClass='margin respositories-icon'
                        icon={Repositorie}
                        iconSpan={user.public_repos}
                    />
                    <Icon
                        iconClass='margin followers'
                        icon={Followers}
                        iconSpan={user.followers}
                    />
                    <Icon
                        iconClass='margin followers'
                        icon={Followers}
                        iconSpan={user.following}
                    />
                </div>
                </div>
                <div>
                    <ul>
                        {/* {repos.map(repo => (
                            <li key={repo.id}>
                                <Repositories
                                    title={repo.name}
                                    description={repo.description}
                                />
                                <Icon
                                    iconClass='star-icon'
                                    icon={Star}
                                    alt='Ícone de estrela'
                                    iconSpan={repo.stargazers_count}
                                />
                            </li>
                        ))} */}
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}

export default Result