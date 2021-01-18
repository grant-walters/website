import React from 'react';
import header from './header.png'

class Header extends React.Component {
	render() {
		return (
			<div class='header'>
				<img src={header} alt='Grant Walters' class ='headerimg'/>
			</div>
		);
	}
}


export default Header;