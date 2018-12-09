import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Menu = styled.nav`
	padding: 1rem 3rem;
	ul {
		display: flex;
		justify-content: space-between;
		padding: 0;
		li {
			list-style: none;
			a {
				position: relative;
				text-decoration: none;
				z-index: 1;
				overflow: hidden;
				color: #323230;
				padding: 0.5rem 1.2rem;
				transition: .25s cubic-bezier(.895, .03, .685, .22);
				&:before {
					content: '';
					position: absolute;
					top: 0;
					left: 0;
					width: 0;
					height: 100%;
					z-index: -1;
					background: #323230;
					transition: .4s cubic-bezier(.77, 0, .175, 1);
					transform: translateX(-101%);
				}
				&:hover {
					&:before {
						left: 100%;
						width: 100%;
					}
					color: #fff;
				}
				&.active {
					background: #323230;
					color: #fff;
				}
			}
		}
	}
`;

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
			</ul>
		</Menu>
	);
};

export default MainMenu;
