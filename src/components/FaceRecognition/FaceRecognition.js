import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes, displayImage }) => {
	return(
	<div className='center ma'>
		<div className="absolute mt2">
			<img id="inputimage" src={imageUrl} alt="" width='500px' height='auto'/>
			{
				boxes.map(box =>{
				return <div key={box.topRow} className="bounding-boxes" style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
				})
			}
		</div>
	</div>
	);
}

export default FaceRecognition;