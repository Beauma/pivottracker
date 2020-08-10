import React, {Component, useState, useEffect} from 'react';
import { Transition, animated } from 'react-spring/renderprops'
import logo from './logo.svg';
import './App.css';
import { Welcome } from './components/Welcome';
import AddPersonForm from './components/AddPersonForm';
import AddController from "./components/AddController";

class App extends Component {

  state = {
    showAddPerson: false
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

  toggle = e => (
    this.setState({ showAddPerson: !this.state.showAddPerson })
  )

  render () {
    return (
    <div className="App">
      <Welcome name="User" time={2} />
      <AddController toggle={this.toggle}/>
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
    </div>
    )
  };
}

export default App;
