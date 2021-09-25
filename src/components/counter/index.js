import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  onChangeValue = (value) =>
    this.setState((prevState) => {
      return { count: prevState.count + value };
    });

  render() {
    return (
      <div>
        <p>Clicked: {this.state.count} times</p>
        <button onClick={() => this.onChangeValue(-1)}>Dec</button>
        <button onClick={() => this.onChangeValue(1)}>Inc</button>
      </div>
    );
  }
}
