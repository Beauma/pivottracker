import React, {Component, useState, useEffect} from 'react';
import { Transition, animated } from 'react-spring/renderprops'
import logo from './logo.svg';
import './App.css';
import { Welcome } from './components/Welcome';
import AddPersonForm from './components/AddPersonForm';
import AddController from "./components/AddController";
import AddInteractionForm from './components/AddInteractionForm.js';
import AddHypothesisForm from './components/AddHypothesisForm'; 
import DisplayInteraction from './components/DisplayInteraction'

class App extends Component {

  state = {
    showAddPerson: false, 
    showAddInteraction: false,
    showAddHypothesis: false
  }
  //const [currentTime, setCurrentTime] = useState(0);

  //const [showAddPerson, setAddPerson] = useState(false);

  /*
  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);
  */

  togglePerson = e => {
    Object.keys(this.state).map(
      i => this.setState({ [i]: false})
    )
    this.setState({ showAddPerson: !this.state.showAddPerson })
  }

  toggleInteraction = e => {
    Object.keys(this.state).map(
      i => this.setState({ [i]: false})
    )
    this.setState({ showAddInteraction: !this.state.showAddInteraction })
  }

  toggleHypothesis = e => {
    Object.keys(this.state).map(
      i => this.setState({ [i]: false})
    )
    this.setState({ showAddHypothesis: !this.state.showAddHypothesis })
  }

  render () {
    return (
    <div className="App">
      <Welcome name="User" time={2} />

      <DisplayInteraction />

      <AddController 
        togglePerson={this.togglePerson}
        toggleInteraction={this.toggleInteraction}
        toggleHypothesis={this.toggleHypothesis}/>

      <Transition
        items={this.state.showAddPerson}
        from={{opacity: 0}}
        enter={{opacity: 1}}
        leave={{opacity: 0}}>
        {show => show && (props => (
          <animated.div style={props}>
            <AddPersonForm />
          </animated.div>
        ))}
      </Transition>

      <Transition
        items={this.state.showAddInteraction}
        from={{opacity: 0}}
        enter={{opacity: 1}}
        leave={{opacity: 0}}>
        {show => show && (props => (
          <animated.div style={props}>
            <AddInteractionForm />
          </animated.div>
        ))}
      </Transition>

      <Transition
        items={this.state.showAddHypothesis}
        from={{opacity: 0}}
        enter={{opacity: 1}}
        leave={{opacity: 0}}>
        {show => show && (props => (
          <animated.div style={props}>
            <AddHypothesisForm />
          </animated.div>
        ))}
      </Transition>

    </div>
    )
  };
}

export default App;
