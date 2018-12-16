import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Pop from './Pop';
import Push from './Push';
import Shift from './Shift';
import Unshift from './Unshift';
import Filter from './Filter';
import Map from './Map';
import Reduce from './Reduce';
import '../App.css';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={App} />
			<Route exact path="/pop" component={Pop} />
			<Route exact path="/push" component={Push} />
			<Route exact path="/shift" component={Shift} />
			<Route exact path="/unshift" component={Unshift} />
			<Route exact path="/filter" component={Filter} />
			<Route exact path="/map" component={Map} />
			<Route exact path="/reduce" component={Reduce} />
		</Switch>
	</BrowserRouter>
);

export default Router;
