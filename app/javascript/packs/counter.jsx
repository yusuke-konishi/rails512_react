import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {counter: 0};
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <div>
        <div>Counter = {this.state.counter}</div>
        <button onClick={this.increment.bind(this)}>Click me!</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('counter')
);
