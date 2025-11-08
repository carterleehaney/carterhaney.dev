import React, { useState, useRef, useEffect, useCallback } from 'react';
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
			verificationLink: 'https://linkedin.com/in/carterhaney'
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
	const [isTransitioning, setIsTransitioning] = useState(false);
	const touchStartX = useRef(0);
	const touchEndX = useRef(0);
	const carouselRef = useRef(null);

	// Navigation functions with infinite looping
	const getCircularIndex = useCallback((index) => {
		const length = certifications.length;
		return ((index % length) + length) % length;
	}, [certifications.length]);

	const goToSlide = useCallback((index) => {
		if (isTransitioning) return;
		setIsTransitioning(true);
		setCurrentIndex(getCircularIndex(index));
		setTimeout(() => setIsTransitioning(false), 50);
	}, [isTransitioning, getCircularIndex]);

	const nextSlide = useCallback(() => {
		goToSlide(currentIndex + 1);
	}, [currentIndex, goToSlide]);

	const prevSlide = useCallback(() => {
		goToSlide(currentIndex - 1);
	}, [currentIndex, goToSlide]);

	// Touch event handlers for swipe navigation
	const handleTouchStart = (e) => {
		touchStartX.current = e.touches[0].clientX;
	};

	const handleTouchMove = (e) => {
		touchEndX.current = e.touches[0].clientX;
	};

	const handleTouchEnd = () => {
		const swipeThreshold = 50;
		const diff = touchStartX.current - touchEndX.current;

		if (Math.abs(diff) > swipeThreshold) {
			if (diff > 0) {
				nextSlide();
			} else {
				prevSlide();
			}
		}

		touchStartX.current = 0;
		touchEndX.current = 0;
	};

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

	// Get the slides to display (previous, current, next)
	const getVisibleSlides = () => {
		const prevIndex = getCircularIndex(currentIndex - 1);
		const nextIndex = getCircularIndex(currentIndex + 1);

		return {
			prev: certifications[prevIndex],
			current: certifications[currentIndex],
			next: certifications[nextIndex]
		};
	};

	const visibleSlides = getVisibleSlides();

	return (
		<div id="certifications" className="certifications-carousel">
			<h2 className="carousel-title">Certifications</h2>
			
			<div 
				className="carousel-container"
				role="region"
				aria-label="Certifications carousel"
				aria-live="polite"
				ref={carouselRef}
			>
				{/* Desktop navigation arrows */}
				<button
					className="carousel-arrow carousel-arrow-left"
					onClick={prevSlide}
					aria-label="Previous certification"
					disabled={isTransitioning}
				>
					<span aria-hidden="true">◀</span>
				</button>

				{/* Carousel track */}
				<div 
					className="carousel-track"
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onTouchEnd={handleTouchEnd}
				>
					{/* Previous slide */}
					<div key={`prev-${visibleSlides.prev.id}`} className="carousel-slide carousel-slide-prev">
						<div className="certification-card">
							<img 
								src={visibleSlides.prev.image} 
								alt={visibleSlides.prev.title}
								className="certification-image"
							/>
							<div className="certification-info">
								<h3 className="certification-title">{visibleSlides.prev.title}</h3>
								<p className="certification-issuer">{visibleSlides.prev.issuer}</p>
								<p className="certification-year">{visibleSlides.prev.year}</p>
							</div>
							{visibleSlides.prev.verificationLink && (
								<a 
									href={visibleSlides.prev.verificationLink} 
									target="_blank" 
									rel="noopener noreferrer"
									className="verification-badge"
									aria-label={`Verify ${visibleSlides.prev.title} certification`}
									tabIndex="-1"
								>
									✓
								</a>
							)}
						</div>
					</div>

					{/* Current slide (centered) */}
					<div key={`current-${visibleSlides.current.id}`} className="carousel-slide carousel-slide-current">
						<div className="certification-card">
							<img 
								src={visibleSlides.current.image} 
								alt={visibleSlides.current.title}
								className="certification-image"
							/>
							<div className="certification-info">
								<h3 className="certification-title">{visibleSlides.current.title}</h3>
								<p className="certification-issuer">{visibleSlides.current.issuer}</p>
								<p className="certification-year">{visibleSlides.current.year}</p>
							</div>
							{visibleSlides.current.verificationLink && (
								<a 
									href={visibleSlides.current.verificationLink} 
									target="_blank" 
									rel="noopener noreferrer"
									className="verification-badge"
									aria-label={`Verify ${visibleSlides.current.title} certification`}
								>
									✓
								</a>
							)}
						</div>
					</div>

					{/* Next slide */}
					<div key={`next-${visibleSlides.next.id}`} className="carousel-slide carousel-slide-next">
						<div className="certification-card">
							<img 
								src={visibleSlides.next.image} 
								alt={visibleSlides.next.title}
								className="certification-image"
							/>
							<div className="certification-info">
								<h3 className="certification-title">{visibleSlides.next.title}</h3>
								<p className="certification-issuer">{visibleSlides.next.issuer}</p>
								<p className="certification-year">{visibleSlides.next.year}</p>
							</div>
							{visibleSlides.next.verificationLink && (
								<a 
									href={visibleSlides.next.verificationLink} 
									target="_blank" 
									rel="noopener noreferrer"
									className="verification-badge"
									aria-label={`Verify ${visibleSlides.next.title} certification`}
									tabIndex="-1"
								>
									✓
								</a>
							)}
						</div>
					</div>
				</div>

				{/* Desktop navigation arrows */}
				<button
					className="carousel-arrow carousel-arrow-right"
					onClick={nextSlide}
					aria-label="Next certification"
					disabled={isTransitioning}
				>
					<span aria-hidden="true">▶</span>
				</button>

				{/* Dots indicator */}
				<div className="carousel-dots">
					{certifications.map((_, index) => (
						<button
							key={index}
							className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
							onClick={() => goToSlide(index)}
							aria-label={`Go to slide ${index + 1}`}
							aria-current={index === currentIndex ? 'true' : 'false'}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
