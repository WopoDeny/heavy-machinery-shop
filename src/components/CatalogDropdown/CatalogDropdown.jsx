import React, { useState, useEffect, useRef } from 'react';
import { FaRoad, FaTruckLoading, FaFan } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './CatalogDropdown.css';

const CatalogDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleContactClick = () => {
    // Здесь можно добавить логику для открытия формы связи
    // Например, перенаправление на страницу контактов или модальное окно
    window.location.href = '/contacts';
  };

  return (
    <div className="buttons-container" ref={dropdownRef}>
      <div className="dropdown-container">
        <button 
          className="dropdown-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          Смотреть каталог
        </button>
        
        {isOpen && (
          <div className="dropdown-menu">
            <Link 
              to="/road-rollers" 
              className="dropdown-item"
              onClick={() => setIsOpen(false)}
            >
              <FaRoad className="dropdown-icon" />
              Дорожные катки
            </Link>
            <Link 
              to="/mini-loaders" 
              className="dropdown-item"
              onClick={() => setIsOpen(false)}
            >
              <FaTruckLoading className="dropdown-icon" />
              Мини-погрузчики
            </Link>
            <Link 
              to="/compressors" 
              className="dropdown-item"
              onClick={() => setIsOpen(false)}
            >
              <FaFan className="dropdown-icon" />
              Компрессоры
            </Link>
          </div>
        )}
      </div>
      
      <button 
        className="contact-button"
        onClick={handleContactClick}
      >
        Написать нам
      </button>
    </div>
  );
};

export default CatalogDropdown;