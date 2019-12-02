import React, { Fragment } from 'react'
import Nav from '../NavSearch/Nav'

import './notFound.css'

const NotFound = () => (
    <Fragment>
        <div className='not-found-nav'>
            <Nav />
        </div>
        <div className='not-found-div'>
            <h1 className='not-found-message'>Usuário não encontrado :(</h1>
        </div>
    </Fragment>
)

export default NotFound