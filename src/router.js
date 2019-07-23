import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Index from 'routes';
import NotFound from 'routes/notFound';
import Brief from 'routes/brief';
import Timeline from 'routes/timeline';
import Room from 'routes/room';
import Team from 'routes/team';
import Activity from 'routes/activity';
import Rank from 'routes/rank';
import Admin from 'routes/admin';

const AppRouter = () => {
	return (
    <HashRouter>
			<Switch>
				<Route component={Index} exact path="/" />
				<Route component={Brief} exact path="/brief" />
				<Route component={Timeline} exact path="/timeline" />
				<Route component={Room} exact path="/room" />
				<Route component={Team} exact path="/team" />
				<Route component={Activity} exact path="/activity" />
				<Route component={Rank} exact path="/rank" />
				<Route component={Admin} exact path="/admin" />
			</Switch>
    </HashRouter>
  );
};

export default AppRouter;
