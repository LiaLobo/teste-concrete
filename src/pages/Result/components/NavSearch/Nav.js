import React, { Fragment } from 'react'
import Logo from '../../../../components/Logo/Logo'
import Search from '../../../../components/Search/Search'

import './nav.css'

const Nav = (props) => {
    const { inputValue, click } = props
    return (
        <Fragment>
            <Logo 
                classFontH1='github-result'
                classFontSpan='github-result text-style-2'
            /> 
            <Search
                inputValue={inputValue}
                click={click}
            />
        </Fragment>
    )
}

export default Nav