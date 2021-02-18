import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: { book: [] }
    };
  }
  componentDidMount() {
    fetch("https://api.got.show/api/general/characters")
      .then((response) => response.json())
      .then((users) => this.setState({ characters: { ...users } }))
      .catch((error) => console.log("something went wrong"));
  }
  render() {
    return (
      <div className="App">
        {this.state.characters.book.map((c, index) => (
          <h1 key={index}>
            character=
            <div key={index}>
              <img src={c.image} alt="" />
              <h3>{c.name}</h3>
            </div>
          </h1>
        ))}
      </div>
    );
  }
}

export default App;
