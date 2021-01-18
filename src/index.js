import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import reportWebVitals from './reportWebVitals';
import NavBar from './NavBar';
import Header from './Header';
import Page from './Page';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			current: 0,
			pages: ['Home',"Resume","Projects","Contact"]
		};
		this.handlePageClick = this.handlePageClick.bind(this);
	}

	handlePageClick(i) {
		this.setState({current: i});
	}

	render () {
		return (
			<div>
				<Header />
				<NavBar pages={this.state.pages} current={this.state.current} onClick={this.handlePageClick} />
				<Page page={this.state.pages[this.state.current]} />
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
