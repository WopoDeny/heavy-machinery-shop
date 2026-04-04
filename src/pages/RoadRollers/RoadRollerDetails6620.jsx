import React from 'react';
import { Link } from 'react-router-dom';
import './RoadRollerDetails.css';

const RoadRollerDetails6620 = () => {
  return (
    <div className="roller-details-page">
      <section className="page-hero">
        <div className="container">
          <h1>LIUGONG 6620E</h1>
          <p>Грунтовый каток повышенной мощности</p>
        </div>
      </section>

      <div className="container main-content">
        <div className="roller-overview">
          <div className="roller-gallery">
            <div className="main-image">
              <img src="https://via.placeholder.com/800x500?text=LIUGONG+6620E" alt="LIUGONG 6620E" />
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
                <div className="highlight-value">20 000 кг</div>
                <div className="highlight-label">Рабочий вес</div>
              </div>
              <div className="highlight-card">
                <div className="highlight-value">190 л.с.</div>
                <div className="highlight-label">Мощность</div>
              </div>
              <div className="highlight-card">
                <div className="highlight-value">28/33 Гц</div>
                <div className="highlight-label">Частота вибраций</div>
              </div>
              <div className="highlight-card">
                <div className="highlight-value">10.5 км/ч</div>
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
            Грунтовый каток LiuGong 6620E обладает несколькими ключевыми преимуществами:
          </p>
          <ul className="features-list">
            <li>Гибкая и безударная технология продлевает срок службы виброподшипников до более чем 10 000 часов, повышая производительность и снижая износ деталей.</li>
            <li>Благодаря двухчастотному режиму и режиму вибрации с двойной амплитудой, каток создает лучшую в отрасли центробежную силу уплотнения.</li>
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
                <span className="spec-value">607 Н/см</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Количество вибрирующих вальцов</span>
                <span className="spec-value">1</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Номинальная амплитуда</span>
                <span className="spec-value">2/1.2 мм</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Частота вибраций</span>
                <span className="spec-value">28/33 Гц</span>
              </div>
            </div>

            <div className="specs-group">
              <h3>РАЗМЕРЫ И ВЕС</h3>
              <div className="spec-item">
                <span className="spec-name">Длина × ширина × высота</span>
                <span className="spec-value">6450 × 2400 × 3050 мм</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Рабочая ширина</span>
                <span className="spec-value">2130 мм</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Эксплуатационная масса</span>
                <span className="spec-value">20 000 кг</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Нагрузка на вибрирующий валец</span>
                <span className="spec-value">13 200 кг</span>
              </div>
            </div>

            <div className="specs-group">
              <h3>ДВИГАТЕЛЬ</h3>
              <div className="spec-item">
                <span className="spec-name">Модель и производитель</span>
                <span className="spec-value">Shangchai SC8D190G2B1</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Номинальная мощность</span>
                <span className="spec-value">140 кВт (190 л.с.) при 2200 об/мин</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Система подачи воздуха</span>
                <span className="spec-value">С турбонагнетателем и промежуточным охладителем</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Максимальный крутящий момент</span>
                <span className="spec-value">650 Н·м</span>
              </div>
            </div>

            <div className="specs-group">
              <h3>ТРАНСМИССИЯ</h3>
              <div className="spec-item">
                <span className="spec-name">Тип трансмиссии</span>
                <span className="spec-value">Гидростатический</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Скорость (1)</span>
                <span className="spec-value">4 км/ч</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Скорость (2)</span>
                <span className="spec-value">5,5 км/ч</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Скорость (3)</span>
                <span className="spec-value">6,5 км/ч</span>
              </div>
            </div>
          </div>
        </div>

        <div className="features-section">
          <h2>ДОПОЛНИТЕЛЬНОЕ ОБОРУДОВАНИЕ</h2>
          <ul className="features-list">
            <li>Комплект сегментов кулачкового вальца (PDH)</li>
            <li>Проблесковый маячок</li>
            <li>Сигнализация движения задним ходом</li>
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

export default RoadRollerDetails6620;