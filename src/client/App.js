import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.state = { username: null };
  }

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
    // this.setState({ username: 'francisco'})
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        { username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
      </div>
    );
  }
}

export default App;
