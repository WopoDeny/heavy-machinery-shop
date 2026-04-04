import React, { useState } from 'react';
import './FloatingContactButton.css';
import { FaWhatsapp, FaTelegram, FaEnvelope } from 'react-icons/fa';

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="floating-contact-container">
      {isOpen && (
        <div className="contact-popup">
          <h3>Напишите нам</h3>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Ваше имя" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Телефон" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Ваше сообщение" rows="3" required></textarea>
            </div>
            <button type="submit" className="submit-button">Отправить</button>
          </form>
          
          <div className="social-links">
            <p>Или свяжитесь через:</p>
            <div className="social-icons">
              <a href="https://wa.me/вашномер" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="social-icon whatsapp" />
              </a>
              <a href="https://t.me/вашusername" target="_blank" rel="noopener noreferrer">
                <FaTelegram className="social-icon telegram" />
              </a>
              <a href="mailto:ваш@email.com">
                <FaEnvelope className="social-icon email" />
              </a>
            </div>
          </div>

          <button 
            className="close-button" 
            onClick={() => setIsOpen(false)}
            aria-label="Закрыть форму"
          >
            ×
          </button>
        </div>
      )}
      <button 
        className="floating-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Открыть форму связи"
      >
        <span className="button-text">Написать нам</span>
        <span className="button-icon">✉️</span>
      </button>
    </div>
  );
};

export default FloatingContactButton;