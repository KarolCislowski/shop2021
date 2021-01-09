import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://us-central1-cislowski-shop2021.cloudfunctions.net/api'
})

export default instance