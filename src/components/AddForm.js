import React, { Component } from 'react';

class AddForm extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            firstName: '', 
            lastName: '', 
            company: '',
            email: ''
        };

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
    console.log(this.state);
    const fetched = fetch('/add-people', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(this.state)
    }); 
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input 
            name="firstName"
            type="text" 
            value={this.state.firstName} 
            onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input 
            name="lastName"
            type="text" 
            value={this.state.lastName} 
            onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Company:
          <input 
            name="company"
            type="text" 
            value={this.state.company} 
            onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input 
            name="email"
            type="text" 
            value={this.state.email} 
            onChange={this.handleChange} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddForm; 