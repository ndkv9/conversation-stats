const ByDate = ({ date }) => {
	return (
		<tr>
			<td>{date.conversation_count}</td>
			<td>{date.missed_chat_count}</td>
			<td>{date.visitors_with_conversation_count}</td>
			<td>{date.date}</td>
		</tr>
	)
}

export default ByDate
