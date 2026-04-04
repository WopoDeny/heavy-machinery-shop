import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-columns">
          <div className="footer-column">
            <h3 className="footer-title">Контакты</h3>
            <ul className="footer-list">
              <li>Горячая линия: <a href="tel:+78005059434">+7 (800) 505-94-34</a></li>
              <li>Email: <a href="mailto:sales@ms-torg.com">sales@ms-torg.com</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Каталог</h3>
            <ul className="footer-list">
              <li><Link to="/road-rollers">Дорожные катки</Link></li>
              <li><Link to="/mini-loaders">Мини-погрузчики</Link></li>
              <li><Link to="/compressors">Компрессоры</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Компания</h3>
            <ul className="footer-list">
              <li><Link to="/about">О компании</Link></li>
              <li><Link to="/parts-service">Запчасти и сервис</Link></li>
              <li><Link to="/contacts">Контакты</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ООО "МашСпецТорг". Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;