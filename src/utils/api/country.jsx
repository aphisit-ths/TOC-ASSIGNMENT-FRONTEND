import axios from 'axios'

export default axios.create({
    baseUrl: 'https://countries-api-service.herokuapp.com/',
})
