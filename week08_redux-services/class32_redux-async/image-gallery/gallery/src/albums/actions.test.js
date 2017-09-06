import { makeGetAlbums, makeAddAlbum } from './actions';
import { FETCHING_ALBUMS, FETCHED_ALBUMS, FETCHED_ALBUMS_ERROR } from './constants';
import { ADDING_ALBUM, ADDED_ALBUM, ADDED_ALBUM_ERROR } from './constants';

describe('getAlbums', () => {

  it('successful get albums', () => {
    const albums = ['album'];
    const api = { getAll: () => Promise.resolve(albums) };
    const dispatched = [];
    const dispatch = (action) => dispatched.push(action);
    
    const getAlbums = makeGetAlbums(api);
    return getAlbums()(dispatch)
      .then(() => {
        expect(dispatched).toEqual([
          { type: FETCHING_ALBUMS },
          { type: FETCHED_ALBUMS, payload: albums }
        ]);
      });
  });

  it('failed get albums', () => {
    const error = 'the error';
    const api = { getAll: () => Promise.reject({ error }) };
    const dispatched = [];
    const dispatch = (action) => dispatched.push(action);
    
    const getAlbums = makeGetAlbums(api);
    return getAlbums()(dispatch)
      .then(() => {
        expect(dispatched).toEqual([
          { type: FETCHING_ALBUMS },
          { type: FETCHED_ALBUMS_ERROR, payload: error }
        ]);
      });
  });
});


describe('addAlbum', () => {
  
  it('successful add album', () => {
    const album = { title: 'the album' };
    const api = { add: album => Promise.resolve(album) };
    const dispatched = [];
    const dispatch = (action) => dispatched.push(action);
    
    const addAlbum = makeAddAlbum(api);
    return addAlbum(album)(dispatch)
      .then(() => {
        expect(dispatched).toEqual([
          { type: ADDING_ALBUM },
          { type: ADDED_ALBUM, payload: album }
        ]);
      });
  });

  it('failed add album', () => {
    const error = 'the error';
    const api = { add: () => Promise.reject(error) };
    const dispatched = [];
    const dispatch = (action) => dispatched.push(action);
    
    const addAlbum = makeAddAlbum(api);
    return addAlbum()(dispatch)
      .then(() => {
        expect(dispatched).toEqual([
          { type: ADDING_ALBUM },
          { type: ADDED_ALBUM_ERROR, payload: 'the error' }
        ]);
      });
  });
});