import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';


// function PetDetail({ match }) {
//   return <div>Pet Detail...{match.params.petId}</div>
// }

export default class StoreDetail extends Component {

    constructor(props){
        super(props);

        // this.state = {
        //         store: null
        // };
    }

    componentDidMount() {
        const { params } = this.props.match;
        // this.fetchStore(params.storeId);
    }

    componentWillReceiveProps(nextProps) {
      const nextStoreId = nextProps.match.params.storeId;
      if(nextStoreId !== this.props.match.params.storeId) {
        //this.fetchStore(nextStoreId);
      }
    }

	render() {
      const { match } = this.props;

      return (
        <div>
          <h4>Store Detail for: {match.params.storeId}</h4>
        </div>
      );
		}
}