import React from 'react';
import './Compressors.css';

const Compressors = () => {
  const products = [
    {
      id: 1,
      name: "Компрессор C-100",
      description: "Передвижной дизельный компрессор",
      specs: [
        "Производительность: 10 м³/мин",
        "Давление: 8 бар",
        "Мощность: 75 кВт",
        "Объем ресивера: 500 л"
      ],
      image: "https://via.placeholder.com/400x300"
    },
    {
      id: 2,
      name: "Компрессор C-200",
      description: "Стационарный винтовой компрессор",
      specs: [
        "Производительность: 20 м³/мин",
        "Давление: 10 бар",
        "Мощность: 110 кВт",
        "Объем ресивера: 1000 л"
      ],
      image: "https://via.placeholder.com/400x300"
    },
    {
      id: 3,
      name: "Компрессор C-300",
      description: "Поршневой компрессор высокого давления",
      specs: [
        "Производительность: 5 м³/мин",
        "Давление: 30 бар",
        "Мощность: 55 кВт",
        "Объем ресивера: 300 л"
      ],
      image: "https://via.placeholder.com/400x300"
    }
  ];

  return (
    <div className="compressors-page">
      <section className="page-hero">
        <h1>Компрессоры</h1>
        <p>Мощные и надежные компрессоры для различных задач</p>
      </section>

      <section className="products-section">
        <div className="container">
          <h2>Наши модели</h2>
          <div className="products-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <ul className="product-specs">
                    {product.specs.map((spec, index) => (
                      <li key={index}>{spec}</li>
                    ))}
                  </ul>
                  <button className="product-button">Подробнее</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2>Преимущества наших компрессоров</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Надежность</h3>
              <p>Долгий срок службы благодаря качественным компонентам</p>
            </div>
            <div className="feature-card">
              <h3>Экономичность</h3>
              <p>Низкий расход топлива и энергопотребление</p>
            </div>
            <div className="feature-card">
              <h3>Простота обслуживания</h3>
              <p>Легкий доступ к основным узлам для техобслуживания</p>
            </div>
            <div className="feature-card">
              <h3>Гарантия</h3>
              <p>Официальная гарантия 1.5 года на все модели</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Compressors;