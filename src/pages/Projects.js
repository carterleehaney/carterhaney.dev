import React from 'react';
import './Projects.css';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

function Projects() {
	const projects = [
		{
			name: 'Tomoe',
			status: 'Active',
			statusType: 'active',
			badge: 'Tooling',
			description: 'Cross-platform windows administration tool built for security analysts and system administrators.',
			details: 'Tomoe leverages WinRM and SMB protocols for seamless command execution, script deployment, and file transfers across Windows environments. Designed with operational security in mind, it provides a unified interface for managing multiple Windows hosts during engagements.',
			technologies: ['Python', 'PowerShell', 'Windows', 'WinRM', 'SMB', 'impacket'],
			github: 'https://github.com/carterleehaney/Tomoe',
			live: null
		},
		{
			name: 'carterhaney.dev',
			status: 'Active',
			statusType: 'active',
			badge: 'Infrastructure',
			description: 'Personal portfolio and professional presence on the web.',
			details: 'A React-based portfolio site self-hosted on personal infrastructure. Features a minimalist dark theme, smooth animations, and responsive design. Self-hosted and containerized with Docker for easy deployment and maintenance.',
			technologies: ['React.js', 'Docker', 'JavaScript'],
			github: 'https://github.com/carterleehaney/carterhaney.dev',
			live: 'https://carterhaney.dev'
		},
		{
			name: 'blog.carterhaney.dev',
			status: 'Active',
			statusType: 'active',
			badge: 'Infrastructure',
			description: 'Technical blog for security write-ups and notes.',
			details: 'Built with Docusaurus, a React-based static site generator that renders pages from Markdown. Integrates seamlessly with Obsidian for efficient conversion of notes and CTF write-ups into a structured, searchable blog format. Self-hosted and containerized with Docker.',
			technologies: ['Docusaurus', 'React', 'Markdown', 'Docker', 'Obsidian'],
			github: 'https://github.com/carterleehaney/blog.carterhaney.dev',
			live: 'https://blog.carterhaney.dev'
		},
		{
			name: 'Homelab',
			status: 'Active',
			statusType: 'active',
			badge: 'Infrastructure',
			description: 'Self-hosted virtualization environment for security research and infrastructure experimentation.',
			details: 'A multi-node lab running Proxmox VE across a custom-built server and Raspberry Pi 4, interconnected via a managed Cisco SF300-24P switch. Hosts a mix of Windows and Linux VMs and LXC containers for practicing Active Directory attacks, network segmentation, and container orchestration with Docker and Kubernetes.',
			technologies: ['Proxmox VE', 'Docker', 'Kubernetes', 'Active Directory', 'Cisco IOS'],
			live: null
		},
		{
			name: 'Card Manager',
			status: 'Active',
			statusType: 'active',
			badge: 'Applications',
			description: 'Windows desktop application for managing and tracking TCGPlayer card information.',
			details: 'A C# application that fetches card data via the TCGPlayer API. Features include price tracking, search and filtering, sorting options, and persistent local storage in JSON format.',
			technologies: ['C#', '.NET 8.0', 'WPF', 'JSON'],
			github: 'https://github.com/carterleehaney/CardManager',
			live: null
		}
	];

	return (
		<div className="projects-page">
			<NavBar />
			<section className="projects-section">
				<div className="projects-content">
					<h1 className="projects-title">/projects</h1>
					<p className="projects-intro">
						A curated selection of work reflecting my focus on security tooling, infrastructure design, and offensive security practices.
					</p>

					<div className="projects-list">
						{projects.map((project, index) => (
							<article key={index} className="project-card">
								<div className="project-header">
									<h2 className="project-name">{project.name}</h2>
									<div className="project-badges">
										<span className={`status-badge ${project.statusType}`}>
											{project.status}
										</span>
										<span className="type-badge">{project.badge}</span>
									</div>
								</div>
								<p className="project-tagline">{project.description}</p>
								<p className="project-description">{project.details}</p>
								<div className="project-technologies">
									{project.technologies.map((tech, techIndex) => (
										<span key={techIndex} className="tech-tag">{tech}</span>
									))}
								</div>
								<div className="project-links">
									{project.github && (
										<a 
											href={project.github}
											className="project-link github"
											target="_blank"
											rel="noopener noreferrer"
										>
											View on GitHub →
										</a>
									)}
									{project.live && (
										<a 
											href={project.live}
											className="project-link live"
											target="_blank"
											rel="noopener noreferrer"
										>
											View Live →
										</a>
									)}
								</div>
							</article>
						))}
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default Projects;
