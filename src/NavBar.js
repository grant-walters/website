import React from 'react';

class NavBar extends React.Component {
	render() {
		const pages = this.props.pages.map((name,step) => {
			const btnClass = (step===this.props.current) ? "activePage" : "navButton";
			return (
				<NavElement id={step} className={btnClass} name={name} onClick={() => this.props.onClick(step)} />
			);
		});
		return (
			<nav className='navbar'>
				{pages}
			</nav>
		);
	}
}

class NavElement extends React.Component {
	render() {
		return (
			<li key={this.props.id}><button className={this.props.className} key={this.props.id} onClick={this.props.onClick}>{this.props.name}</button></li>
		);
	}
}

export default NavBar;