/* eslint-disable react/sort-comp */
import React from 'react';
import _ from 'lodash';
import {
	withRouter,
} from 'react-router-dom';
import request from 'utils/request';
import api from 'utils/enum-api';
import {
	Input, message,
} from 'antd';

const {
	Search,
} = Input;

class Index extends React.Component {
	columns = [
		{
			title: '排名',
      render: (text, record, index) => index + 1,
		},
		{
			title: '组号',
			dataIndex: 'id',
			render: text => `第${text}组`,
		},
		{
			title: '积分',
			dataIndex: 'score',
		},
	];

	constructor(props) {
		super(props);
		this.state = {
			data: [{
				id: 1,
				score: 0,
			}, {
				id: 2,
				score: 0,
			}, {
				id: 3,
				score: 0,
			}, {
				id: 4,
				score: 0,
			}, {
				id: 5,
				score: 0,
			}, {
				id: 6,
				score: 0,
			}, {
				id: 7,
				score: 0,
			}]
		};
	}

	componentDidMount = () => {
		const params = {};
		const {
			getRankList,
		} = api;
    request(getRankList, 'get', params).then(res => {
			if (res.success) {
				this.setState({
					data: _.orderBy(res.data, 'id', 'asc'),
				});
			} else {
				message.error('数据获取失败！');
			}
		});
	}

	handleSetScore = (id, value) => {
		const params = {
			id,
			score: value,
		};
		const {
			setScore,
		} = api;
    request(setScore, 'get', params).then(res => {
			if (res.success) {
				this.setState({
					data: _.orderBy(res.data, 'id', 'asc'),
				});
			} else {
				message.error('修改失败');
			}
		});
	}

	render() {
		const { data } = this.state;
		return (
			<div>
				{
					data.map(each => (
						<div key={each.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', margin: 10 }}>
							<label style={{ width: 300, fontSize: 24 }}>第{each.id}组({each.score}分)：</label>
							<Search
								enterButton="确认"
								onSearch={(value) => this.handleSetScore(each.id, value)}
								size="large"
							/>
						</div>
					))
				}
			</div>
		);
	}
}

export default withRouter(Index);
