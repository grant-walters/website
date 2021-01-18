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
			case "Home":
				return(<Home />);
				break;
		}
	}
}

export default Page;