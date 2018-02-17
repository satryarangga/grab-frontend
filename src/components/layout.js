import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
	return (
			<nav className="navbar navbar-grab">
				<div className="container-fluid">
					<div className="navbar-header">
						<Link to="/" className="navbar-brand">Grab Nearest Restaurant</Link>
					</div>
				</div>
			</nav>
		);
}

export const Footer = () => {
	return (
			<div className="footer">
				<p>Made by Satrya Rangga Buana</p>
			</div>
		);
}