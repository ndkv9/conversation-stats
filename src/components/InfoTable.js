import { DataGrid } from '@material-ui/data-grid'

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
	return (
		<div style={{ height: 400, margin: 'auto' }}>
			<DataGrid columns={columns} rows={rows} pageSize={5} />
		</div>
	)
}

export default InfoTable
