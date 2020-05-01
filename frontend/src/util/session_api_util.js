import axios from 'axios';

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const register = orgData => {
  return axios.post('/api/org/register', orgData);
};

export const login = orgData => {
  return axios.post('/api/org/login', orgData);
};