/* eslint-disable react/jsx-key */
import React from 'react';
import {
	withRouter,
} from 'react-router-dom';
import {
	Card, Button, Icon, Tag,
} from 'antd';
import {
	ROOM_LIST,
} from 'utils/enum';

class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<Button onClick={() => this.props.history.goBack()} style={{ margin: 10 }} type="primary">
					<Icon type="arrow-left"/>
					<span>返回</span>
				</Button>
				{
					ROOM_LIST.map(each => (
						<Card style={{ width: 'calc(100% - 20px)', margin: '10px' }}>
							{
								each.map(e => (
									<Tag color="blue">{e}</Tag>
								))
							}
						</Card>
					))
				}
			</div>
		);
	}
}

export default withRouter(Index);
