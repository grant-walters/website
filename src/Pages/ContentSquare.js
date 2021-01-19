import React from "react";

class ContentSquare extends React.Component {
	render() {
		return (
			<div className='contentSquare'>
				
				<p className='heading'>{this.props.title}</p>
				<hr />
				<p>{this.props.description}</p>
			</div>
		);
	}
}
// <img src={this.props.thumbnail} alt="Thumbnail" className="thumbnail" />
export default ContentSquare;