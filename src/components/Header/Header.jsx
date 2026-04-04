import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';
import logoImage from '../../assets/mst_logo_1x.png';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    checkMobileView();
    window.addEventListener('resize', checkMobileView);
    return () => window.removeEventListener('resize', checkMobileView);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img 
          src={logoImage} 
          alt="МашСпецТорг Логотип" 
          className="logo-image"
        />
      </Link>
      
      {!isMobileView && (
        <nav className="nav">
          <Link to="/road-rollers" className="nav-link">Дорожные катки</Link>
          <Link to="/mini-loaders" className="nav-link">Мини-погрузчики</Link>
          <Link to="/compressors" className="nav-link">Компрессоры</Link>
          <Link to="/parts-service" className="nav-link">Запчасти и сервис</Link>
          <Link to="/contacts" className="nav-link">Контакты</Link>
        </nav>
      )}

      {isMobileView && (
        <button 
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Меню"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      )}

      {isMobileView && isMobileMenuOpen && (
        <div className="mobile-menu">
          <Link to="/road-rollers" className="mobile-nav-link" onClick={closeMobileMenu}>Дорожные катки</Link>
          <Link to="/mini-loaders" className="mobile-nav-link" onClick={closeMobileMenu}>Мини-погрузчики</Link>
          <Link to="/compressors" className="mobile-nav-link" onClick={closeMobileMenu}>Компрессоры</Link>
          <Link to="/parts-service" className="mobile-nav-link" onClick={closeMobileMenu}>Запчасти и сервис</Link>
          <Link to="/contacts" className="mobile-nav-link" onClick={closeMobileMenu}>Контакты</Link>
        </div>
      )}
    </header>
  );
};

export default Header;