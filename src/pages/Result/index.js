import React, { Fragment } from 'react'
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

import './styles.css'

// const Result = (props) => {
//     // const repos = props.location.state.repos
//     // const user = props.location.state.user
//     const { repos, user } = props.location.state
//     return (
//         <Fragment>
//             <div className='result-nav'>
//                 <Nav />
//             </div>
//             <div className='result-flex'>
//                 <div className='result-margin'>
//                     <ImageProfile 
//                         imgProf={user.avatar_url}
//                     />
//                     <Description 
//                         classDescriptionH4='user-name'
//                         title={user.name}
//                         classDescriptionP='user-login'
//                         description={user.login}
//                     />
//                 <div className='block-icon'>
//                     <Icon
//                         iconClass='margin organization-icon'
//                         icon={Organization}
//                         alt='Ícon circular com três círculos menores em cima'
//                         iconSpan={user.bio}
//                     />
//                     <Icon
//                         iconClass='margin location-icon'
//                         icon={Location}
//                         alt='Ícone de um globo terrestre'
//                         iconSpan={user.location}
//                     />
//                     <Icon
//                         iconClass='margin star-icon'
//                         icon={Star}
//                         alt='Ícone de um estrela'
//                         iconSpan={user.email}
//                     />
//                     <Icon
//                         iconClass='margin respositories-icon'
//                         icon={Repositorie}
//                         alt='Ícone de uma caixa'
//                         iconSpan={user.public_repos}
//                     />
//                     <Icon
//                         iconClass='margin followers'
//                         icon={Followers}
//                         alt='Ícone de duas silhuetas de pessoas'
//                         iconSpan={user.followers}
//                     />
//                     <Icon
//                         iconClass='margin followers'
//                         icon={Followers}
//                         alt='Ícone de duas silhuetas de pessoas'
//                         iconSpan={user.following}
//                     />
//                 </div>
//                 </div>
//                 <div>
//                     <ul>
//                         {repos.map(repo => (
//                             <li key={repo.id}>
//                                 <Repositories
//                                     title={repo.name}
//                                     description={repo.description}
//                                 />
//                                 <Icon
//                                     iconClass='star-icon'
//                                     icon={Star}
//                                     alt='Ícone de estrela'
//                                     iconSpan={repo.stargazers_count}
//                                 />
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </Fragment>
//     )
// }

class Result extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            error: ''
        }
    }

    render() {
        const repos = this.props.location.state.repos
        // const user = this.props.location.state.user
        return (
             <Fragment>
                <div className='result-nav'>
                    <Nav />
                </div>
                <div className='result-flex'>
                    <div className='result-margin'>
                        <ImageProfile 
                            // imgProf={user.avatar_url}
                        />
                        <Description 
                            classDescriptionH4='user-name'
                            // title={user.name}
                            classDescriptionP='user-login'
                            // description={user.login}
                         />
                        <div className='block-icon'>
                            <Icon
                                iconClass='margin organization-icon'
                                icon={Organization}
                                alt='Ícon circular com três círculos menores em cima'
                                // iconSpan={user.bio}
                            />
                            <Icon
                                iconClass='margin location-icon'
                                icon={Location}
                                alt='Ícone de um globo terrestre'
                                // iconSpan={user.location}
                            />
                            <Icon
                                iconClass='margin star-icon'
                                icon={Star}
                                alt='Ícone de um estrela'
                                // iconSpan={user.email}
                            />
                            <Icon
                                iconClass='margin respositories-icon'
                                icon={Repositorie}
                                alt='Ícone de uma caixa'
                                // iconSpan={user.public_repos}
                            />
                            <Icon
                                iconClass='margin followers'
                                icon={Followers}
                                alt='Ícone de duas silhuetas de pessoas'
                                // iconSpan={user.followers}
                            />
                            <Icon
                                iconClass='margin followers'
                                icon={Followers}
                                alt='Ícone de duas silhuetas de pessoas'
                                // iconSpan={user.following}
                            />
                        </div>
                    </div>
                <div>
                    <ul>
                        {repos.map(repo => (
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
        </Fragment>
        )
    }
}

export default Result