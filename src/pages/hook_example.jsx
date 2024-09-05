import React from "react";

class Counter extends React.Component {
    constructor() {
      super();
      this.state = { count: 0 };
    }
  
    // componentDidMount() {
    //   document.title = `You clicked ${this.state.count} times`;
    // }
  
    // componentDidUpdate() {
    //   document.title = `You clicked ${this.state.count} times`;
    // }
  
    render() {
      return (
        <div>
          <p>You clicked {this.state.count} times</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Click me
          </button>
        </div>
      );
    }
  }
  export default Counter;
  