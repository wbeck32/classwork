import React, { Component } from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

// these would be imported
function Thumbnail() { return <div>Thumbnail</div>; }
function Gallery() { return <div>Gallery</div>; }
function Detail() { return <div>Detail</div>; }

const Views = {
    thumbnail: Thumbnail,
    gallery: Gallery,
    detail: Detail,
}

const views = Object.keys(Views);

export default class ViewSelector extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          view: views[0]
        };
    }

    handleChange = view => {
      this.setState({ view });
    } 

    render() {
      const { view } = this.state;
      return (
        <div>
          <RadioButtons views={views}/>
          <ViewDisplay view={view} images={this.props.images}/>
        </div>
      );
    }
}

function RadioButtons({ views, onChange }) {
  return (
    <RadioGroup onChange={onChange} horizontal>  
      {views.map(view => (
        <RadioButton key={view} value={view}>
          {view}
        </RadioButton>
      ))}
    </RadioGroup>
  );
}

export function ViewDisplay({ view, images }) {
    const View = Views[view];
    return <View images={images}/>
}