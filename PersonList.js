import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  delete=(event)=> {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${event.target.id}`)
      .then(res => {
        const persons = res.data;
        console.log(res.data)
        // this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li id={person.id} onClick={this.delete} key={person.id}>{person.name}</li>)}
      </ul>
    )
  }
} 