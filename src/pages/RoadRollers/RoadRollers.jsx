import React from 'react';
import { Link } from 'react-router-dom';
import './RoadRollers.css';

const RoadRollers = () => {
  const rollers = [
    {
      id: 1,
      name: "LIUGONG 6032 COMBI",
      description: "Комбинированный тротуарный каток",
      specs: [
        "Рабочий вес: 3360 кг",
        "Мощность: 37 л.с.",
        "Частота вибрации: 60 Гц"
      ],
      image: "https://via.placeholder.com/400x300"
    },
    {
      id: 2,
      name: "LIUGONG 6114E",
      description: "Грунтовый каток",
      specs: [
        "Рабочий вес: 14000 кг",
        "Мощность: 140 л.с.",
        "Частота вибрации: 30 Гц"
      ],
      image: "https://via.placeholder.com/400x300?text=LIUGONG+6114E"
    },
    {
      id: 3,
      name: "LIUGONG 6616E",
      description: "Грунтовый каток повышенной мощности",
      specs: [
        "Рабочий вес: 15500 кг",
        "Мощность: 160 л.с.",
        "Частота вибраций: 30/33 Гц"
      ],
      image: "https://via.placeholder.com/400x300?text=LIUGONG+6616E"
    },
    {
      id: 4,
      name: "LIUGONG 6620E",
      description: "Грунтовый каток профессионального класса",
      specs: [
        "Рабочий вес: 20000 кг",
        "Мощность: 190 л.с.",
        "Частота вибраций: 28/33 Гц"
      ],
      image: "https://via.placeholder.com/400x300?text=LIUGONG+6620E"
    },
    {
      id: 5,
      name: "LIUGONG 6516E",
      description: "Пневмоколесный каток",
      specs: [
        "Рабочий вес: 16000 кг",
        "Мощность: 132 л.с.",
        "Нагрузка на колесо: 1778 кг"
      ],
      image: "https://via.placeholder.com/400x300?text=LIUGONG+6516E"
    }
  ];

  return (
    <div className="road-rollers-page">
      <section className="page-hero">
        <h1>Дорожные катки</h1>
        <p>Профессиональная техника для уплотнения дорожных покрытий</p>
      </section>

      <section className="products-section">
        <div className="container">
          <h2>Наши модели</h2>
          <div className="products-grid">
            {rollers.map(roller => (
              <div key={roller.id} className="product-card">
                <div className="product-image">
                  <img src={roller.image} alt={roller.name} />
                </div>
                <div className="product-info">
                  <h3>{roller.name}</h3>
                  <p className="product-description">{roller.description}</p>
                  <ul className="product-specs">
                    {roller.specs.map((spec, index) => (
                      <li key={index}>{spec}</li>
                    ))}
                  </ul>
                  <Link to={`/road-rollers/${roller.id}`} className="product-button">
                    Подробнее
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2>Преимущества наших дорожных катков</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Высокая производительность</h3>
              <p>Эффективное уплотнение за счет оптимального сочетания веса и вибрации</p>
            </div>
            <div className="feature-card">
              <h3>Надежность</h3>
              <p>Долговечные компоненты и проверенные решения для тяжелых условий работы</p>
            </div>
            <div className="feature-card">
              <h3>Комфорт оператора</h3>
              <p>Эргономичные кабины с низким уровнем шума и вибраций</p>
            </div>
            <div className="feature-card">
              <h3>Экономичность</h3>
              <p>Оптимальный расход топлива и доступные запчасти</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoadRollers;