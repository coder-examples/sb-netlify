import React from 'react';
import './ImageLinkForm.css';
import './animate.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return(
	<div>
		<p className="f5 magicbrain">
			{'This Magic Brain will detect faces in your pictures. Git it a try!'}
		</p>
		<div className='center'>
			<div className="form center pa4 br3 shadow-5 animated jello">
				<input className='f6 pa2 w-70 center input' type="text" onChange={onInputChange}/>
				<button onClick={onButtonSubmit} style={{border: 'none'}} className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
			</div>
		</div>
	</div>
	);
}

export default ImageLinkForm;