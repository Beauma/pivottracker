import React, { Component } from 'react';
import '../styles/DisplayStyle.css'

class DisplayInteraction extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dpis: []
        }

    }

    componentDidMount() {
        const fetchedInteraction = fetch('/get-dpi', {
            method: 'GET'
        });

        fetchedInteraction.then(response => 
            response.json().then(data => {
                this.setState({
                    dpis: {data}
                })
            }))
    }

    getPerson(id) {
        
        var url = new URL('/get-people'),
            params = {_id:id}
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

        const fetchedPeople = fetch('/get-people', {
            method: 'GET'
        });

        fetchedPeople.then(response => 
            response.json().then(data => {
                return {data}
            }));
    }

    render() {

    const { dpis } = this.state

    let peopleList = dpis.hasOwnProperty('data') && dpis.data.map((item, i) => {
        console.log(typeof item._id.$oid);
        return (
            <li key={i} value={item._id.$oid}>{this.getPerson(item.interviewee)}</li>
        )
    }, this);

        return (
            <div className="left">
                <ul>
                    {peopleList}
                </ul>
            </div>
        )
    }
}

export default DisplayInteraction