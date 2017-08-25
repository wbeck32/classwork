import React, { Component } from 'react';
import ShowError from '../common/ShowError';
import { TextInput } from '../common/Input';

export default class AddStore extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      store: this.getNewStore(),
      error: ''
    };
  }

  getNewStore() {
    return { 
      name: '',
      address: {
        street: '',
        city: '',
        state: '',
        zip: ''
      }
    }; 
  }

  // each form field change, update the store state
  handleNameChange = name => {
    this.setState({
      store: {
        ...this.state.store, 
        name 
      }
    });
  }

  // each form field change, update the store state
  handleAddressChange = ({ target }) => {
    const { store } = this.state;
    const { address } = store;
    this.setState({
      store: {
        ...store, 
        address: {
          ...address,
          [target.name]: target.value 
        }
      }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // call the onAdd prop
    this.props.onAdd(this.state.store)
      // but use the promise to wait and see
      // what to do.
      // success? reset form and clear any error
      .then(() => this.setState({ 
        store: this.getNewStore(),
        error: null
      }))
      // failure? show the error.
      // this means the data will still be in the form
      // so user can correct or change
      .catch(error => {
        this.setState({ error });
      });
  }

  render() {
    const { store, error } = this.state;
    const { address } = store;

    return (
      <section>
        <h3>Add a New Store</h3>
        <form onSubmit={this.handleSubmit}>
          <ShowError error={error}/>
          <TextInput label="Name" prop="name" value={store.name} onChange={({ target }) => this.handleNameChange(target.value)}/>
          <TextInput label="Street" prop="street" value={address.street} onChange={this.handleAddressChange}/>
          <TextInput label="City" prop="city" value={address.city} onChange={this.handleAddressChange}/>
          <TextInput label="State" prop="state" value={address.state} onChange={this.handleAddressChange}/>
          <TextInput label="Zip" prop="zip" value={address.zip} onChange={this.handleAddressChange}/>
          <button type="submit">Add</button>
        </form>
      </section>
    );
  }
}