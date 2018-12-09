import React from 'react';
import Header from './Header';
import styled from 'styled-components';

const CodeBlock = styled.span`
	color: #000;
	font-weight: 900;
`;

class Push extends React.Component {
	methodInput = React.createRef();

	state = {
		pageName: 'Push',
		method: '',
		methodTrue: 'instruments.push("keyboard");',
		methodValue: ''
	};

	methodTest = (event) => {
		event.preventDefault();
		const storeName = this.methodInput.current.value;
		const correctValue = this.state.methodValue;
		const result =
			storeName === this.state.methodTrue ? this.setState({ methodValue: ", 'keyboard'" }) : 'Incorrect';
		console.log(result);
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
					<h2>You try!</h2>
					<div className="array">
						<code>let instruments = ['guitar', 'bass', 'drums'{this.state.methodValue}];</code>
						<p>In the text area below, add keyboard to the array</p>
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

export default Push;
