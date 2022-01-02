class Hello extends React.Component {
	render() {
		return (
			<div>
                <h1>Hello there!</h1>
				<h1>General Kenobi</h1>
			</div>
		);
	}
}

ReactDOM.render(<Hello />, document.getElementById('root'));