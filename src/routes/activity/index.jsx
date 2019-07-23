import React from 'react';
import {
	withRouter,
} from 'react-router-dom';
import {
	Collapse, Icon, Button,
} from 'antd';

const {
	Panel,
} = Collapse;

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
				<Button onClick={() => this.props.history.push('/rank')} style={{ margin: 10, float: 'right' }} type="primary">
					<Icon type="trophy"/>
					<span>积分排行榜</span>
				</Button>
				<div style={{ color: 'red', margin: 10 }}>对车上除主持人外35个人进行按座位分组，分7组，每组5人进行游戏获取积分，最后按照小组积分进行排名，排名前三的队伍有丰厚奖品呦！！！所以谨慎选择座位！！！</div>
				<Collapse className="lb-collapse">
					<Panel header="猜猜他是谁" key="aim">
						<p>规则：每组选出一个对应挑战组，心中想一个部门成员名字告诉主持人，由挑战组询问问题，该组只能回答是或不是，直到猜出正确答案为止记录该组所提问的问题个数，最后依照提问问题的多少进行排序，提问问题在5个以下的积一分，同时提问问题最少的一个组积一分。</p>
					</Panel>
					<Panel header="成语接龙" key="people">
						<p>规则：由主持人说出一个成语，按组号以此进行成语接龙，3s内若无法接上则淘汰出局，淘汰至最后一组则最后一组获得胜利，该组积一分。</p>
					</Panel>
					<Panel header="猜词游戏" key="place">
						<p>规则：由主持人分发一个词语给每组第一个人，第一个人不能使用只能使用嘴部以外部位进行表演，依次向后传递，此时组内其他成员不得偷看，由最后一名成员说出主持人分发的词语，根据答对字数组内成员依次积1-4分。同时对每组进行计时，计时最少的一组积一分。</p>
					</Panel>
					<Panel header="谁是卧底" key="time">
						<p>规则：每组每轮选出一名代表参加游戏，由主持人发出为每组分发词语，其中一组或两组会拿到和其他组文字不同但意思相近的词语（包括空白），每轮需要每组代表进行对词语进行描述，所有人描述完毕之后进行投票，投出大家认为词语和自己不同的一人，票数最多的一人出局，卧底出局时，普通玩家获胜，该组积一分，当最终卧底数量大于玩家数量时（空白同理），卧底获胜，该组积两分。</p>
					</Panel>
				</Collapse>
			</div>
		);
	}
}

export default withRouter(Index);
