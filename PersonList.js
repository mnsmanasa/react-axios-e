import React from "react";
import axios from "axios";

class PersonList extends React.Component {
  constructor() {
    super();
    this.state = {
      persons: [],
      id: 0
    };
  }

  componentDidMount() {
  }

  deletePerson = event => {
   
  };

  render() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      console.log(res.data)
    });
    return (
      <div>jgj</div>
    );
  }
}

export default PersonList;
