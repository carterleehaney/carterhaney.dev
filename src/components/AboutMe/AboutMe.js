import React from 'react';
import './AboutMe.css';

export default function AboutMe() {
	return (
		<section id="about" className="about-me">
			<div className="about-content">
				<h1 className="about-title">About Me</h1>
				<p className="about-paragraph">
					Hey, I'm Carter. I work in cybersecurity and am especially interested in offensive security,
                    defensive tooling, infrastructure, and cloud environments.
                </p>
                <p className="about-paragraph">
					Outside of work, I enjoy writing, web development, going on walks, and spending time with my three
                    dogs, Cooper, Carley, and Charlie. I'm always happy to meet new people and trade ideas, so feel free to
                    reach out on LinkedIn.
				</p>
			</div>
		</section>
	);
}
