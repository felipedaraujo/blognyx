const API_URL = { dev: 'http://localhost:9001', prod: 'https://blonyx.herokuapp.com:9001' };
const env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';
const API_ROOT_URL = API_URL[env];

export { API_ROOT_URL }
