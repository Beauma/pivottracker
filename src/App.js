import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { Welcome } from './components/Welcome';
import AddForm from './components/AddForm';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);


  return (
    <div className="App">
      <Welcome name="User" time={currentTime} />
      <AddForm />
    </div>
  );
}

export default App;
