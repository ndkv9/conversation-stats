const Box = ({ amount, text }) => {
	return (
		<div className='box'>
			<h2>{amount}</h2>
			<h4>{text}</h4>
		</div>
	)
}

export default Box
