import React from 'react';
import Header from './Header';
import styled from 'styled-components';

const CodeBlock = styled.span`
	color: #000;
	font-weight: 900;
`;

class Pop extends React.Component {
	methodInput = React.createRef();

	state = {
		pageName: 'Pop',
		method: '',
		methodTrue: 'cars.pop();',
		methodValue: ", 'renault'"
	};

	methodTest = (event) => {
		event.preventDefault();
		const storeName = this.methodInput.current.value;
		const correctValue = this.state.methodValue;
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
						The <code>pop()</code> method removes the <u>last</u> element from the array and returns it
					</p>
					<h2>Example</h2>
					<div className="array">
						<code>let cars = ['ferrari', 'mercedes', 'toyota'];</code>
					</div>
					<div className="execution">
						<code>
							{this.state.methodTrue} <CodeBlock>// toyota</CodeBlock>
						</code>
					</div>
					<div className="result">
						<code>
							console.log(cars) <CodeBlock>// ['ferrari', 'mercedes']</CodeBlock>
						</code>
					</div>
					<h2>You try!</h2>
					<div className="array">
						<code>let cars = ['ferrari', 'mercedes', 'toyota'{this.state.methodValue}];</code>
						<p>
							In the text area below, remove the <i>last</i> element of this array
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

export default Pop;
