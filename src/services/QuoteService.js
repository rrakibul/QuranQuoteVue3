import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getQuotes() {
    return apiClient.get('/editions/ben-muhiuddinkhan/1.json')
  },
  getChapter(id) {
    return apiClient.get('/editions/ben-muhiuddinkhan/' + id + '.json')
  }
}
