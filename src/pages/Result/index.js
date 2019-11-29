import React, { Fragment } from 'react'
import Nav from './components/NavSearch/Nav'
import Profile from './components/Profile/Profile'
import Repositories from './components/Repositories/Repositories'

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
                                <Repositories nome={i.name}/>
                             </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}

export default Result