import axios from 'axios'

const api = axios.create({
	baseURL: 'https://summarizer-ez3bprh33a-de.a.run.app',
})

export const getSummary = text => api.get(`/summarize?text=${text}&api_key=MyCustomerApiKey`)

const apis = {
	getSummary
}

export default apis