import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import PersonList from './PersonList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
      <PersonList/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
