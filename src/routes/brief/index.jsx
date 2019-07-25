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
				<Collapse className="lb-collapse">
					<Panel header="活动目的" key="aim">
						<p>为了欢迎部门新员工，增进同事之间的相互了解，增强同事对团队和他人的信任，培养团队协作精神，以此让成员有更加积极乐观的心态来面对工作和生活。</p>
					</Panel>
					<Panel header="目标人群" key="people">
						<p>信息安全研发部全员。</p>
					</Panel>
					<Panel header="活动地点" key="place">
						<p>坝上草原是内蒙古高原的重要组成部分，位于北京正北的河北省丰宁满族自治县，是离北京最近的天然草原，又名京北第一草原。</p>
						<p>在如今紧张的都市生活中，到草原上尽情奔放，实在是惬意、浪漫的享受。</p>
						<p>坝上草原属温带季风气候，冬季漫长，夏季无暑，清凉宜人，7月平均气温24度。水草丰茂、富饶美丽、冬夏分明、晨夕各异，是中国北方旅游、休闲、避暑、度假的首选之地。</p>
						<p>其实，在很多人心底，都有个策马奔腾的梦想，都有向往在草原上纵马驰骋的愿望，2019让我们一起带着梦想起飞。</p>
					</Panel>
					<Panel header="活动时间" key="time">
						<p>7月26日13:00 – 7月28日9:30</p>
					</Panel>
					<Panel header="温馨提示" key="tip">
						<p>*出游切记随身携带身份证</p>
						<p>*因草原早晚温差较大，请大家备好衣物；</p>
						<p>*草原蚊虫较多，请大家备好花露水、风油精等；</p>
						<p>*禁止擅自脱离组织，如有特殊情况请汇报活动组长，同意后方可离开；</p>
						<p>*禁止前往危险区域；</p>
						<p>*禁止夜间独自游荡；</p>
						<p>*请备好洗漱用品、防晒霜、移动电源等</p>
						<p>*根据个人需求准备创可贴、消炎药、晕车药等</p>
					</Panel>
					<Panel header="紧急联系人" key="contact">
						<p>赵&nbsp;&nbsp;&nbsp;&nbsp;鹏：18201418656</p>
						<p>高昊祯：13051087731</p>
					</Panel>
				</Collapse>
			</div>
		);
	}
}

export default withRouter(Index);
