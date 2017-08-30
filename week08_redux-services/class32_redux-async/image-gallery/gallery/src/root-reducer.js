import { combineReducers } from 'redux';
import { albums, albumsError, albumsLoading } from './albums/reducers';
// import { images, imagesError, imagesLoading } from '../images/reducers';

export default combineReducers({
  albums: albums,
  albumsError: albumsError,
  albumsLoading: albumsLoading
});