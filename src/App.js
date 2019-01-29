import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Form from './components/FormStudents';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="App">
          < Header />
          < Form />
        </div >
      </div>
    );
  }
}

export default App;
