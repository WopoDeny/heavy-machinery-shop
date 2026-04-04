import React from 'react';
import './MiniLoaders.css';

const MiniLoaders = () => {
  const products = [
    {
      id: 1,
      name: "Мини-погрузчик M-100",
      description: "Компактный гусеничный мини-погрузчик",
      specs: [
        "Грузоподъемность: 1000 кг",
        "Мощность: 74 л.с.",
        "Объем ковша: 0.5 м³",
        "Вес: 3500 кг"
      ],
      image: "https://via.placeholder.com/400x300"
    },
    {
      id: 2,
      name: "Мини-погрузчик M-200",
      description: "Колесный мини-погрузчик с бортовым поворотом",
      specs: [
        "Грузоподъемность: 1500 кг",
        "Мощность: 90 л.с.",
        "Объем ковша: 0.8 м³",
        "Вес: 4500 кг"
      ],
      image: "https://via.placeholder.com/400x300"
    }
  ];

  return (
    <div className="mini-loaders-page">
      <section className="page-hero">
        <h1>Мини-погрузчики</h1>
        <p>Компактная техника для работ в ограниченном пространстве</p>
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
          <h2>Преимущества наших мини-погрузчиков</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Манёвренность</h3>
              <p>Работа в стесненных условиях благодаря компактным размерам</p>
            </div>
            <div className="feature-card">
              <h3>Универсальность</h3>
              <p>Широкий выбор навесного оборудования для разных задач</p>
            </div>
            <div className="feature-card">
              <h3>Проходимость</h3>
              <p>Гусеничные и колесные модели для любых условий</p>
            </div>
            <div className="feature-card">
              <h3>Экономичность</h3>
              <p>Низкий расход топлива и доступные запчасти</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MiniLoaders;