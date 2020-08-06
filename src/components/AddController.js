import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';

import AddPersonForm from './AddPersonForm'

class AddController extends Component {

    constructor(props) {
        super(props);

        this.state = { showMessage: false }

        this.showMessage = this.showMessage.bind(this);
    }

    showMessage(event) {
        this.setState({
            showMessage: true
        }); 
    }

    render() {
        return (
            <div>
            <button onClick={this.props.toggle}>Add Person</button>
            { this.state.showMessage && <AddPersonForm /> }
            </div>
        )
    }
}

export default AddController; 