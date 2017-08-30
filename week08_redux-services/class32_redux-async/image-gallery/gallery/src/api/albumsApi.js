import request from 'superagent';

const API_URL = '/api/albums';

export default {
  getAll() {
    return request.get(API_URL)
      .then(
        r => r.body,
        e => { throw e.response.body; }
      );
  },
  get(id) {
    return request.get(`${API_URL}/${id}`)
      .then(
        r => r.body,
        e => { throw e.response.body; }
      );
  },
  add(album) {
    return request.post(API_URL, album)
      .then(
        r => r.body,
        e => { throw e.response.body; }
      );
  }
};