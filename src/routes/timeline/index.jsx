import React from 'react';
import moment from 'moment';
import {
	withRouter,
} from 'react-router-dom';
import {
	Icon, Button, Timeline,
} from 'antd';
import {
	TIMELINE,
} from 'utils/enum';

class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getColor = (obj) => {
		if (Date.now() < obj.start) {
			return 0;
		} else if (Date.now() <= obj.end) {
			return 1;
		} else {
			return 2;
		}
	}

	render() {
		return (
			<div>
				<Button onClick={() => this.props.history.goBack()} style={{ margin: 10 }} type="primary">
					<Icon type="arrow-left"/>
					<span>返回</span>
				</Button>
				<Timeline className="lb-timeline">
					{
						TIMELINE.map(each => {
							return this.getColor(each) === 1 ? (
								<Timeline.Item
									color="blue"
									dot={<Icon style={{ fontSize: '16px' }} type="clock-circle-o" />}
									key={each.start}
								>
									{`${moment(each.start).format('MM-DD HH:mm')}-${moment(each.end).format('MM-DD HH:mm')}：${each.text}`}
								</Timeline.Item>
							): (
								<Timeline.Item
									color={this.getColor(each) < 1 ? 'green' : 'blue'}
									key={each.start}
								>
									{`${moment(each.start).format('MM-DD HH:mm')}-${moment(each.end).format('MM-DD HH:mm')}：${each.text}`}
								</Timeline.Item>
							);
						})
					}
				</Timeline>
			</div>
		);
	}
}

export default withRouter(Index);
