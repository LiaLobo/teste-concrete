import React, { Component } from 'react'
import Search from '../../components/Search/Search'
import Logo from '../../components/Logo/Logo'
import { getUser, getRepos } from '../../service/user'

import './styles.css'

// export default function Home() {
//     return (
//         <div className='home'>
//             <Logo
//                 classFontH1='github-search'
//                 classFontSpan='github-search text-style-1'
//             />
//             <Search />
//         </div>
//     )
// }

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            user: {},
            repos: {}
        }
    }

    catchValue = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    search = () => {
        getUser(this.state.value).then((response) => {
            this.setState({
                user: response.data
            })
        }
        ).catch(err => console.log(err))
    }

    searchRepos = (login) => {
        getRepos(login).then((response) => {
            console.log(response)
        //    this.setState({ repos: response.data})
           this.props.history.push({
                pathname: '/result',
                state: { repos: response.data }
            })
        })
            // this.props.history.push('/repositories', this.setState = {
            //     data: response.data
            // })
    }

    render() {
        return (
            <div className='home'>
                <Logo
                    classFontH1='github-search'
                    classFontSpan='github-search text-style-1'
                />
                <Search
                    click={() => this.searchRepos(this.state.value)}
                    inputValue={this.catchValue}
                />
            </div>
        )
    }
}

export default Home