import React from 'react';
import Header from './Header';
import styled from 'styled-components';

const PageHeader = styled.h1`font-size: 5rem;`;

const ArrayHome = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	align-content: center;
	height: 100vh;
	h1,
	.codeblock {
		width: 100%;
	}
`;

class Home extends React.Component {
	state = {
		pageName: 'Array Methods'
	};

	render() {
		return (
			<div>
				<Header />
				<ArrayHome className="array-home">
					<PageHeader>{this.state.pageName}</PageHeader>
					<div className="code-block">
						<p>Welcome to a page that introduces array methods!</p>
					</div>
				</ArrayHome>
			</div>
		);
	}
}

export default Home;
