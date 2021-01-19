import React from 'react';
import header from './header.png'

class Header extends React.Component {
	render() {
		return (
			<div className='header'>
				<img src={header} alt='Grant Walters' className='headerimg'/>
			</div>
		);
	}
}


export default Header;