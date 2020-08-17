import React, { Component } from 'react';
import '../styles/FormStyle.css';

class AddInteractionForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            date: '',
            time: '',
            location: '',
            interviewee: '',
            usedHypos: [],
            people: [],
            hypos: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleMultiChange = this.handleMultiChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        
        //Get people
        const fetchedPeople = fetch('/get-people', {
            method: 'GET'
        });

        fetchedPeople.then(response => 
            response.json().then(data => {
                this.setState({
                    people: {data}
                }); 
            }));

        //Get notnots
        const fetchedHypos = fetch('/get-notnot')

        fetchedHypos.then(response => 
            response.json().then(data => {
                this.setState({
                    hypos: {data}
                });
            }));

    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        //console.log(target)
        //console.log(value)
    
        this.setState({
          [name]: value
        });
      }

      handleMultiChange (e) {
        var options = e.target.options;
        var usedHypos = this.state.usedHypos;
        for (var i = 0, l = options.length; i < l; i++) {
          if (options[i].selected) {
            //console.log(usedHypos.includes(options[i]))
            if (!usedHypos.includes(options[i].value)) {
                usedHypos.push(options[i].value);
            } else {
                usedHypos = usedHypos.filter(hypo => hypo != options[i].value);
            }
        }
        this.setState({usedHypos: usedHypos});
      }
    }

    handleSubmit(event) {
        const toSubmit = {
            date: this.state.date,
            time: this.state.time,
            location: this.state.location,
            interviewee: this.state.interviewee,
            notnots: this.state.usedHypos
        }

        const fetched = fetch('/add-dpi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(toSubmit)
        }); 
        //Reset all to no true 
        Object.keys(this.state).map(
            i => this.setState({ [i]: ''})
          )
    }

    render() {
        const { people } = this.state;

        const { hypos } = this.state;

        let peopleList = people.hasOwnProperty('data') && people.data.map((item, i) => {
            //console.log(typeof item._id.$oid);
            return (
                <option key={i} value={item._id.$oid}>{item.firstName} {item.lastName}</option>
              )
            }, this);

        let hypolist = hypos.hasOwnProperty('data') && hypos.data.map((item, i) => {
            return (
                <option key={i} value={item._id.$oid}>{item.text}</option>
            )
        }, this)


        return (
            <form onSubmit={this.handleSubmit}>
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
                    <select
                        name="interviewee"
                        value={this.state.interviewee}
                        onChange={this.handleChange}>
                        {peopleList}
                    </select>
                </label>
                <br />
                <label>
                    <h4>Hypotheses:</h4>
                    <select multiple
                        name="usedHypos"
                        value={this.state.usedHypos}
                        onChange={this.handleMultiChange}>
                        {hypolist}
                    </select>
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default AddInteractionForm; 