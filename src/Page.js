import React from 'react';
import Home from "./Pages/Home"

class Page extends React.Component {
	constructor(props) {
		super(props);
	}

	switch(props.page) {
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