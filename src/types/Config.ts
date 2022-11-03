interface Config {
  nodeEnv?: string;
  env?: string;
  baseURI: string;
  punkBaseURI: string;
  endpoints: {
    refresh: string;
    login: string;
    logout: string;
    verifyToken: string;
    fetchAllBeers: string;
    fetchMyBeers: string;
    createMyBeer: string;
    createUser: string;
  };
}

export default Config;
