import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
		if (isSignedIn) {
		return (
			<nav style={{justifyContent: 'flex-end', display: 'flex'}}>
				<p onClick={() => onRouteChange('signin')} className='pa3 f3 link dim black underline pointer'>Sign Out</p>
			</nav>
		);
	} else if (!isSignedIn) {
		return (
		<div>
			<nav style={{justifyContent: 'flex-end', display: 'flex'}}>
				<p onClick={() => onRouteChange('register')} className='f3 pa3 link dim black underline pointer'>Register</p>
				<p onClick={() => onRouteChange('signin')} className='f3 pa3 link dim black underline pointer'>Sign In</p>
			</nav>
		</div>
		);
	}
}

export default Navigation;