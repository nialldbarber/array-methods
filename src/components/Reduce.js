import React from 'react';
import Header from './Header';
import CodeBlock from './styles/CodeBlock';

class Reduce extends React.Component {
	methodInput = React.createRef();

	state = {
		pageName: 'Reduce',
		array: 'let numbers = [3, 55, 99, 2, 54];'
	};

	render() {
		return (
			<div>
				<Header />
				<h1>{this.state.pageName}</h1>
				<div className="code-block">
					<p>
						The <code>reduce()</code> is an iteration method executes a reducer function (that you provide)
						on each member of the array resulting in a single output value
					</p>
					<h2>Example</h2>
					<div className="array">
						<code>{this.state.array}</code>
					</div>
					<div className="execution">
						<code>let result = numbers.reduce((item, index) => item + index);</code>
					</div>
					<div className="result">
						<code>
							console.log(result); <CodeBlock>&#47;&#47; 213</CodeBlock>
						</code>
					</div>
				</div>
			</div>
		);
	}
}

export default Reduce;
