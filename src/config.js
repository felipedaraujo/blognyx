const API_URL = { dev: 'http://localhost:9001', prod: 'https://my-json-server.typicode.com/felipedaraujo/blognyx-api' };
const env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';
const API_ROOT_URL = API_URL[env];

export { API_ROOT_URL }
