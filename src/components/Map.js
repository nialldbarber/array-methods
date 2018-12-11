import React from 'react';
import Header from './Header';
import CodeBlock from './styles/CodeBlock';

class Map extends React.Component {
	methodInput = React.createRef();

	state = {
		pageName: 'Map',
		array: 'let numbers = [2, 4, 8, 15, 64];'
	};

	render() {
		return (
			<div>
				<Header />
				<h1>{this.state.pageName}</h1>
				<div className="code-block">
					<p>
						The <code>map()</code> is an iteration method that creates a new array with the results of
						calling a provided function on every element in the calling array
					</p>
					<h2>Example</h2>
					<div className="array">
						<code>{this.state.array}</code>
					</div>
					<div className="execution">
						<code>let doubleElements = numbers.map(x => x * 2);</code>
					</div>
					<div className="result">
						<code>
							console.log(doubleElements); <CodeBlock>&#47;&#47; [4, 8, 16, 30, 128];</CodeBlock>
						</code>
					</div>
				</div>
			</div>
		);
	}
}

export default Map;
