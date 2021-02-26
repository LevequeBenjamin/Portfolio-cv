import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App = () => {
	return (
		<>
			<HashRouter>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/competences" component={Knowledges} />
					<Route path="/portfolio" component={Portfolio} />
					<Route path="/contact" component={Contact} />
					<Route component={NotFound} />
				</Switch>
			</HashRouter>
		</>
	);
};

export default App;
