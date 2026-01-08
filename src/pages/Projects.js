import React from 'react';
import './Projects.css';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

function Projects() {
	const projects = [
		{
			name: 'Tomoe',
			description: 'Cross-Platform Windows administration tool. Built in Python, utilizes WinRM and SMB for command execution, script execution, and file transfer.',
			url: 'https://github.com/carterleehaney/Tomoe'
		},
		{
			name: 'carterhaney.dev',
			description: 'My personal website, built with React.js and hosted on my own server.',
			url: 'https://github.com/carterleehaney/carterhaney.dev'
		}
	];

	return (
		<div className="projects-page">
			<NavBar />
			<section className="projects-section">
				<div className="projects-content">
					<h1 className="projects-title">Projects</h1>
					<div className="projects-list">
						{projects.map((project, index) => (
							<div key={index} className="project-item">
								<a 
									href={project.url} 
									className="project-link"
									target="_blank"
									rel="noopener noreferrer"
								>
									<h2 className="project-name">{project.name}</h2>
									<p className="project-description">{project.description}</p>
								</a>
							</div>
						))}
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default Projects;
