
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ballRendered: false,
      position: 0
    };

    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  // Start the game
  buttonClickHandler() {
    this.setState({
      ballRendered: true
    });
  }

  // Detect keyboard events
  handleKeyDown(event) {
    if (event.keyCode === 39 && this.state.ballRendered) {
      this.setState((prevState) => ({
        position: prevState.position + 5
      }));
    }
  }

  // Add event listener when component loads
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  // Remove event listener when component is removed
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  // Decide whether to show button or ball
  renderChoice() {
    if (!this.state.ballRendered) {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    }

    return (
      <div
        className="ball"
        style={{
          left: `${this.state.position}px`
        }}
      ></div>
    );
  }

  render() {
    return (
      <div className="game">
        {this.renderChoice()}
      </div>
    );
  }
}

export default App;
