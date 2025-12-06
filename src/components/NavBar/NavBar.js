import React from 'react';
import './NavBar.css';

// Very barebones navigation outline — stateless and minimal markup.
export default function NavBar() {
	return (
		<nav className="navbar" aria-label="Main navigation">
			<div className="navbar-brand">Carter Haney</div>
			
			<div className="navbar-center">
				<ul className="navbar-links">
					<li><a href="#home">Home</a></li>
					<li><a href="#certifications">Certifications</a></li>
					<li><a href="#about">About Me</a></li>					
					<li><a href={`${process.env.PUBLIC_URL || ''}/resume.pdf`}>Resume</a></li>
				</ul>
			</div>

			<div className="navbar-right">
				<a
					href="https://blog.carterhaney.dev"
					className="blog-button"
					target="_blank"
					rel="noopener noreferrer"
					style={{ pointerEvents: 'none', opacity: 0.5, cursor: 'not-allowed' }}
					aria-disabled="true"
					tabIndex={-1}
				>
					Blog
				</a>
			</div>
		</nav>
	);
}
