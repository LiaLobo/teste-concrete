import React, { Fragment } from 'react'
import Nav from './components/NavSearch/Nav'
import Profile from './components/Profile/Profile'
import Repositories from './components/Repositories/Repositories'
import Icon from './components/Icon/Icon'
import Star from '../../assets/icons/star icon.png'

import './styles.css'

const Result = (props) => {
    
     const { repos } = props.location.state
      console.log(repos)
    return (
        <Fragment>
            <div className='result-nav'>
                <Nav />
            </div>
            <div className='result-flex'>
                <div className='result-margin'>
                    <Profile />
                </div>
                <div>
                    <ul>
                        {repos.map(i => (
                            <li key={i.id}>
                                <Repositories
                                    title={i.name}
                                    description={i.description}
                                />
                                <Icon
                                    iconClass='star-icon'
                                    icon={Star}
                                    alt='Ícone de estrela'
                                    iconSpan={i.stargazers_count}
                                />
                             </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}

export default Result