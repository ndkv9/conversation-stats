import axios from 'axios'
import React, { useState, useEffect } from 'react'
import BoxList from './components/BoxList'
import InfoTable from './components/InfoTable'
import InputForm from './components/InputForm'
import Noti from './components/Noti'

const App = () => {
	const [startDate, setStartDate] = useState('')
	const [endDate, setEndDate] = useState('')
	const [token, setToken] = useState('')
	const [data, setData] = useState(null)
	const [noti, setNoti] = useState(null)
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
				.catch(err => {
					if (data) {
						setNoti('Invalid format or token, using data from last search')
						window.localStorage.clear()
					} else {
						setNoti('Invalid format or token')
						window.localStorage.clear()
					}
				})

			setNoti(`	Data taken from ${savedData?.savedStartDate} to
				${savedData?.savedEndDate}`)
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
		if (!startDate || !endDate || !token) {
			if (savedData.savedToken && data) {
				setNoti('Missing inputs or token, using data from last search')
			} else {
				setNoti('Missing inputs or access token, please fill in first')
			}
		} else {
			window.localStorage.setItem('token', token)
			window.localStorage.setItem('startDate', startDate)
			window.localStorage.setItem('endDate', endDate)

			setSavedData({
				savedStartDate: window.localStorage.getItem('startDate'),
				savedEndDate: window.localStorage.getItem('endDate'),
				savedToken: window.localStorage.getItem('token'),
			})

			setStartDate('')
			setEndDate('')
			setToken('')
		}
	}

	return (
		<div id='App'>
			<h1>CONVERSATION STATS</h1>

			<InputForm
				startDate={startDate}
				endDate={endDate}
				token={token}
				changeStartDate={changeStartDate}
				changeEndDate={changeEndDate}
				changeToken={changeToken}
				handleSearch={handleSearch}
			/>

			<Noti text={noti} />

			{data && <BoxList data={data} />}

			{data && <InfoTable dates={data.by_date} />}
		</div>
	)
}

export default App
