import React, { Component } from 'react';

const defaultImage = {
    title: '',
    description: '',
    url: '',
    certified: false
};

export default class ControlledAddImage extends Component {
    
    constructor(props) {
        super(props);
        const { image } = props; 
        this.state = { ...image };
    }

    handleChange = (name, value) => {
        this.setState({
            [name]: value
        });
    }

    handleSubmit = () => {
        this.props.onAdd(this.state);
        this.setState({ ...defaultImage });
    }

    resetImage = () => {
        this.setState({ ...this.props.image });
    }

    render() {
        const { title, description, url, certified } = this.state;
        const { onAdd } = this.props;

        return (
            <section>
                <h4>Add a new image</h4>
                <pre>{JSON.stringify(this.state, true, 2)}</pre>
                <form 
                    onSubmit={event => {
                        event.preventDefault();
                        this.handleSubmit();
                    }}
                    onReset={event => {
                        event.preventDefault();
                        this.resetImage()
                    }}>
                    <label>
                        title: 
                        <input name="title" value={title} 
                            onChange={({ target }) => this.handleChange(target.name, target.value)}/>
                    </label>
                    <label>
                        description: 
                        <input name="description" value={description} 
                            onChange={({ target }) => this.handleChange(target.name, target.value)}/>
                    </label>
                    <label>
                        url: <input name="url" value={url}
                            onChange={({ target }) => this.handleChange(target.name, target.value)}/>
                    </label>
                    <label>
                        certified: <input name="certified" type="checkbox"
                            checked={certified} 
                            onChange={({ target }) => this.handleChange(target.name, target.checked)}/>
                    </label>
                    <button type="reset">Reset</button>
                    <button type="submit">Save</button>
                </form>
            </section>
        );
    }
}