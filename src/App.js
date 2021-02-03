import axios from 'axios'
import React, { useState } from 'react'

const App = () => {
	const [startDate, setStartDate] = useState('')
	const [endDate, setEndDate] = useState('')
	const [token, setToken] = useState('')

	const changeStartDate = e => {
		setStartDate(e.target.value)
	}

	const changeEndDate = e => {
		setEndDate(e.target.value)
	}

	const changeToken = e => {
		setToken(e.target.value)
	}

	const handleSearch = () => {
		const config = {
			headers: { Authorization: `bearer ${token}` },
		}

		axios
			.get(
				`https://api.giosg.com/api/reporting/v1/rooms/84e0fefa-5675-11e7-a349-00163efdd8db/chat-stats/daily/?start_date=${startDate}&end_date=${endDate}`,
				config
			)
			.then(res => console.log('data', res.data))

		setStartDate('')
		setEndDate('')
		setToken('')
	}

	return (
		<div className='App'>
			<h2>Conversation Stat</h2>
			<div>
				<label htmlFor='start_date'>Start date</label>
				<input id='start_date' value={startDate} onChange={changeStartDate} />
				<label htmlFor='end_date'>End date</label>
				<input id='end_date' value={endDate} onChange={changeEndDate} />
				<input
					id='token'
					placeholder='Access token'
					value={token}
					onChange={changeToken}
				/>

				<button onClick={handleSearch}>Search</button>
			</div>
		</div>
	)
}

export default App
