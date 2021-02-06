import Box from './Box'

const BoxList = ({ data }) => {
	return (
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
	)
}

export default BoxList
