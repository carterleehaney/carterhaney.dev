import React from 'react';
import './NavBar.css';

// Very barebones navigation outline — stateless and minimal markup.
export default function NavBar() {
	return (
		<nav className="navbar" aria-label="Main navigation">
			<div className="navbar-brand">Carter Haney</div>
			
			<div className="navbar-center">
				<ul className="navbar-links">
					<li><a href="/">Home</a></li>
					<li><a href="/certifications">/certifications</a></li>
					<li><a href="/projects">/projects</a></li>
					<li><a href={`${process.env.PUBLIC_URL || ''}/resume.pdf`}>Resume</a></li>
				</ul>
			</div>

			<div className="navbar-right">
				<a
					href="https://blog.carterhaney.dev"
					className="blog-button"
					target="_blank"
					rel="noopener noreferrer"
					tabIndex={-1}
				>
					Blog
				</a>
			</div>
		</nav>
	);
}
