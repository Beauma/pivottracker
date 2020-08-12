import React, { Component } from 'react';
import '../styles/FormStyle.css';

class AddInteractionForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            date: '',
            time: '',
            location: '',
            people: []
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const fetched = fetch('/get-people', {
            method: 'GET'
        });

        //console.log(fetched)

        fetched.then(response => 
            response.json().then(data => {
                //console.log(data)
                this.setState({
                    people: {data}
                }); 
            }));
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    render() {
        const { people } = this.state;

        let peopleList = people.hasOwnProperty('data') && people.data.map((item, i) => {
            //console.log(item._id);
            return (
                <option key={i} value={item._id}>{item.firstName} {item.lastName}</option>
              )
            }, this);


        return (
            <form>
                <label>
                    <h4>Date:</h4>
                    <input
                        name="date"
                        type="date"
                        value={this.state.date}
                        onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    <h4>Time:</h4>
                    <input
                        name="time"
                        type="time"
                        value={this.state.time}
                        onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    <h4>Location:</h4>
                    <input
                        name="location"
                        type="text"
                        value={this.state.location}
                        onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    <h4>Interviewee:</h4>
                    <select>
                        {peopleList}
                    </select>
                </label>
            </form>
        )
    }
}

export default AddInteractionForm; 