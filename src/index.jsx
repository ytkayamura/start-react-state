import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Parent Component
class App extends Component {
  constructor() {
    super();
    this.state = {
      messageBase: 'Hello React Redux',
      message: 'Hello React Redux!',
      count: 1,
    };
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  // Handler
  incrementCount() {
    const { messageBase, count } = this.state;
    const nxCount = count + 1;
    this.setState({
      ...this.state,
      message: messageBase + '!'.repeat(nxCount),
      count: nxCount,
    });
  }
  decrementCount() {
    const { messageBase, count } = this.state;
    const nxCount = count > 0 ? count - 1 : 0;
    this.setState({
      ...this.state,
      message: messageBase + '!'.repeat(nxCount),
      count: nxCount,
    });
  }

  render() {
    const { message } = this.state;
    return (
      <div>
        <div>{message}</div>
        <PlusMinusButton plusMinus={'+'} changeCount={this.incrementCount} />
        <PlusMinusButton plusMinus={'-'} changeCount={this.decrementCount} />
      </div>
    );
  }
}

// Child Component
const PlusMinusButton = ({ plusMinus, changeCount }) => {
  if(plusMinus === '+') {
    return (
      <button onClick={changeCount}>+</button>
    );
  } else {
    return (
      <button onClick={changeCount}>-</button>
    );
  }
};

// Initialization
ReactDOM.render(<App/>, document.getElementById('app'));

