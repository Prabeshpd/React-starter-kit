import Config from './types/Config';

const config: Config = {
  nodeEnv: process.env.NODE_ENV,
  env: process.env.REACT_APP_ENV || 'dev',
  baseURI: `${process.env.REACT_APP_API_BASE_URI}`,
  punkBaseURI: `${process.env.PUNK_BASE_URI}`,
  endpoints: {
    // Auth
    login: '/auth/login',
    logout: '/auth/logout',
    refresh: '/auth/refresh',
    verifyToken: '/auth/verifyToken',

    //Beer
    fetchAllBeers: '/v2/beers',
    fetchMyBeers: '/v1/beers',
    createMyBeer: '/v1/beers',

    //User
    createUser: '/users',
  },
};

export default config;
