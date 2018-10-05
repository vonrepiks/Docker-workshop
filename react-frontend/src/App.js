import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null
    };
  }

  componentDidMount() {
    fetch('http://localhost:4000/users')
      .then((res) => res.json())
      .then((users) => {
        console.log(users);
        this.setState({
          users
        })
      });
  }

  render() {
    const { users } = this.state;
    if (!users) {
      return null;
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          {users.map((user) => {
            return <h3 key={user.id}>{`${user.first_name} ${user.last_name}`}</h3>
          })}
          </a>
        </header>
      </div>
    );
  }
}

export default App;
