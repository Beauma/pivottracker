import React, { Component } from 'react';
import '../styles/FormStyle.css';

class AddHypothesisForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    handleSubmit(event) {
        const fetched = fetch('/add-notnot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(this.state)
        }); 
        //Clear text 
        this.state = {
            text: ''
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <h4>Hypothesis:</h4>
                    <textarea
                        name="text"
                        value={this.state.text}
                        onChange={this.handleChange} />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default AddHypothesisForm 