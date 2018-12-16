import React from 'react';
import CodeBlock from './styles/CodeBlock';
import Header from './Header';

class Filter extends React.Component {
	methodInput = React.createRef();

	state = {
		pageName: 'Filter',
		array: "let cities = ['london', 'new york', 'paris', 'moscow', 'istanbul'];"
	};

	render() {
		return (
			<div>
				<Header />
				<h1>{this.state.pageName}</h1>
				<div className="code-block">
					<p>
						The <code>filter()</code> is an iteration method that creates a new array that returns elements
						that pass the function you give it
					</p>
					<h2>Example</h2>
					<div className="array">
						<code>{this.state.array}</code>
					</div>
					<div className="execution">
						<code>let listCities = cities.filter(city => city.length > 7);</code>
					</div>
					<div className="result">
						<code>
							console.log(listCities); <CodeBlock>&#47;&#47; ['new york', 'istanbul'];</CodeBlock>
						</code>
					</div>
				</div>
			</div>
		);
	}
}

export default Filter;
