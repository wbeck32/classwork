import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import PetDetail from '../pets/PetDetail';
import storesApi from '../../services/storesApi';
import petsApi from '../../services/petsApi';
import ShowError from '../common/ShowError';
import AddStorePet from './AddStorePet';


export default class StoreDetail extends Component {

  constructor(props){
    super(props);
    this.state = {
      store: null,
      error: null
    };
  }

  componentDidMount() {
    const { params } = this.props.match;
    this.fetchStore(params.storeId);
  }



  // TODO: move data logic to container component
  fetchStore(id) {
    storesApi.get(id)
      .then(store => this.setState({ store, error: null }))
      .catch(error => this.setState({ store: null, error }));
  }

  handleAddPet = pet => {
    pet.store = this.state.store._id;
    
    return petsApi.add(pet)
      .then(addedPet => {
        const { store } = this.state;
        const { pets } = store;

        this.setState({
          store: {
            ...store,
            pets: [
              ...pets,
              addedPet
            ]
          }
        });
      });
  }

  render() {
    const { store, error } = this.state;
    const { match } = this.props;
    
    if(error) return <ShowError error={error}/>;
    if(!store) return <div>Loading...</div>;
    
    const { address } = store;

    return (
      <div style={{ position: 'relative' }}>
        <Link to="/stores">&lt; Back to All Stores</Link>
        <h4>{store.name}</h4>
        <section>
          <p>
            {address.street}<br/>
            {address.city}<br/>
            {address.state}<br/>
            {address.zip}
          </p>
        </section>
        <section style={{
          position: 'absolute',
          top: 0, right: 0
        }}>
          <AddStorePet onAdd={this.handleAddPet}/>
        </section>
        <ul>
          {store.pets.map(({ _id, name }) => (
            <li key={_id}>
              <Link to={`${match.url}/pets/${_id}`}>{name}</Link>
            </li>
          ))}
        </ul>
        <Route path={`${match.url}/pets/:petId`} render={({ match }) => (
          <PetDetail petId={match.params.petId}/>
        )}/>
      </div>
    );
  }
}