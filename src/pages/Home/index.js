import React, { Component } from 'react'
import Search from '../../components/Search/Search'
import Logo from '../../components/Logo/Logo'
import { getUser } from '../../service/user'

import './styles.css'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            user: {},
            err: ''
        }
    }

    catchValue = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    search = () => {
        getUser(this.state.value).then(response => {
            this.setState({
                user: response.data,
                err: '',
                value: ''
            })
            this.props.history.push({
                pathname: '/result',
                state: {
                    user: this.state.user
                }
            })
        })
            .catch(() => {
                this.setState({
                    err: 'Not found'
                })
                this.props.history.push({
                    pathname: '/result',
                    state: {
                        err: this.state.err
                    }
                })
            })
    }

    render() {
        return (
            <div className='home'>
                <Logo
                    classFontH1='github-search'
                    classFontSpan='github-search text-style-1'
                />
                <Search
                    inputValue={this.catchValue}
                    click={() => this.search(this.state.value)}
                />
            </div>
        )
    }
}

export default Home