import React from 'react';
import Home from "./Pages/Home"

class Page extends React.Component {
	render () {
		switch(this.props.page) {
			case "Home":
				return(<Home />);
			case "Resume":
				return(<div lass='content'>404</div>);
			default:
				return(<div lass='content'>404</div>);
		}
	}
}

export default Page;