import React, { Component } from 'react';
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
            <button onClick={this.showMessage}>Add Person</button>
            { this.state.showMessage && <AddPersonForm /> }
            </div>
        )
    }
}

export default AddController; 