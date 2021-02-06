import InputAdornment from '@material-ui/core/InputAdornment'
import Button from '@material-ui/core/Button'
import AccountCircle from '@material-ui/icons/AccountCircle'
import TextField from '@material-ui/core/TextField'

const InputForm = props => {
	return (
		<div id='input-form'>
			<TextField
				id='start-date'
				label='State Date'
				variant='outlined'
				value={props.startDate}
				onChange={props.changeStartDate}
			/>

			<TextField
				id='end-date'
				label='End Date'
				variant='outlined'
				value={props.endDate}
				onChange={props.changeEndDate}
			/>

			<TextField
				id='access-token'
				label='Access Token'
				value={props.token}
				onChange={props.changeToken}
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
				onClick={props.handleSearch}
			>
				SEARCH
			</Button>
		</div>
	)
}

export default InputForm
