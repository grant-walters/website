import React from 'react';
import Home from "./Pages/Home"

class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			page: props.page,
		};
	}

	render () {
		switch(this.state.page) {
			console.log("Rendering "+this.state.page);
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