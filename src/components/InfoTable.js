import ByDate from './ByDate'
import { AgGridColumn, AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-material.css'

const InfoTable = ({ dates }) => {
	return (
		// <table>
		// 	<caption>Daily numbers from response</caption>
		// 	<thead>
		// 		<tr>
		// 			<th>conversation count</th>
		// 			<th>missed chat count</th>
		// 			<th>visitors with conversation count</th>
		// 			<th>Date</th>
		// 		</tr>
		// 	</thead>
		// 	<tbody>
		// 		{dates.map(date => (
		// 			<ByDate key={date.date} date={date} />
		// 		))}
		// 	</tbody>
		// </table>
		<div
			className='ag-theme-material'
			style={{ height: 600, width: '60%', margin: 'auto' }}
		>
			<AgGridReact rowData={dates} isFullWidthCel={true}>
				<AgGridColumn field='conversation_count'></AgGridColumn>
				<AgGridColumn field='missed_chat_count'></AgGridColumn>
				<AgGridColumn field='visitors_with_conversation_count'></AgGridColumn>
				<AgGridColumn field='date' sortable={true}></AgGridColumn>
			</AgGridReact>
		</div>
	)
}

export default InfoTable
