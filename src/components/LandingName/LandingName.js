import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedTyping from '../AnimatedTyping/AnimatedTyping';
import './LandingName.css';

export default function LandingName() {
	return (
		<div id="home" className="landing-name">
			<AnimatedTyping 
				text="Carter Haney" 
				speed={80}
				className="landing-name-text"
			/>
			<p className="landing-subtitle">Interested in all things cyber.</p>
			<div className="landing-cta">
				<Link to="/projects" className="cta-button cta-primary">
					View Projects
				</Link>
				<a 
					href="/resume.pdf" 
					className="cta-button cta-secondary"
					target="_blank"
					rel="noopener noreferrer"
				>
					Download Resume
				</a>
			</div>
		</div>
	);
}
