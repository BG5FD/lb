import React from 'react';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 1,
		};
	}

	handleClick = () => {
		const {
			value,
		} = this.state;
		this.setState({
			value: value + 1,
		});
	}

	render() {
		return (
			<>
				<div className="theme">Hello World1qwwq2!</div>
				<div>{this.state.value}</div>
				<button onClick={this.handleClick}>button</button>
			</>
		);
	}
}

export default Home;
