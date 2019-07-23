import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Index from 'routes';
import NotFound from 'routes/notFound';

const AppRouter = () => {
	return (
    <HashRouter>
			<Switch>
				<Route component={Index} exact path="/" />
				<Route component={NotFound} />
			</Switch>
    </HashRouter>
  );
};

export default AppRouter;
