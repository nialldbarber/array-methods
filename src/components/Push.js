import React from 'react';
import Header from './Header';
import styled from 'styled-components';

const CodeBlock = styled.span`
	color: #000;
	font-weight: 900;
`;

class Push extends React.Component {
	state = {
		pageName: 'Push'
	};

	render() {
		return (
			<div>
				<Header />
				<h1>{this.state.pageName}</h1>
				<div className="code-block">
					<p>
						The <code>push()</code> method lets you add a new item to the <u>end</u> of an array and returns
						the new length of the array
					</p>
					<h2>Example</h2>
					<div className="array">
						<code>let instruments = ['guitar', 'bass', 'drums'];</code>
					</div>
					<div className="execution">
						<code>
							instruments.push('keyboard'); <CodeBlock>// 4</CodeBlock>
						</code>
					</div>
					<div className="result">
						<code>
							console.log(instruments) <CodeBlock>// ["guitar", "bass", "drums", "keyboard"]</CodeBlock>
						</code>
					</div>
				</div>
			</div>
		);
	}
}

export default Push;
