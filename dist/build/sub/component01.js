import * as React from "/esm/react-esm.js";
export class SubComponent01 extends React.Component {
    constructor(props) {
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
        return (React.createElement("div", null,
            React.createElement("h2", null, this.props.name),
            React.createElement("div", null, this.state.count),
            React.createElement("button", { onClick: this.handleClick.bind(this) }, "Add +1")));
    }
}
