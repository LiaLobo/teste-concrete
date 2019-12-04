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

    searchUser = () => {
            getUser(this.state.value).then((res) => {
                // console.log(res)
        //         this.setState({
        //         user: res.data
        //   })
                    this.props.history.push({
                        pathname: '/result',
                        state: {user: res.data}
                    })
                })
            }
            

    searchRepos = (login) => {
        getRepos(login).then((response) => {
            // console.log(response)
            this.props.history.push({
                pathname: '/result',
                state: { repos: response.data }
            })
        })
    }

    search = (login) => {
        this.searchUser()
        this.searchRepos(login)
    }

        // searchUser = () => {
        //     getUser(this.state.value).then((response) => {

        //         this.props.history.push({
        //             pathname: '/result',
        //             state: {user: response.data}
        //         })
        //     })
        // }
        // searchRepos = (login) => {
        //     getRepos(login).then((response) => {
        //         // console.log(response)
        //         this.props.history.push({
        //             pathname: '/result',
        //             state: { repos: response.data }
        //         })
        //     })
        // }
    

    render() {
        return (
            <div className='home'>
                <Logo
                    classFontH1='github-search'
                    classFontSpan='github-search text-style-1'
                />
                <Search
                    click={() => this.search(this.state.value)}
                    inputValue={this.catchValue}
                />
            </div>
        )
    }
}

export default Home