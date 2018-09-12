import * as React from "react";

interface IProps {
  name: string;
}

interface IState {
  count: number;
}

export class SubComponent01 extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick() {
    console.log('clicked...');

    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <div>{this.state.count}</div>
        <button onClick={this.handleClick.bind(this)}>Add +1</button>
      </div>
    );
  }
}

