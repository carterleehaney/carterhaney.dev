import React from 'react';
import './Footer.css';

export default function Footer() {
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
		<footer className="footer">
			<div className="footer-content">
				<div className="footer-links">
					{socialLinks.map((link) => (
						<a
							key={link.name}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							className="footer-link"
							aria-label={link.name}
						>
							<span className="footer-icon">
								{link.icon === 'htb' ? (
									<img src="/images/assets/htb.jpeg" alt="HackTheBox" className="htb-icon" />
								) : (
									link.icon
								)}
							</span>
							<span className="footer-label">{link.name}</span>
						</a>
					))}
				</div>
			</div>
		</footer>
	);
}
