import axios from 'axios'

const locationSearch = axios.create({
    baseURL: 'https://api.opencagedata.com'
})

export default locationSearch