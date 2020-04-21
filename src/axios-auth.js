import axios from 'axios'

const instance = axios.create({
    baseURL:"https://happyblog-328e3.firebaseio.com"
})

//instance.defaults.headers.common['SOMETHING'] = 'SOMETHING'

export default instance