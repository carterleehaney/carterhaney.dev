import React from 'react';
import './ContactSection.css';

export default function ContactSection() {
	const socialLinks = [
		{
			name: 'LinkedIn',
			url: 'https://linkedin.com/in/carterhaney',
			icon: 'in'
		},
		{
			name: 'GitHub',
			url: 'https://github.com/carterleehaney',
			icon: 'gh'
		},
		{
			name: 'Blog',
			url: 'https://blog.carterhaney.dev',
			icon: '✎'
		},
		{
			name: 'Twitter',
			url: 'https://x.com/divinelumina',
			icon: '𝕏'
		},
		{
			name: 'HackTheBox',
			url: 'https://app.hackthebox.com/users/2207103',
			icon: 'htb'
		}
	];

	return (
		<section id="contact" className="contact-section">
			<div className="contact-content">
				<h2 className="contact-title">Let's Connect</h2>
				<p className="contact-intro">
					Have a question, want to collaborate, or just want to say hello? 
					I'd love to hear from you.
				</p>
				
				<a 
					href="mailto:carterleehaney@outlook.com" 
					className="contact-email-button"
				>
					<span className="email-icon">✉</span>
					<span className="email-text">carterleehaney@outlook.com</span>
				</a>

				<div className="contact-divider">
					<span className="divider-line"></span>
					<span className="divider-text">or find me on</span>
					<span className="divider-line"></span>
				</div>

				<div className="contact-social-links">
					{socialLinks.map((link) => (
						<a
							key={link.name}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							className="contact-social-link"
							aria-label={link.name}
						>
							<span className="social-icon">
								{link.icon === 'htb' ? (
									<img src="/images/assets/htb.jpeg" alt="HackTheBox" className="htb-icon" />
								) : (
									link.icon
								)}
							</span>
							<span className="social-label">{link.name}</span>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
