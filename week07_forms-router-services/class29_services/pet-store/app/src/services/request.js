import superagent from 'superagent';

export const API_URL = '/api';

const wrap = cmd => cmd
  .then(
    // caller cares about the data, not http response
    r => r.body,
    ({ response }) => {
      throw response.body.error;
    }
  );

export const request = {
  get(url) {
    return wrap(superagent.get(`${API_URL}${url}`));
  },
  post(url, data) {
    return wrap(superagent.post(`${API_URL}${url}`).send(data));
  },
  put(url, data) {
    return wrap(superagent.put(`${API_URL}${url}`).send(data));
  },
  patch(url, data) {
    return wrap(superagent.patch(`${API_URL}${url}`).send(data));
  },
  delete(url) {
    return wrap(superagent.delete(`${API_URL}${url}`));
  },
};