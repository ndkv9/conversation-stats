const Box = ({ amount, text }) => {
	return (
		<div className='box'>
			<p>{amount}</p>
			<p>{text}</p>
		</div>
	)
}

export default Box
