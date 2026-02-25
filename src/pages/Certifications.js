import React from 'react';
import './Certifications.css';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

	function Certifications() {
		const certifications = [
			{
				id: 4,
				name: 'Certified Penetration Testing Specialist',
				acronym: 'CPTS',
				issuer: 'Hack The Box',
				dateEarned: 'February 25, 2026',
				image: '/images/certifications/cpts.png',
				verificationLink: 'https://www.credly.com/badges/b94ea29f-4849-46a3-8fca-32ebdfcb852f/public_url',
				description:
					'The CPTS certification validates intermediate-level penetration testing skills through realistic web, external, and internal network assessments against an Active Directory environment.',
				examDetails:
					'A multi-day, fully hands-on exam where candidates conduct end-to-end penetration testing activities against a real-world-style enterprise lab and deliver a professional penetration testing report based on their findings.'
			},
			{
				id: 1,
				name: 'Certified Red Team Operator',
				acronym: 'CRTO',
				issuer: 'Zero-Point Security',
				dateEarned: 'August 2025',
				image: '/images/certifications/rto.jpg',
				verificationLink: 'https://certs.zeropointsecurity.co.uk/c815fb20-48a5-4b03-990b-86ae729f13cc',
				description: 'The CRTO certification validates proficiency in adversary simulation and offensive security operations. It focuses on the tactics, techniques, and procedures (TTPs) used by real-world threat actors and advanced persistent threats (APTs).',
				examDetails: 'A 48-hour practical exam requiring candidates to compromise a multi-forest Active Directory environment using Cobalt Strike, demonstrating real-world red team tradecraft.'
			},
			{
				id: 2,
				name: 'Security+',
				acronym: 'SY0-701',
				issuer: 'CompTIA',
				dateEarned: 'June 2025',
				image: '/images/certifications/securityplus.png',
				verificationLink: 'https://linkedin.com/in/carterhaney',
				description: 'CompTIA Security+ is a globally recognized certification that validates foundational cybersecurity skills. It covers essential security concepts including threat assessment, risk management, incident response, and security architecture.',
				examDetails: 'A 90-minute exam with up to 90 questions, including multiple-choice and performance-based questions. Passing score is 750 on a scale of 100-900.'
			},
			{
				id: 3,
				name: 'IT Fundamentals+',
				acronym: 'ITF+',
				issuer: 'CompTIA',
				dateEarned: 'May 2022',
				image: '/images/certifications/comptia.jpg',
				imageFit: 'fill',
				verificationLink: 'https://linkedin.com/in/carterhaney',
				description: 'CompTIA IT Fundamentals+ is an entry-level certification that validates foundational IT knowledge and skills. It covers essential computing concepts, infrastructure, software development, and security basics.',
				examDetails: 'A 60-minute exam with up to 75 questions covering fundamental IT concepts and practices.'
			}
		];

	return (
		<div className="certifications-page">
			<NavBar />
			<section className="certifications-section">
				<div className="certifications-content">
					<h1 className="certifications-title">/certifications</h1>
					<p className="certifications-intro">
						Professional certifications demonstrating advanced knowledge in cybersecurity, offensive operations, and information technology fundamentals.
					</p>

					<div className="certifications-list">
						{certifications.map((cert) => (
							<article key={cert.id} className="certification-card">
								<div className="cert-header">
									<div className="cert-image-wrapper">
										<img 
											src={cert.image} 
											alt={cert.name}
											className="cert-image"
											style={cert.imageFit ? { objectFit: cert.imageFit } : {}}
										/>
									</div>
									<div className="cert-title-section">
										<h2 className="cert-name">{cert.name}</h2>
										<div className="cert-meta">
											<span className="cert-acronym">{cert.acronym}</span>
											<span className="cert-divider">•</span>
											<span className="cert-issuer">{cert.issuer}</span>
											<span className="cert-divider">•</span>
											<span className="cert-date">{cert.dateEarned}</span>
										</div>
									</div>
								</div>

								<div className="cert-body">
									<p className="cert-description">{cert.description}</p>

									<div className="cert-details-grid">
										<div className="cert-detail-block">
											<h3 className="detail-title">Exam Details</h3>
											<p className="detail-text">{cert.examDetails}</p>
										</div>
									</div>
								</div>

								<div className="cert-footer">
									{cert.verificationLink && (
										<a 
											href={cert.verificationLink}
											className="verify-link"
											target="_blank"
											rel="noopener noreferrer"
										>
											Verify Credential →
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

export default Certifications;
