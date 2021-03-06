import React, { Component, Fragment } from 'react'
import Nav from './components/NavSearch/Nav'
import ImageProfile from './components/ImageProfile/ImageProfile'
import Description from './components/Description/Description'
import Repositories from './components/Repositories/Repositories'
import Icon from './components/Icon/Icon'
import Organization from '../../assets/icons/organization icon.png'
import Location from '../../assets/icons/location icon.png'
import Star from '../../assets/icons/star icon.png'
import Repositorie from '../../assets/icons/repositorie icon.png'
import Followers from '../../assets/icons/followers icon.png'
import NotFound from './components/NotFound/NotFound'
import { getUser, getRepos } from '../../service/user'

import './styles.css'

class Result extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {},
            repos: [],
            value: '',
            err: ''
        }
    }

    componentDidMount() {
        if(this.props.location.state) {
            if(this.props.location.state.user) {
                this.setState({
                    user: this.props.location.state.user
                })
                this.searchRepos(this.props.location.state.user.login)
            }
            if(this.props.location.state.err) {
                this.setState({
                    err: this.props.location.state.err
                })
            }
        }
    }

    catchValue = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    searchUser = (value) => {
        getUser(value).then(response => {
            this.setState({
                user: response.data,
                err: ''
            })
        })
        .catch((err) => {
            this.setState({
                err: 'User not found'
            })
        })
    }

    searchRepos = (value) => {
        getRepos(value).then(response => {
            this.setState({
                repos: response.data
            })
        })
    }

    search = () => {
        this.searchUser(this.state.value)
        this.searchRepos(this.state.value)
    }

    render() {
        const { avatar_url, name, bio, location, company, public_repos, followers, following } = this.state.user
        
        return (
             <Fragment>
                <div className='result-nav'>
                    <Nav
                        inputValue={this.catchValue}
                        click={this.search}
                    />
                </div>

                {!this.state.err ? 
                    <div className='result-flex'>
                        <div className='result-margin'>
                            <ImageProfile 
                                imgProf={avatar_url}
                            />
                            <Description 
                                classDescriptionH4='user-name'
                                title={name}
                                classDescriptionP='user-login'
                                description={bio}
                            />
                            <div className='block-icon'>
                                <Icon
                                    iconClass='margin organization-icon'
                                    icon={Organization}
                                    alt='Ícon circular com três círculos menores em cima'
                                    iconSpan={company}
                                />
                                <Icon
                                    iconClass='margin location-icon'
                                    icon={Location}
                                    alt='Ícone de um globo terrestre'
                                    iconSpan={location}
                                />
                                <Icon
                                    iconClass='margin respositories-icon'
                                    icon={Repositorie}
                                    alt='Ícone de uma caixa'
                                    iconSpan={public_repos}
                                />
                                <Icon
                                    iconClass='margin followers'
                                    icon={Followers}
                                    alt='Ícone de duas silhuetas de pessoas'
                                    iconSpan={followers}
                                />
                                <Icon
                                    iconClass='margin followers'
                                    icon={Followers}
                                    alt='Ícone de duas silhuetas de pessoas'
                                    iconSpan={following}
                                />
                            </div>
                        </div>
                    <div>
                        <ul>
                            {this.state.repos.sort(function repoStars(a, b){return b.stargazers_count - a.stargazers_count}).map(repo => (
                                <li key={repo.id}>
                                    <Repositories
                                        title={repo.name}
                                        description={repo.description}
                                    />
                                    <Icon
                                        iconClass='star-icon'
                                        icon={Star}
                                        alt='Ícone de estrela'
                                        iconSpan={repo.stargazers_count}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div> 
                : <NotFound /> }
        </Fragment>
        )
    }
}

export default Result