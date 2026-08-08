import React, { useState, useEffect } from 'react';
import './AnimatedTyping.css';

export default function AnimatedTyping({ 
	text = '', 
	speed = 50, 
	className = '', 
	style = {},
	startDelay = 0 
}) {
	const [displayedText, setDisplayedText] = useState('');
	const [isTyping, setIsTyping] = useState(false);
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(
		() => window.matchMedia('(prefers-reduced-motion: reduce)').matches
	);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
		const handleChange = (event) => setPrefersReducedMotion(event.matches);

		mediaQuery.addEventListener('change', handleChange);
		return () => mediaQuery.removeEventListener('change', handleChange);
	}, []);

	useEffect(() => {
		if (prefersReducedMotion) {
			setDisplayedText(text);
			setIsTyping(false);
			return;
		}

		setDisplayedText('');
		setIsTyping(false);

		const startTimer = setTimeout(() => {
			setIsTyping(true);
		}, startDelay);

		return () => clearTimeout(startTimer);
	}, [text, startDelay, prefersReducedMotion]);

	useEffect(() => {
		if (!isTyping) return;

		let currentIndex = 0;

		const typingInterval = setInterval(() => {
			if (currentIndex < text.length) {
				setDisplayedText(text.slice(0, currentIndex + 1));
				currentIndex++;
			} else {
				clearInterval(typingInterval);
			}
		}, speed);

		return () => clearInterval(typingInterval);
	}, [text, speed, isTyping]);

	return (
		<span className={`animated-typing ${className}`} style={style}>
			{displayedText}
			<span className="typing-cursor"></span>
		</span>
	);
}
