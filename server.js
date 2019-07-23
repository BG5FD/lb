const express = require('express');
const _ = require('lodash');
const app = express();
const port = 9999;

let data = [{
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
	score: 1,
}, {
	id: 7,
	score: 0,
}];

app.get('/getRankList', (req, res) => {
	const resData = {
		success: true,
		data: _.orderBy(data, 'score', 'desc'),
	};
	console.log(resData);
  res.json(resData);
});

app.get('/setScore', (req, res) => {
	console.log(req.query);
	const id = parseInt(req.query.id);
	const score = parseInt(req.query.score);
	const obj = _.find(data, { id });
	obj.id = id;
	obj.score = score;
	const resData = {
		success: true,
		data: _.orderBy(data, 'score', 'desc'),
	};
	console.log(resData);
  res.json(resData);
});


app.listen(9999, () => {
    console.log('启动成功,路径：' + '127.0.0.1:' + port);
});
