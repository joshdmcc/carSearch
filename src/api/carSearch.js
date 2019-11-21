import axios from 'axios'

const carSearch = axios.create({
    baseURL: 'https://marketcheck-prod.apigee.net'
})

export default carSearch