import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Airdrop Alert</div>
      <button className="toggle-btn" onClick={toggleMenu}>
        {isOpen ? '✖' : '☰'}
      </button>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li className="dropdown">
          <span className="dropdown-toggle">Airdrops</span>
          <ul className="dropdown-menu">
            <li><Link to="/featured-airdrops" onClick={toggleMenu}>Featured Airdrops</Link></li>
            <li><Link to="/new-airdrops" onClick={toggleMenu}>New Airdrops</Link></li>
            <li><Link to="/defi-airdrops" onClick={toggleMenu}>DeFi Airdrops</Link></li>
            <li><Link to="/nft-airdrops" onClick={toggleMenu}>NFT Airdrops</Link></li>
            <li><Link to="/earn-crypto" onClick={toggleMenu}>Earn Crypto</Link></li>
          </ul>
        </li>
        <li><Link to="/latest-news" onClick={toggleMenu}>Blog</Link></li>
        <li><Link to="/" onClick={toggleMenu}>Cointracker</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;