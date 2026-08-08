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
			name: 'X',
			url: 'https://x.com/divinelumina',
			icon: 'x'
		}
	];

	return (
		<footer id="contact" className="contact-section">
			<div className="contact-content">
				<h2 className="contact-title">Let's connect</h2>
				<p className="contact-intro">
					Want to swap ideas, talk shop, or just say hello? I'd love to hear from you.
				</p>
				
				<a 
					href="mailto:carterleehaney@outlook.com" 
					className="contact-email-button"
				>
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
							<span className="social-icon">{link.icon}</span>
							<span className="social-label">{link.name}</span>
						</a>
					))}
				</div>
			</div>
		</footer>
	);
}
