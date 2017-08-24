import React, { Component } from 'react';
import ShowError from '../common/ShowError';
import { TextInput, CheckboxInput } from '../common/Input';

export default class AddToy extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      toy: this.getNewToy(),
      error: ''
    };
  }

  getNewToy() {
    return { 
      name: '',
      color: '',
      silent: true
    }; 
  }

  handleChange = (name, value) => {
    this.setState({
      toy: {
        ...this.state.toy, 
        [name]: value 
      }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.toy)
      .then(() => this.setState({ 
        toy: this.getNewToy(),
        error: null
      }))
      .catch(error => {
        this.setState({ error });
      });
  }

  render() {
    const { toy, error } = this.state;

    return (
      <section>
        <h3>Add a New Toy</h3>
        <form onSubmit={this.handleSubmit}>
          <ShowError error={error}/>
          <TextInput label="Name" prop="name" value={toy.name} onChange={({ target }) => this.handleChange(target.name, target.value)}/>
          <TextInput label="Color" prop="color" value={toy.color} onChange={({ target }) => this.handleChange(target.name, target.value)}/>
          <CheckboxInput label="Silent" prop="silent" value={toy.silent} onChange={({ target }) => this.handleChange(target.name, target.checked)}/>
          <button type="submit">Add</button>
        </form>
      </section>
    );
  }
}