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
            repos: []
        }
    }

    catchValue = (event) => {
        this.setState({
            value: event.target.value
        })
        console.log(this.state.value)
    }

    search = () => {
        getUser(this.state.value).then((response) => {
            this.setState({
                user: response.data
            })
        }
        ).catch(err => console.log(err))
    }

    // pesquisarRepos = (login) => {
    //     getRepos(login).then(res => {
    //       //  this.setState({ repos: res.data})
    //         this.props.history.push('/repos', state={
    //             data: res.data
    //         });
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
                    click={() => this.search}
                    inputValue={this.catchValue}
                />
            </div>
        )
    }
}

export default Home