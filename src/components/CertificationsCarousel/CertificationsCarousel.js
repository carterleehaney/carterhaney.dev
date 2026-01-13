import React, { useState, useEffect, useCallback, useRef } from 'react';
import './CertificationsCarousel.css';

export default function CertificationsCarousel() {
	const certifications = [
		{
			id: 1,
			title: 'Certified Red Team Operator',
			image: '/images/certifications/rto.jpg',
			issuer: 'Zero Point Security',
			year: 'August 2025',
			verificationLink: 'https://certs.zeropointsecurity.co.uk/c815fb20-48a5-4b03-990b-86ae729f13cc'
		},
		{
			id: 2,
			title: 'Security+',
			image: '/images/certifications/securityplus.png',
			issuer: 'CompTIA',
			year: 'June 2025',
			verificationLink: 'https://linkedin.com/in/carterhaney',
			whiteBg: true
		},
		{
			id: 3,
			title: 'ITF+',
			image: '/images/certifications/comptia.jpg',
			issuer: 'CompTIA',
			year: 'May 2022',
			verificationLink: 'https://linkedin.com/in/carterhaney'
		}
	];

	const [currentIndex, setCurrentIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const autoPlayTimerRef = useRef(null);
	const touchStartRef = useRef(0);
	const touchEndRef = useRef(0);

	// Navigate to next slide
	const nextSlide = useCallback(() => {
		setCurrentIndex((prev) => (prev + 1) % certifications.length);
	}, [certifications.length]);

	// Navigate to previous slide
	const prevSlide = useCallback(() => {
		setCurrentIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
	}, [certifications.length]);

	// Navigate to specific slide
	const goToSlide = useCallback((index) => {
		setCurrentIndex(index);
	}, []);

	// Auto-play effect
	useEffect(() => {
		if (isPaused) return;

		autoPlayTimerRef.current = setInterval(() => {
			nextSlide();
		}, 5000);

		return () => {
			if (autoPlayTimerRef.current) {
				clearInterval(autoPlayTimerRef.current);
			}
		};
	}, [isPaused, nextSlide]);

	// Touch handlers
	const handleTouchStart = useCallback((e) => {
		touchStartRef.current = e.touches[0].clientX;
	}, []);

	const handleTouchMove = useCallback((e) => {
		touchEndRef.current = e.touches[0].clientX;
	}, []);

	const handleTouchEnd = useCallback(() => {
		const diff = touchStartRef.current - touchEndRef.current;
		const threshold = 50;

		if (Math.abs(diff) > threshold) {
			if (diff > 0) {
				nextSlide();
			} else {
				prevSlide();
			}
		}
	}, [nextSlide, prevSlide]);

	// Keyboard navigation
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === 'ArrowLeft') {
				e.preventDefault();
				prevSlide();
			} else if (e.key === 'ArrowRight') {
				e.preventDefault();
				nextSlide();
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [nextSlide, prevSlide]);

	// Get slide position class
	const getSlidePosition = useCallback((index) => {
		const diff = (index - currentIndex + certifications.length) % certifications.length;

		if (diff === 0) return 'current';
		if (diff === 1 || diff === -(certifications.length - 1)) return 'next';
		if (diff === certifications.length - 1 || diff === -1) return 'prev';
		return 'hidden';
	}, [currentIndex, certifications.length]);

	return (
		<div id="certifications" className="certifications-carousel">
			<h2 className="carousel-title">Certifications</h2>

			<div
				className="carousel-wrapper"
				onMouseEnter={() => setIsPaused(true)}
				onMouseLeave={() => setIsPaused(false)}
			>
				<button
					className="carousel-nav carousel-nav-prev"
					onClick={prevSlide}
					aria-label="Previous certification"
				>
					<span aria-hidden="true">◀</span>
				</button>

				<div
					className="carousel-viewport"
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onTouchEnd={handleTouchEnd}
				>
					<div className="carousel-slides">
						{certifications.map((cert, index) => {
							const position = getSlidePosition(index);

							return (
								<div
									key={cert.id}
									className={`carousel-slide slide-${position}`}
									aria-hidden={position !== 'current'}
								>
									<div className="cert-card">
										<div className={`cert-image-container${cert.whiteBg ? ' white-bg' : ''}`}>
											<img
												src={cert.image}
												alt={position === 'current' ? cert.title : ''}
												className="cert-image"
												loading="lazy"
											/>
										</div>
										<div className="cert-content">
											<h3 className="cert-title">{cert.title}</h3>
											<p className="cert-issuer">{cert.issuer}</p>
											<p className="cert-year">{cert.year}</p>
										</div>
										{cert.verificationLink && (
											<a
												href={cert.verificationLink}
												target="_blank"
												rel="noopener noreferrer"
												className="cert-verify"
												aria-label={`Verify ${cert.title} certification`}
												tabIndex={position === 'current' ? 0 : -1}
											>
												✓
											</a>
										)}
									</div>
								</div>
							);
						})}
					</div>
				</div>

				<button
					className="carousel-nav carousel-nav-next"
					onClick={nextSlide}
					aria-label="Next certification"
				>
					<span aria-hidden="true">▶</span>
				</button>

				<div className="carousel-indicators">
					{certifications.map((_, index) => (
						<button
							key={index}
							className={`indicator ${index === currentIndex ? 'active' : ''}`}
							onClick={() => goToSlide(index)}
							aria-label={`Go to certification ${index + 1}`}
							aria-current={index === currentIndex}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
