import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Pop from './Pop';
import Push from './Push';
import Shift from './Shift';
import Unshift from './Unshift';
import '../App.css';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/pop" component={Pop} />
			<Route exact path="/push" component={Push} />
			<Route exact path="/shift" component={Shift} />
			<Route exact path="/unshift" component={Unshift} />
		</Switch>
	</BrowserRouter>
);

export default Router;
