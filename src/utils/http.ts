import axios from 'axios';
import config from '../config';

const http = axios.create({
  baseURL: config.baseURI,
  // withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const punkHttp = axios.create({
  baseURL: config.punkBaseURI,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default http;
