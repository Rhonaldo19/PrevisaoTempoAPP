import axios from 'axios'

// https://api.hgbrasil.com/weather?key=22676b7b&lat=-23.682&lon=-46.875

export const key = '22676b7b'

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com'
})

export default api