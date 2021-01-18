import React from 'react';
import Home from "./Pages/Home"

class Page extends React.Component {
	constructor(props) {
		console.log(props);
		super(props);
		this.state = {
			page: props.page,
		};
	}

	render () {
		console.log("Rendering "+this.props.page);
		switch(this.state.page) {
			case "Home":
				return(<Home />);
				break;
			case "Resume":
				return(<div lass='content'>404</div>);
				break;
			default:
				return(<div lass='content'>404</div>);
		}
	}
}

export default Page;