import React from 'react';
import Header from './Header';
import styled from 'styled-components';

const PageHeader = styled.h1`font-size: 5rem;`;

class Home extends React.Component {
	state = {
		pageName: 'Array Methods'
	};

	render() {
		return (
			<div>
				<Header />
				<PageHeader>{this.state.pageName}</PageHeader>
				<div className="code-block">
					<p>Welcome to a lil page that introduces array methods!</p>
				</div>
			</div>
		);
	}
}

export default Home;
