import React, { Component } from 'react';
import ShowError from '../common/ShowError';
import { TextInput, NumberInput } from '../common/Input';

export default class AddStorePet extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      pet: this.getNewPet(),
      error: ''
    };
  }

  getNewPet() {
    const { storeId } = this.props;
    return { 
      name: '',
      legs: 4,
      store: storeId
    }; 
  }

  handleChange = (name, value) => {
    this.setState({
      pet: {
        ...this.state.pet, 
        [name]: value 
      }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.pet)
      .then(() => this.setState({ 
        pet: this.getNewPet(),
        error: null
      }))
      .catch(error => {
        this.setState({ error });
      });
  }

  render() {
    const { pet, error } = this.state;

    return (
      <section>
        <h3>Add a New Pet</h3>
        <form onSubmit={this.handleSubmit}>
          <ShowError error={error}/>
          <TextInput label="Name" prop="name" value={pet.name} onChange={({ target }) => this.handleChange(target.name, target.value)}/>
          <NumberInput label="Legs" prop="legs" value={pet.legs} onChange={({ target }) => this.handleChange(target.name, target.value)}/>
          <button type="submit">Add</button>
        </form>
      </section>
    );
  }
}