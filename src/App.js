import axios from 'axios'
import React, { useState, useEffect } from 'react'

const App = () => {
	useEffect(() => {
		const token = `bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
		const config = {
			headers: { Authorization: token },
		}

		axios
			.get(
				'https://api.giosg.com/api/reporting/v1/rooms/84e0fefa-5675-11e7-a349-00163efdd8db/chat-stats/daily/?start_date=2021-01-01&end_date=2021-01-30',
				config
			)
			.then(res => console.log('data', res.data))
	}, [])

	return (
		<div className='App'>
			<h2>Conversation Stat</h2>
			<div>
				<label htmlFor='start_date'>Start date</label>
				<input id='start_date' />
				<label htmlFor='end_date'>End date</label>
				<input id='end_date' />
				<input id='token' placeholder='Access token' />
			</div>
		</div>
	)
}

export default App
