import React, { Component } from 'react';
import toysApi from '../../services/toysApi';
import ShowError from '../common/ShowError';

export default function withToys(ComposedComponent) {

  // we put the class definition in a function closure
  // so we use the passed ComposedComponent
  return class ToysContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        toys: null,
        error: null
      };
    }

    // data access using our service class
    // this is the initial GET
    componentDidMount() {
      toysApi.getAll()
        .then(toys => {
          this.setState({ toys, error: null });
        })
        .catch(error => {
          this.setState({ error });
        });
    }

    // Add a store.
    // THIS component is responsible for the toys state,
    // hence it modifies the toys array (immutable style)
    handleAdd = toy => {
      return toysApi.add(toy)
        .then(saved => {
          this.setState({
            toys: [...this.state.toys, saved]
          });
        });
    }

    // same for delete
    handleDelete = (id, index) => {
      return toysApi.remove(id)
        .then(() => {
          const { toys } = this.state;
          this.setState({
            toys: [...toys.slice(0, index), ...toys.slice(index + 1)]
          });
        });
    }

    render() {
      const { toys, error } = this.state;

      // initial get error?
      if(error) return <ShowError error={error}/>;

      // don't render if no toys
      if(!toys) return null;

      /*pass in:
        spread this.props -> forward any props StoresContainer component was passed
        toys -> the data we fetched
        onAdd and onDelete -> methods for modifying the toys list
      */
      return <ComposedComponent {...this.props} 
        toys={toys}
        onAdd={this.handleAdd}
        onDelete={this.handleDelete}/>;
    }
  };
}