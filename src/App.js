import axios from 'axios'
import React, { useState } from 'react'
import Box from './components/Box'
import InfoTable from './components/InfoTable'

const App = () => {
	const [startDate, setStartDate] = useState('')
	const [endDate, setEndDate] = useState('')
	const [token, setToken] = useState('')
	const [data, setData] = useState(null)

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
			.then(res => setData(res.data))
	}

	console.log('data', data)

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

			<div className='box-list'>
				<Box
					text='Total conversation count'
					amount={data?.total_conversation_count}
				/>

				<Box
					text='Total user message count'
					amount={data?.total_user_message_count}
				/>

				<Box
					text='Total visitor message count'
					amount={data?.total_visitor_message_count}
				/>
			</div>
			{data && <InfoTable dates={data?.by_date} />}
		</div>
	)
}

export default App
