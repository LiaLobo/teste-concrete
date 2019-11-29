import axios from 'axios'

const config = axios.create({
    baseURL: 'https://api.github.com'
})

export default config