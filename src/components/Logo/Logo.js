import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';
import '../ImageLinkForm/animate.css';

const Logo = () => {
	return(
		<div>
			<div className='ma4 mt0 animated fadeIn delay-0-5s'>
				<Tilt className="Tilt br2 shadow-2" options={{ max : 100, 'maxGlare': 1 }} style={{ height: 150, width: 150 }} >
				<div className="Tilt-inner"><img src={ brain } alt=""/></div>
				</Tilt>
			</div>
		</div>
		);
}

export default Logo;