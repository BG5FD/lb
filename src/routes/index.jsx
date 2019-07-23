import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				Hello World!1sd212ads
				<Link to="/example">About</Link>
				<button onClick={() => { this.props.history.push('/example') }}>
					button1
				</button>
			</div>
		);
	}
}

export default Index;
