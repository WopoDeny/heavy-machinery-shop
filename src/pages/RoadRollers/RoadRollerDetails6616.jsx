import React from 'react';
import { Link } from 'react-router-dom';
import './RoadRollerDetails.css';

const RoadRollerDetails6616 = () => {
  return (
    <div className="roller-details-page">
      <section className="page-hero">
        <div className="container">
          <h1>LIUGONG 6616E</h1>
          <p>Грунтовый каток</p>
        </div>
      </section>

      <div className="container main-content">
        <div className="roller-overview">
          <div className="roller-gallery">
            <div className="main-image">
              <img src="https://via.placeholder.com/800x500?text=LIUGONG+6616E" alt="LIUGONG 6616E" />
            </div>
            <div className="thumbnail-grid">
              <img src="https://via.placeholder.com/200x150?text=Вид+спереди" alt="Вид спереди" />
              <img src="https://via.placeholder.com/200x150?text=Вид+сбоку" alt="Вид сбоку" />
              <img src="https://via.placeholder.com/200x150?text=Кабина" alt="Кабина" />
              <img src="https://via.placeholder.com/200x150?text=Двигатель" alt="Двигатель" />
            </div>
          </div>

          <div className="roller-highlights">
            <h2>Ключевые характеристики</h2>
            <div className="highlight-cards">
              <div className="highlight-card">
                <div className="highlight-value">15 500 кг</div>
                <div className="highlight-label">Рабочий вес</div>
              </div>
              <div className="highlight-card">
                <div className="highlight-value">160 л.с.</div>
                <div className="highlight-label">Мощность</div>
              </div>
              <div className="highlight-card">
                <div className="highlight-value">30/33 Гц</div>
                <div className="highlight-label">Частота вибраций</div>
              </div>
              <div className="highlight-card">
                <div className="highlight-value">12 км/ч</div>
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
            Грунтовый каток LiuGong 6616E обладает несколькими ключевыми преимуществами:
          </p>
          <ul className="features-list">
            <li>Гибкая и безударная технология вибрационного катка продлевает срок службы виброподшипников до более чем 10 000 часов, повышая производительность и снижая износ деталей.</li>
            <li>Благодаря высокоэффективному виброаппарату с двойной амплитудой, каток создает лучшую в отрасли центробежную силу уплотнения.</li>
            <li>Барабан большего диаметра в сочетании с постоянством и однородностью амплитуды обеспечивает оптимальное усилие уплотнения при меньшем количестве проходов.</li>
          </ul>
        </div>

        <div className="specs-section">
          <h2>ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ</h2>
          
          <div className="specs-grid">
            <div className="specs-group">
              <h3>РАБОЧИЕ ХАРАКТЕРИСТИКИ</h3>
              <div className="spec-item">
                <span className="spec-name">Статическая линейная нагрузка на передний валец</span>
                <span className="spec-value">322 Н/см</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Количество вибрирующих вальцов</span>
                <span className="spec-value">1</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Номинальный амплитудный диапазон</span>
                <span className="spec-value">2.0/1.2 мм</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Диапазон частоты вибраций</span>
                <span className="spec-value">30/33 Гц</span>
              </div>
            </div>

            <div className="specs-group">
              <h3>РАЗМЕРЫ И ВЕС</h3>
              <div className="spec-item">
                <span className="spec-name">Длина × ширина × высота</span>
                <span className="spec-value">6000 × 2280 × 3080 мм</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Рабочая ширина</span>
                <span className="spec-value">2130 мм</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Эксплуатационная масса</span>
                <span className="spec-value">15 500 кг</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Нагрузка на вибрирующий валец</span>
                <span className="spec-value">9500 кг</span>
              </div>
            </div>

            <div className="specs-group">
              <h3>ДВИГАТЕЛЬ</h3>
              <div className="spec-item">
                <span className="spec-name">Модель и производитель</span>
                <span className="spec-value">Cummins 6BTAA5.9</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Номинальная мощность</span>
                <span className="spec-value">118 кВт (160 л.с.) при 2200 об/мин</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Система подачи воздуха</span>
                <span className="spec-value">С турбонагнетателем и промежуточным охладителем</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Максимальный крутящий момент</span>
                <span className="spec-value">670 Н·м</span>
              </div>
            </div>

            <div className="specs-group">
              <h3>ТРАНСМИССИЯ</h3>
              <div className="spec-item">
                <span className="spec-name">Тип трансмиссии</span>
                <span className="spec-value">Гидравлический</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Скорость (1)</span>
                <span className="spec-value">4,5 км/ч</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Скорость (2)</span>
                <span className="spec-value">6,1 км/ч</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Скорость (3)</span>
                <span className="spec-value">6,7 км/ч</span>
              </div>
            </div>
          </div>
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

export default RoadRollerDetails6616;