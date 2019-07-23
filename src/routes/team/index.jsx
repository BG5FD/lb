/* eslint-disable react/jsx-key */
import React from 'react';
import {
	withRouter,
} from 'react-router-dom';
import {
	Card, Button, Icon, Tag,
} from 'antd';
import {
	TEAM_LIST,
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
					TEAM_LIST.map(each => (
						<Card style={{ width: 'calc(100% - 20px)', margin: '10px' }}>
							{
								each.map((e, index) => (
									<Tag color="blue">{e}{index === 0 ? '(组长)' : ''}</Tag>
								))
							}
						</Card>
					))
				}
				<div style={{ color: 'red', margin: 10 }}>各个组长请确认每次小活动时人员齐整</div>
			</div>
		);
	}
}

export default withRouter(Index);
