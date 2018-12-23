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
						<p>
							Let's be honest, we don't always use these in day to day development. And we've all been
							there in an interview where we suddenly go blank after being asked what the reduce method
							does.
						</p>
						<p>
							I made this to site 1) Make sure I don't have any more embarrassing interview moments, and
							2) to become a better developer!...(most importantly). These methods will drastically reduce
							your code and make you appreciate how cool they actually are!
						</p>
						<p>Feel free to have a poke around and try some of them yourself!</p>
					</div>
				</ArrayHome>
			</div>
		);
	}
}

export default Home;
