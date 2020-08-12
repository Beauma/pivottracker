import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import '../styles/FormStyle.css';

import AddPersonForm from './AddPersonForm'

class AddController extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <button className="right" onClick={this.props.togglePerson}>Add<br />Person</button>
            <button className="right" onClick={this.props.toggleInteraction}>Add<br />DPI</button>
            <button className="right" onClick={this.props.toggleHypothesis}>Add<br />Notnot</button>
            </div>
        )
    }
}

export default AddController; 