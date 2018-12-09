import React from 'react';
import Header from './Header';
import styled from 'styled-components';

const CodeBlock = styled.span`
	color: #000;
	font-weight: 900;
`;

class Unshift extends React.Component {
	state = {
		pageName: 'Unshift'
	};

	render() {
		return (
			<div>
				<Header />
				<h1>{this.state.pageName}</h1>
				<div className="code-block">
					<p>
						The <code>unshift()</code> method adds the element to the beginning of the array
					</p>
					<h2>Example</h2>
					<div className="array">
						<code>let planets = ['venus', 'earth', 'mars', 'jupiter'];</code>
					</div>
					<div className="execution">
						<code>
							instruments.planets('mercury'); <CodeBlock>// t-rex</CodeBlock>
						</code>
					</div>
					<div className="result">
						<code>
							console.log(planets){' '}
							<CodeBlock>// ['mercury', 'venus', 'earth', 'mars', 'jupiter']</CodeBlock>
						</code>
					</div>
				</div>
			</div>
		);
	}
}

export default Unshift;
