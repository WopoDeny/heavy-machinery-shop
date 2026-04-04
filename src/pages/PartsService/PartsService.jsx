import React from 'react';
import './PartsService.css';

const PartsService = () => {
  const services = [
    {
      id: 1,
      title: "Оригинальные запчасти",
      description: "Мы предлагаем только оригинальные запчасти от производителей",
      icon: "🔧"
    },
    {
      id: 2,
      title: "Сервисное обслуживание",
      description: "Профессиональный ремонт и техническое обслуживание техники",
      icon: "🛠️"
    },
    {
      id: 3,
      title: "Гарантия на работы",
      description: "Предоставляем гарантию на все выполненные работы",
      icon: "✅"
    },
    {
      id: 4,
      title: "Выездные бригады",
      description: "Ремонт и обслуживание на месте эксплуатации техники",
      icon: "🚗"
    }
  ];

  return (
    <div className="parts-service-page">
      <section className="page-hero">
        <h1>Запчасти и сервис</h1>
        <p>Профессиональное обслуживание и оригинальные запчасти для вашей техники</p>
      </section>

      <section className="services-section">
        <div className="container">
          <h2>Наши услуги</h2>
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2>Почему выбирают нас</h2>
          <ul className="benefits-list">
            <li>Официальный сервисный центр ведущих производителей</li>
            <li>Квалифицированные специалисты с многолетним опытом</li>
            <li>Собственный склад запчастей с быстрой доставкой</li>
            <li>Гибкая система скидок для постоянных клиентов</li>
            <li>Строгое соблюдение сроков выполнения работ</li>
          </ul>
        </div>
      </section>

      <section className="contact-promo">
        <div className="container">
          <h2>Нужна консультация?</h2>
          <p>Наши специалисты готовы ответить на все ваши вопросы</p>
          <button className="contact-button">Связаться с нами</button>
        </div>
      </section>
    </div>
  );
};

export default PartsService;