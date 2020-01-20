import React from "react";
import axios from "axios";

class PersonList extends React.Component {
  state = {
    persons: [],
    id: 0
  };

  UNSAFE_componentWillMount() {
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
        {this.state.persons.map(person => {
          <li key={person.id}>
            {person.name}
            <span
              className="delete-btn"
              id={person.id}
              onClick={this.deletePerson}
            >
              X
            </span>
          </li>;
        })}
      </ul>
    );
  }
}

export default PersonList;