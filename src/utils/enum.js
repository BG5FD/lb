import moment from 'moment';

export const MENU = [{
	key: 'BRIEF',
	title: '活动简介',
	uri: '/brief',
}, {
	key: 'TIMELINE',
	title: '时间安排',
	uri: '/timeline',
}, {
	key: 'ROOM',
	title: '房间安排',
	uri: '/room',
}, {
	key: 'TEAM',
	title: '人员分组',
	uri: '/team',
}, {
	key: 'ACTIVITY',
	title: '大巴活动',
	uri: '/activity',
}];

export const TIMELINE = [{
	start: moment('2019-07-26 13:30'),
	end: moment('2019-07-26 18:30'),
	text: '乘坐大巴前往目的地（车上团建小活动）',
}, {
	start: moment('2019-07-26 19:00'),
	end: moment('2019-07-26 24:00'),
	text: '晚饭、饭后娱乐（棋牌、麻将、ktv等）',
}, {
	start: moment('2019-07-27 8:30'),
	end: moment('2019-07-27 9:00'),
	text: '早餐',
}, {
	start: moment('2019-07-27 9:10'),
	end: moment('2019-07-27 11:30'),
	text: '草原骑马、草原小游戏',
}, {
	start: moment('2019-07-27 12:00'),
	end: moment('2019-07-27 14:00'),
	text: '午餐、午休',
}, {
	start: moment('2019-07-27 14:20'),
	end: moment('2019-07-27 17:30'),
	text: '皇家鹿苑',
}, {
	start: moment('2019-07-27 18:00'),
	end: moment('2019-07-27 24:00'),
	text: '特色烤全羊，各种烧烤、啤酒、农家饭等等。饭后娱乐（棋牌、麻将、ktv等）',
}, {
	start: moment('2019-07-28 8:00'),
	end: moment('2019-07-28 9:00'),
	text: '早餐',
}, {
	start: moment('2019-07-28 9:00'),
	end: moment('2019-07-28 14:00'),
	text: '乘坐大巴返程',
}];
