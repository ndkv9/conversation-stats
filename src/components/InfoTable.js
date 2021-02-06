import { DataGrid } from '@material-ui/data-grid'
import Pagination from '@material-ui/lab/Pagination'
import PaginationItem from '@material-ui/lab/PaginationItem'

const InfoTable = ({ dates }) => {
	const columns = [
		{
			field: 'conversation_count',
			headerName: 'Conversation Count',
			width: 250,
			sortable: false,
		},
		{
			field: 'missed_chat_count',
			headerName: 'Missed Chat Count',
			width: 250,
			sortable: false,
		},
		{
			field: 'visitors_with_conversation_count',
			headerName: 'Visitor With Conversation Count',
			width: 250,
			sortable: false,
		},
		{
			field: 'date',
			headerName: 'Date',
			width: 130,
			sortable: true,
		},
	]

	const rows = dates.map((date, id) => {
		return {
			id: id,
			conversation_count: date.conversation_count,
			missed_chat_count: date.missed_chat_count,
			visitors_with_conversation_count: date.visitors_with_conversation_count,
			date: date.date,
		}
	})

	function CustomPagination(props) {
		const { state, api } = props

		return (
			<Pagination
				color='primary'
				variant='outlined'
				shape='rounded'
				page={state.pagination.page}
				count={state.pagination.pageCount}
				// @ts-expect-error
				renderItem={props2 => <PaginationItem {...props2} disableRipple />}
				onChange={(event, value) => api.current.setPage(value)}
			/>
		)
	}

	return (
		<div className='info-table' style={{ height: 400, margin: 'auto' }}>
			<DataGrid
				columns={columns}
				rows={rows}
				pageSize={5}
				components={{
					Pagination: CustomPagination,
				}}
			/>
		</div>
	)
}

export default InfoTable
