// "Service" module that wraps data calls to server.
// Components don't have to know about http, ajax, .json(), etc.
import { request } from './request';

const URL = '/toys';

export default {
  getAll() {
    return request.get(URL);
  },
  get(id) {
    return request.get(`${URL}/${id}`);
  },
  add(toy) {
    return request.post(URL, toy);
  },
  remove(id) {
    return request.delete(`${URL}/${id}`);
  }
};