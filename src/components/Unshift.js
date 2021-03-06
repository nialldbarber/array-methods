import React from 'react';
import CodeBlock from './styles/CodeBlock';
import Header from './Header';

class Unshift extends React.Component {
	methodInput = React.createRef();

	state = {
		pageName: 'Unshift',
		method: '',
		methodTrue: "planets.unshift('mercury');",
		methodValue: ''
	};

	methodTest = (event) => {
		event.preventDefault();
		const storeName = this.methodInput.current.value;
		const result =
			storeName === this.state.methodTrue ? this.setState({ methodValue: "'mercury', " }) : 'Incorrect';
		console.log(result);
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
							planets.unshift('mercury'); <CodeBlock>&#47;&#47; 5</CodeBlock>
						</code>
					</div>
					<div className="result">
						<code>
							console.log(planets){' '}
							<CodeBlock>&#47;&#47; ['mercury', 'venus', 'earth', 'mars', 'jupiter']</CodeBlock>
						</code>
					</div>
					<h2>You try!</h2>
					<div className="array">
						<code>let planets = [{this.state.methodValue}'venus', 'earth', 'mars', 'jupiter'];</code>
						<p>In the text area below, add mercury to the beginning array</p>
						<div className="test-area">
							<form onSubmit={this.methodTest}>
								<input type="text" ref={this.methodInput} required placeholder="Enter here" />
								<button type="submit">Go!</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Unshift;
