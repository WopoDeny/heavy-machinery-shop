import React from 'react';
import { FaRoad, FaTruckLoading, FaFan, FaCogs } from 'react-icons/fa';
import LocationSection from '../../components/LocationSection/LocationSection';
import CatalogDropdown from '../../components/CatalogDropdown/CatalogDropdown';
import './Home.css';

const Home = () => {
  return (
    <>
      <section className="hero">
        <h1 className="hero-title">МашСпецТорг - техника для профессионалов</h1>
        <div className="hero-subtitle-container">
          <p className="hero-subtitle">
            Мы предлагаем:
          </p>
          <ul className="hero-features">
            <li><FaRoad className="feature-icon" />Дорожные катки для качественного уплотнения покрытий</li>
            <li><FaTruckLoading className="feature-icon" />Мини-погрузчики для работ в ограниченном пространстве</li>
            <li><FaFan className="feature-icon" />Мощные компрессоры для различных задач</li>
            <li><FaCogs className="feature-icon" />Оригинальные запчасти и сервисное обслуживание</li>
          </ul>
        </div>
        <CatalogDropdown />
      </section>
      <LocationSection />
    </>
  );
};

export default Home;