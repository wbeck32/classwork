import * as actions from './constants';
import api from '../api/albumsApi';

export function makeGetAlbums(api) {
  return function() {
    return function(dispatch) {
      dispatch({ type: actions.FETCHING_ALBUMS });
      
      return api.getAll()
        .then(
          albums => {
            dispatch({ type: actions.FETCHED_ALBUMS, payload: albums });
          },
          error => {
            dispatch({ type: actions.FETCHED_ALBUMS_ERROR, payload: error.error });
          }
        );
    };
  };
}

export const getAlbums = makeGetAlbums(api);

export const makeAddAlbum = api => album => dispatch => {

  dispatch({ type: actions.ADDING_ALBUM });
  
  return api.add(album)
    .then(
      saved => {
        dispatch({ type: actions.ADDED_ALBUM, payload: saved });
      },
      err => {
        dispatch({ type: actions.ADDED_ALBUM_ERROR, payload: err });
      }
    );
};

export const addAlbum = makeAddAlbum(api);
