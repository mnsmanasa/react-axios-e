import React from "react";
import axios from "axios";

class PersonList extends React.Component {
  constructor() {
    super();
    this.state = {
      persons: []
    };
  }

  deletePerson = event => {
    var id = event.target.id;
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        console.log(res);
        // this.setState({
        //   persons: this.state.persons.filter(person => {
        //     return person.id !== Number(id);
        //   })
        // });
      });
  };

  UNSAFE_componentWillMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      const persons = res.data;
      console.log(persons);
      this.setState({ persons: persons });
    });
  }

  render() {
    console.log(this.state.persons, "render");
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
