import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from './styles/Menu';

const MainMenu = () => {
	return (
		<Menu className="main-menu">
			<ul>
				<li>
					<NavLink href="pop" to="/pop" activeClassName="active">
						Pop
					</NavLink>
				</li>
				<li>
					<NavLink href="push" to="/push" activeClassName="active">
						Push
					</NavLink>
				</li>
				<li>
					<NavLink href="shift" to="/shift" activeClassName="active">
						Shift
					</NavLink>
				</li>
				<li>
					<NavLink href="unshift" to="/unshift" activeClassName="active">
						Unshift
					</NavLink>
				</li>
				<li>
					<NavLink href="filter" to="/filter" activeClassName="active">
						Filter
					</NavLink>
				</li>
				<li>
					<NavLink href="map" to="/map" activeClassName="active">
						Map
					</NavLink>
				</li>
				<li>
					<NavLink href="reduce" to="/reduce" activeClassName="active">
						Reduce
					</NavLink>
				</li>
			</ul>
		</Menu>
	);
};

export default MainMenu;
