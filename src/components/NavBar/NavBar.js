import './NavBar.css';

export default function NavBar() {
	return (
		<nav className="navbar" aria-label="Main navigation">
			<a className="navbar-brand" href="#home" aria-label="Carter Haney, home">
				Carter Haney
			</a>
			<ul className="navbar-links">
				<li><a href="#about">About</a></li>
				<li><a href="#contact">Connect</a></li>
			</ul>
		</nav>
	);
}
