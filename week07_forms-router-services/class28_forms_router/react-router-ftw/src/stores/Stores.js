import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import StoreDetail from './StoreDetail';
import qs from 'qs';

const stores = [
    { _id: 123, name: 'Pearl' },
    { _id: 345, name: 'Downtown' },
    { _id: 567, name: 'Hawthorn' }
];

export default class Stores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: []
    }
  }

  componentDidMount() {
    setTimeout(() => {
        this.setState({ stores });
    });
  }

  render() {
    const { match, location } = this.props;
    const { stores } = this.state;
    const view = qs.parse(location.search.slice(1)).view
    
    return (
      <div>
        <h2>Stores Page</h2>
        <h3>{view}</h3>
        <ul>
          {stores.map(store => <Store 
            key={store._id} {...store} 
            url={`${match.url}/${store._id}?view=${view}`}
            />
          )}
        </ul>
        <Route path={`${match.url}/:storeId`} component={StoreDetail}/>
      </div>
    );
  }
}


function Store({ url, name }) {
    return (
      <li><Link to={url}>{name}</Link></li>   
    );
  }
  