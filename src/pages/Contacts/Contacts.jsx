import React from 'react';
import LocationSection from '../../components/LocationSection/LocationSection';
import './Contacts.css';
import { FaWhatsapp, FaTelegram, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contacts = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Форма отправлена! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="contacts-page">
      <section className="page-hero">
        <h1>Контакты</h1>
        <p>Свяжитесь с нами для получения дополнительной информации</p>
      </section>

      <div className="contacts-container">
        <LocationSection />
        
        <div className="contact-form-container">
          <h2>Напишите нам</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Ваше имя</label>
              <input type="text" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Телефон</label>
              <input type="tel" id="phone" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Сообщение</label>
              <textarea id="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">Отправить</button>
          </form>

          <div className="contact-methods">
            <h3>Другие способы связи</h3>
            <div className="contact-items">
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+7 (800) 505-94-34</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>sales@ms-torg.com</span>
              </div>
              <div className="contact-social">
                <a href="https://wa.me/вашномер" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="social-icon whatsapp" />
                </a>
                <a href="https://t.me/sales@ms-torg.com" target="_blank" rel="noopener noreferrer">
                  <FaTelegram className="social-icon telegram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;