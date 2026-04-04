import React from 'react';
import { Link } from 'react-router-dom';
import './RoadRollerDetails.css';

const RoadRollerDetails = () => {
  return (
    <div className="roller-details-page">
      <section className="page-hero">
        <div className="container">
          <h1>LIUGONG 6032 COMBI</h1>
          <p>Комбинированный тротуарный каток</p>
        </div>
      </section>

      <div className="container main-content">
        <div className="roller-overview">
          <div className="roller-gallery">
            <div className="main-image">
              <img src="https://via.placeholder.com/800x500" alt="LIUGONG 6032 COMBI" />
            </div>
            <div className="thumbnail-grid">
              <img src="https://via.placeholder.com/200x150" alt="Вид спереди" />
              <img src="https://via.placeholder.com/200x150" alt="Вид сбоку" />
              <img src="https://via.placeholder.com/200x150" alt="Кабина" />
              <img src="https://via.placeholder.com/200x150" alt="Двигатель" />
            </div>
          </div>

          <div className="roller-highlights">
            <h2>Ключевые характеристики</h2>
            <div className="highlight-cards">
              <div className="highlight-card">
                <div className="highlight-value">3 360 кг</div>
                <div className="highlight-label">Рабочий вес</div>
              </div>
              <div className="highlight-card">
                <div className="highlight-value">37 л.с.</div>
                <div className="highlight-label">Мощность</div>
              </div>
              <div className="highlight-card">
                <div className="highlight-value">60 Гц</div>
                <div className="highlight-label">Частота вибрации</div>
              </div>
              <div className="highlight-card">
                <div className="highlight-value">10 км/ч</div>
                <div className="highlight-label">Макс. скорость</div>
              </div>
            </div>

            <div className="cta-buttons">
              <button className="primary-button">Запросить цену</button>
              <button className="secondary-button">Скачать каталог</button>
            </div>
          </div>
        </div>

        <div className="roller-description">
          <h2>ХАРАКТЕРИСТИКИ И ПРЕИМУЩЕСТВА</h2>
          <p>
            Комбинированный тротуарный каток Лигонг 6032E (Combination) отличает инновационное сочетание пневматических шин и вальцов. 
            Используемая в компактных катках (до 4 т) технология высокочастотной и низкоамплитудной вибрации обеспечивает единообразное 
            и качественное уплотнение, а благодаря снижению количества проходов экономит время и деньги. Характеристики техники можно 
            увеличить дополнительно, заказав высокочастотное оборудование для 6032E (Combination).
          </p>
          <p>
            Комбинированный тротуарный каток LiuGong 6032E (Combination) обладает достаточными возможностями, чтобы работать в режиме 
            высокой нагрузки в несколько смен.
          </p>
        </div>

        <div className="specs-section">
          <h2>ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ</h2>
          
          <div className="specs-grid">
            <div className="specs-group">
              <h3>РАБОЧИЕ ХАРАКТЕРИСТИКИ</h3>
              <div className="spec-item">
                <span className="spec-name">Статическая линейная нагрузка на передний валец</span>
                <span className="spec-value">135 Н/см</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Количество вибрирующих вальцов</span>
                <span className="spec-value">1</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Номинальная амплитуда</span>
                <span className="spec-value">0.45 мм</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Частота вибраций</span>
                <span className="spec-value">60 Гц</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Центробежная сила</span>
                <span className="spec-value">33.5 кН</span>
              </div>
            </div>

            <div className="specs-group">
              <h3>ДВИГАТЕЛЬ</h3>
              <div className="spec-item">
                <span className="spec-name">Экологический стандарт</span>
                <span className="spec-value">Tier 3 / Stage III</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Марка</span>
                <span className="spec-value">Perkins</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Модель</span>
                <span className="spec-value">403D-15T</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Номинальная мощность</span>
                <span className="spec-value">27.3 кВт (37 л. с.) при 2 600 об/мин</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Количество цилиндров</span>
                <span className="spec-value">3</span>
              </div>
            </div>

            <div className="specs-group">
              <h3>ГИДРАВЛИЧЕСКАЯ СИСТЕМА</h3>
              <div className="spec-item">
                <span className="spec-name">Тип главного насоса</span>
                <span className="spec-value">Поршневой насос</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Давление разгрузки контура рабочего оборудования</span>
                <span className="spec-value">20 МПа</span>
              </div>
            </div>

            <div className="specs-group">
              <h3>ЗАПРАВОЧНЫЕ ЕМКОСТИ</h3>
              <div className="spec-item">
                <span className="spec-name">Топливный бак</span>
                <span className="spec-value">60 л</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Моторное масло</span>
                <span className="spec-value">7 л</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Гидросистема</span>
                <span className="spec-value">54 л</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Система охлаждения</span>
                <span className="spec-value">12 л</span>
              </div>
            </div>
          </div>
        </div>

        <div className="features-section">
          <h2>ДОПОЛНИТЕЛЬНОЕ ОБОРУДОВАНИЕ</h2>
          <ul className="features-list">
            <li>Проблесковый маячок</li>
            <li>Высокочастотное оборудование</li>
            <li>Дополнительные световые приборы</li>
            <li>Система орошения</li>
          </ul>
        </div>

        <div className="back-link">
          <Link to="/road-rollers" className="back-button">
            ← Вернуться к списку катков
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoadRollerDetails;