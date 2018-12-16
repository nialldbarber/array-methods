import React from 'react';
import CodeBlock from './styles/CodeBlock';
import Header from './Header';

class Shift extends React.Component {
	methodInput = React.createRef();

	state = {
		pageName: 'Shift',
		method: '',
		methodTrue: 'dinos.shift();',
		methodValue: "'t-rex', "
	};

	methodTest = (event) => {
		event.preventDefault();
		const storeName = this.methodInput.current.value;
		const result = storeName === this.state.methodTrue ? this.setState({ methodValue: '' }) : 'Incorrect';
		console.log(result);
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
							dinos.shift(); <CodeBlock>&#47;&#47; t-rex</CodeBlock>
						</code>
					</div>
					<div className="result">
						<code>
							console.log(dinos){' '}
							<CodeBlock>&#47;&#47; ['velociraptor', 'diplodocus', 'pterodactyl']</CodeBlock>
						</code>
					</div>
					<h2>You try!</h2>
					<div className="array">
						<code>let dinos = [{this.state.methodValue}'velociraptor', 'diplodocus', 'pterodactyl'];</code>
						<p>
							In the text area below, remove the <i>first</i> element of this array
						</p>
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

export default Shift;
