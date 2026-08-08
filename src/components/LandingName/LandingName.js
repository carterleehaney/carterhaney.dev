import AnimatedTyping from '../AnimatedTyping/AnimatedTyping';
import './LandingName.css';

export default function LandingName() {
	return (
		<section id="home" className="landing-name">
			<h1>
				<AnimatedTyping
					text="Carter Haney"
					speed={80}
					className="landing-name-text"
				/>
			</h1>
			<p className="landing-subtitle">Cybersecurity, infrastructure, and the occasional side quest.</p>
			<div className="landing-cta">
				<a href="#contact" className="cta-button">
					Say hello
				</a>
			</div>
		</section>
	);
}
