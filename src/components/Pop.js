import React from 'react';
import Header from './Header';
import styled from 'styled-components';

const CodeBlock = styled.span`
	color: #000;
	font-weight: 900;
`;

class Pop extends React.Component {
	state = {
		pageName: 'Pop'
	};
	render() {
		return (
			<div>
				<Header />
				<h1>{this.state.pageName}</h1>
				<div className="code-block">
					<p>
						The <code>pop()</code> method removes the <u>last</u> element from the array and returns it
					</p>
					<h2>Example</h2>
					<div className="array">
						<code>let cars = ['ferrari', 'mercedes', 'toyota'];</code>
					</div>
					<div className="execution">
						<code>
							cars.pop(); <CodeBlock>// toyota</CodeBlock>
						</code>
					</div>
					<div className="result">
						<code>
							console.log(cars) <CodeBlock>// ['ferrari', 'mercedes']</CodeBlock>
						</code>
					</div>
				</div>
			</div>
		);
	}
}

export default Pop;
