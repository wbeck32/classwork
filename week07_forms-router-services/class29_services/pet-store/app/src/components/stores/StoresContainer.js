import React, { Component } from 'react';
import storesApi from '../../services/storesApi';
import Stores from './Stores';

// The purpose of this function is to return a new Class
// (not an instance like <Component/>, but a new Class 
// StoresContainer).
export default class StoresContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: null,
      error: null
    };
  }

  // data access using our service class
  // this is the initial GET
  componentDidMount() {
    storesApi.getAll()
      .then(stores => {
        this.setState({ stores });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  // Add a store.
  // THIS component is responsible for the stores state,
  // hence it modifies the stores array (immutable style)
  handleAdd = (store) => {
    return storesApi.add(store)
      .then(saved => {
        this.setState({
          stores: [...this.state.stores, saved]
        });
      });
  }

  // same for delete
  handleDelete = (id, index) => {
    return storesApi.remove(id)
      .then(() => {
        const { stores } = this.state;
        this.setState({
          stores: [...stores.slice(0, index), ...stores.slice(index + 1)]
        });
      });
  }

  render() {
    const { stores } = this.state;
    // don't render if no stores
    if(!stores) return null;

    /*pass in:
      spread this.props -> forward any props StoresContainer component was passed
      stores -> the data we fetched
      onAdd and onDelete -> methods for modifying the stores list
    */
    return <Stores {...this.props} 
      stores={stores}
      onAdd={this.handleAdd}
      onDelete={this.handleDelete}/>;
  }
};