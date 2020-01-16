import React from "react";
import axios from "axios";
import { CSSTransitionGroup } from 'react-transition-group';

class PersonList extends React.Component {
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
        this.setState({
          persons: this.state.persons.filter(person => {
            return person.id !== Number(id);
          })
        });
      });
  };

  render() {
    const items = this.state.persons.map(person => {
      <li key={person.id}>
        {person.name}
        <span className="delete-btn" id={person.id} onClick={this.deletePerson}>
          X
        </span>
      </li>;
    });
      // <CSSTransitionGroup
        //   transitionName="example"
        //   transitionEnterTimeout={500}
        //   transitionLeaveTimeout={300}
        // >
        // </CSSTransitionGroup>
    return (
      <ul>        
          {items}        
      </ul>
    )
  }
}

export default PersonList;
