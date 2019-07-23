import React from 'react';
import _ from 'lodash';
import {
	withRouter,
} from 'react-router-dom';
import {
	Menu,
} from 'antd';
import {
	MENU,
} from 'utils/enum';

class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedKey: '',
		};
	}

	handleMenuItemChange = (e) => {
		const {
			key,
		} = e;
		const { uri } = _.find(MENU, { key });
		this.setState({
			selectedKey: key,
		});
		this.props.history.push(uri);
	}

	render() {
		const {
			selectedKey,
		} = this.state;
		return (
			<>
				<Menu
					className="lb-menu"
					onClick={this.handleMenuItemChange}
					selectedKeys={[selectedKey]}
					// theme="dark"
				>
					{
						MENU.map(each => (
							<Menu.Item key={each.key} title={each.title}>
								{each.title}
							</Menu.Item>
						))
					}
				</Menu>
				<div style={{ color: 'red' }}>紧急联系人:18201418656(赵鹏)，13051087731(高昊祯)</div>
			</>
		);
	}
}

export default Index;
