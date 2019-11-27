import React, { Fragment } from 'react'
import Logo from '../../../../components/Logo/Logo'
import Search from '../../../../components/Search/Search'

import './nav.css'

const Nav = () => {
    return (
        <Fragment>
            <Logo 
                classFontH1='github-result'
                classFontSpan='github-result text-style-2'
            /> 
            <Search />
        </Fragment>
    )
}

export default Nav