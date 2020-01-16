import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    persons: [],
    id: 0
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  deletePerson = event => {
    var id = event.target.id;
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        console.log(res);
        this.setState({
          persons: this.state.persons.filter(person => {
            return person.id !== Number(id);
          })
        });
      });
  };

  render() {
    return (
      <ul>
        {this.state.persons.map(person => (
          <li id={person.id} onClick={this.deletePerson} key={person.id}>
            {person.name}
          </li>
        ))}
      </ul>
    );
  }
}
