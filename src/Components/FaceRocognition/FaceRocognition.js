import React from 'react';

const FaceRocognition = ({ imageUrl }) => {
	return (
		<div className='center'>
			<img alt='img' src={imageUrl} width='500px' height='auto' />
		</div>
	)
}

export default FaceRocognition;