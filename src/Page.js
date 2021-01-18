import React from 'react';
import Home from "./Pages/Home"

class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			page: props.page,
		}
	}

	switch(state.page) {
		case "Home":
			render() {
				return(
					<Home />
				)
			};
			break;

	}
}

export default Page;