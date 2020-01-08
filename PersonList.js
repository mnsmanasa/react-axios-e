import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
  constructor() {
    super()
    this.state = {
      persons: []
    };
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      const persons = res.data;
      console.log(persons)
      this.setState({persons: persons})
    });
  }

  render() {
    return (
      <ul>
        { this.state.persons.map((person) => <li key={person.id}>{person.name}</li>)}
      </ul>
    );
  }
}
