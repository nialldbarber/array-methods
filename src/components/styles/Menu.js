import styled from 'styled-components';

const Menu = styled.nav`
	position: fixed;
	top: 0;
	background: pink;
	padding: 0;
	padding: 1rem 0;
	background: #f0db4e;
	box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.05);
	ul {
		padding: 0;
		display: flex;
		justify-content: space-around;
		width: 100vw;
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

export default Menu;
