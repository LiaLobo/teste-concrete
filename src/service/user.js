import config from './config'

function getUser(userName) {
    const url = `/users/${userName}`
    return config.get(url)
}

function getRepos(userName) {
    const url = `/users/${userName}/repos`
    return config.get(url)
}

export { getUser, getRepos }