import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';
import './LocationSection.css';

const LocationSection = () => {
  return (
    <section className="location-section" id="contacts">
      <div className="location-container">
        <div className="location-info">
          <h2 className="location-title">Где нас найти</h2>
          <div className="address">
            <h3><FaMapMarkerAlt /> Адрес:</h3>
            <p>г. Краснодар, Симферопольская улица, 62</p>
          </div>
          <div className="contacts">
            <h3><FaPhone /> Горячая линия:</h3>
            <p>+7 (800) 505-94-34</p>
          </div>
          <div className="working-hours">
            <h3><FaClock /> Часы работы:</h3>
            <p>Пн-Пт: 9:00 - 18:00</p>
            <p>Сб: 10:00 - 15:00</p>
            <p>Вс: выходной</p>
          </div>
        </div>
        
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.123456789012!2d38.987654321!3d45.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f05a123456789%3A0xabcdef1234567890!2z0KHQuNC80L7QvdC-0LLQuNGP0L3QsNGPLCDQmtGA0LDRgdC90L7QtNCw0YAsIDYy!5e0!3m2!1sru!2sru!4v1234567890123!5m2!1sru!2sru"
            width="100%"
            height="400"
            style={{border:0}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;