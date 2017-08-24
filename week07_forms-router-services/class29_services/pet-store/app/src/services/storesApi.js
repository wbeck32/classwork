// "Service" module that wraps data calls to server.
// Components don't have to know about http, ajax, .json(), etc.
import { request } from './request';

const URL = '/stores';

export default {
  getAll() {
    return request.get(URL);
  },
  get(id) {
    return request.get(`${URL}/${id}`);
  },
  add(store) {
    return request.post(URL, store);
  },
  remove(id) {
    return request.delete(`${URL}/${id}`);
  }
};