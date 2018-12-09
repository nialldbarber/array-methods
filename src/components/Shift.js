import React from 'react';
import Header from './Header';
import styled from 'styled-components';

const CodeBlock = styled.span`
	color: #000;
	font-weight: 900;
`;

class Shift extends React.Component {
	state = {
		pageName: 'Shift'
	};

	render() {
		return (
			<div>
				<Header />
				<h1>{this.state.pageName}</h1>
				<div className="code-block">
					<p>
						The <code>shift()</code> method removes the first element from an array and returns it
					</p>
					<h2>Example</h2>
					<div className="array">
						<code>let dinos = ['t-rex', 'velociraptor', 'diplodocus', 'pterodactyl'];</code>
					</div>
					<div className="execution">
						<code>
							dinos.shift(); <CodeBlock>// t-rex</CodeBlock>
						</code>
					</div>
					<div className="result">
						<code>
							console.log(dinos) <CodeBlock>// ['velociraptor', 'diplodocus', 'pterodactyl']</CodeBlock>
						</code>
					</div>
				</div>
			</div>
		);
	}
}

export default Shift;
