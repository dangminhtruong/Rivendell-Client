import axios from 'axios';
import config from './config';

const instance = axios.create({
	baseURL: config.BASE_API_URL,
	withCredentials: true,
});

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;
axios.defaults.crossDomain = true;

export default instance;