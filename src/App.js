import axios from 'axios'
import React, { useState, useEffect } from 'react'
import BoxList from './components/BoxList'
import InfoTable from './components/InfoTable'
import InputForm from './components/InputForm'

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
			<InputForm
				startDate={startDate}
				endDate={endDate}
				token={token}
				changeStartDate={changeStartDate}
				changeEndDate={changeEndDate}
				changeToken={token}
				handleSearch={handleSearch}
			/>
			{data && (
				<div className='noties'>
					conversation stats from {savedData?.savedStartDate} to{' '}
					{savedData?.savedEndDate}
				</div>
			)}
			{data && <BoxList data={data} />}
			{data && <InfoTable dates={data.by_date} />}
		</div>
	)
}

export default App
