import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Box from './components/Box'
import InfoTable from './components/InfoTable'
import InputAdornment from '@material-ui/core/InputAdornment'
import Button from '@material-ui/core/Button'
import AccountCircle from '@material-ui/icons/AccountCircle'
import TextField from '@material-ui/core/TextField'

const App = () => {
	const [startDate, setStartDate] = useState('')
	const [endDate, setEndDate] = useState('')
	const [token, setToken] = useState('')
	const [data, setData] = useState(null)
	const [savedData, setSavedData] = useState({
		savedStartDate: window.localStorage.getItem('startDate'),
		savedEndDate: window.localStorage.getItem('endDate'),
		savedToken: window.localStorage.getItem('token'),
	})

	useEffect(() => {
		if (savedData.savedToken) {
			const config = {
				headers: {
					Authorization: `bearer ${savedData?.savedToken}`,
				},
			}

			axios
				.get(
					`https://api.giosg.com/api/reporting/v1/rooms/84e0fefa-5675-11e7-a349-00163efdd8db/chat-stats/daily/?start_date=${savedData?.savedStartDate}&end_date=${savedData?.savedEndDate}`,
					config
				)
				.then(res => setData(res.data))
		}
	}, [savedData])

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
		window.localStorage.setItem('token', token)
		window.localStorage.setItem('startDate', startDate)
		window.localStorage.setItem('endDate', endDate)

		setSavedData({
			savedStartDate: window.localStorage.getItem('startDate'),
			savedEndDate: window.localStorage.getItem('endDate'),
			savedToken: window.localStorage.getItem('token'),
		})
	}

	return (
		<div className='App'>
			<h2>Conversation Stat</h2>
			<div id='input-form'>
				<TextField
					id='start-date'
					label='State Date'
					variant='outlined'
					value={startDate}
					onChange={changeStartDate}
				/>

				<TextField
					id='end-date'
					label='End Date'
					variant='outlined'
					value={endDate}
					onChange={changeEndDate}
				/>

				<TextField
					id='access-token'
					label='Access Token'
					value={token}
					onChange={changeToken}
					InputProps={{
						startAdornment: (
							<InputAdornment position='start'>
								<AccountCircle />
							</InputAdornment>
						),
					}}
				/>

				<Button
					id='search-btn'
					variant='contained'
					color='primary'
					onClick={handleSearch}
				>
					SEARCH
				</Button>
			</div>

			{data && (
				<div className='box-list'>
					<Box
						text='Total conversation count'
						amount={data.total_conversation_count}
					/>

					<Box
						text='Total user message count'
						amount={data.total_user_message_count}
					/>

					<Box
						text='Total visitor message count'
						amount={data.total_visitor_message_count}
					/>
				</div>
			)}
			{data && <InfoTable dates={data.by_date} />}
		</div>
	)
}

export default App
