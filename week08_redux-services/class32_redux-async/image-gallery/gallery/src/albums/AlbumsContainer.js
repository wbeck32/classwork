import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAlbums, addAlbum } from './actions';

import Albums from './Albums';

function mapStateToProps(state) {
  return {
    albums: state.albums,
    error: state.albumsError,
    loading: state.albumsLoading
  };
}

function mapDispatchToProps(dispatch) {
  // This is dispatching the "getAlbums()" action right now!
  dispatch(getAlbums());
  return bindActionCreators({ addAlbum }, dispatch);
}

const AlbumsContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(Albums);

// export the wrapper
export default AlbumsContainer;
