import React, { Component } from 'react'
import Search from '../../components/Search/Search'
import Logo from '../../components/Logo/Logo'
import { getUser } from '../../service/user'

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
            err: ''
        }
    }

    catchValue = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    search = () => {
        if(this.state.value !== '') {
            getUser(this.state.value).then(response => {
                this.setState({
                    user: response.data
                })
                this.props.history.push({
                    pathname: '/result',
                    state: {
                        user: this.state.user
                    }
                })
            })
            .catch(err => {
                this.props.history.push({
                    pathname: 'result',
                    state: {
                        err: 'user not found :(',
                    }
                })
            })
        }
    }

    // searchUser = () => {
    //         getUser(this.state.value).then((res) => {
    //             // console.log(res)
    //     //         this.setState({
    //     //         user: res.data
    //     //   })
    //                 this.props.history.push({
    //                     pathname: '/result',
    //                     state: {user: res.data}
    //                 })
    //             })
    //         }
            

    // searchRepos = (login) => {
    //     getRepos(login).then((response) => {
    //         // console.log(response)
    //         this.props.history.push({
    //             pathname: '/result',
    //             state: { repos: response.data }
    //         })
    //     })
    // }

    // search = (login) => {
    //     this.searchUser()
    //     this.searchRepos(login)
    // }

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
                    inputValue={this.catchValue}
                    click={() => this.search(this.state.value)}
                />
            </div>
        )
    }
}

export default Home