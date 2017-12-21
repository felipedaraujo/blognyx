import { API_ROOT_URL } from './../../config.js';

const RestAPI = {
  fetchAll(path) {
    return request(`${path}`);
  },

  fetchById(path, value) {
    return request(`${path}/${value}`);
  },

  fetchByAttr(path, value, key) {
    return request(`${path}?${key}=${value}`);
  },

  add(path, params) {
    const data = {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }

    return request(path, data);
  },

  update(path, params) {
    const data = {
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }

    return request(path, data);
  }
}

const request = (path, data = {}) => {
  return fetch(`${API_ROOT_URL}${path}`, data)
    .then(response => response.json())
    .then(responseJSON => responseJSON)
    .catch(err => console.log(err))
}

export default RestAPI;
