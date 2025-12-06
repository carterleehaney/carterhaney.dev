import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

function NotFound() {
  return (
    <div className="not-found">
      <NavBar />
      <div className="not-found-content">
        <h1>404</h1>
        <p>Page not found</p>
        <Link to="/">Go back home</Link>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;

