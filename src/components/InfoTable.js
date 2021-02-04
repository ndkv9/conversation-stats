import ByDate from './ByDate'

const InfoTable = ({ dates }) => {
	return (
		<table>
			<caption>Daily numbers from response</caption>
			<thead>
				<tr>
					<th>conversation count</th>
					<th>missed chat count</th>
					<th>visitors with conversation count</th>
					<th>Date</th>
				</tr>
			</thead>
			<tbody>
				{dates.map(date => (
					<ByDate key={date.date} date={date} />
				))}
			</tbody>
		</table>
	)
}

export default InfoTable
