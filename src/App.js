const App = () => {
	return (
		<div className='App'>
			<h2>Conversation Stat</h2>
			<div>
				<label for='start_date'>Start date</label>
				<input id='start_date' />
				<label for='end_date'>End date</label>
				<input id='end_date' />
				<input id='token' placeholder='Access token' />
			</div>
		</div>
	)
}

export default App
