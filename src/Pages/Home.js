import React from "react";
import prof_pic from "../prof_pic.jpg";

class Home extends React.Component {
	render() {
		return (
			<div class='content'>
				<img src={prof_pic} alt="Portrait of Grant Walters" className="prof_pic" />
				<p class='heading'>Grant Walters</p>
				<hr />
				<p>Hello, I am Grant Walters, a computer scientist, Star Wars enthusiast, and rock climber. I spend a lot of my free time between playing games, watching shows, coding, rock climbing, or just talking with friends. This website serves two purposes. One is to serve as a professional portfolio, displaying my projects, my resume, and contact information. It will also serve as a website where I host any personal projects I am working on, although a lot of that will probably go on my other site.</p>
			</div>
		);
	}
}

export default Home;