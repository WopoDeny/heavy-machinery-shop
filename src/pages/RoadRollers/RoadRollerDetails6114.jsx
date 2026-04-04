import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './RoadRollerDetails.css';

const RoadRollerDetails6114 = () => {
  return (
    <div className="roller-details-page">
      <section className="page-hero">
        <div className="container">
          <h1>LIUGONG 6114E</h1>
          <p>Грунтовый каток</p>
        </div>
      </section>

      <div className="container main-content">
        <div className="roller-overview">
          <div className="roller-gallery">
            <div className="main-image">
              <img src="https://via.placeholder.com/800x500?text=LIUGONG+6114E" alt="LIUGONG 6114E" />
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
                <div className="highlight-value">14 000 кг</div>
                <div className="highlight-label">Рабочий вес</div>
              </div>
              <div className="highlight-card">
                <div className="highlight-value">140 л.с.</div>
                <div className="highlight-label">Мощность</div>
              </div>
              <div className="highlight-card">
                <div className="highlight-value">30 Гц</div>
                <div className="highlight-label">Частота вибрации</div>
              </div>
              <div className="highlight-card">
                <div className="highlight-value">11 км/ч</div>
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
            Грунтовый каток LiuGong 6114 обладает несколькими ключевыми преимуществами:
          </p>
          <ul className="features-list">
            <li>Гибкая и безударная технология вибрационных катков: Продлевает срок службы виброподшипников до более чем 10 000 часов, повышая производительность и снижая износ деталей.</li>
            <li>Барабан большего диаметра в сочетании с постоянством амплитуды обеспечивает оптимальное уплотнение при меньшем количестве проходов.</li>
            <li>Технология охлаждения внутри барабана: Поддерживает сбалансированную температуру на уровне около 90 °C, что на 20 °C ниже среднего по отрасли.</li>
            <li>Эффективная вибросистема с центробежными силами 280/170 кН и виброузлы «безударного» типа - меньше шума, дольше срок службы.</li>
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
                <span className="spec-value">30 Гц</span>
              </div>
            </div>

            <div className="specs-group">
              <h3>РАЗМЕРЫ</h3>
              <div className="spec-item">
                <span className="spec-name">Габаритная длина</span>
                <span className="spec-value">6 000 мм</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Габаритная ширина</span>
                <span className="spec-value">2 280 мм</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Ширина вальца</span>
                <span className="spec-value">2 130 мм</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Диаметр вальца</span>
                <span className="spec-value">1 555 мм</span>
              </div>
            </div>

            <div className="specs-group">
              <h3>ДВИГАТЕЛЬ</h3>
              <div className="spec-item">
                <span className="spec-name">Экологический стандарт</span>
                <span className="spec-value">Tier 2 / Stage II</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Марка</span>
                <span className="spec-value">Shangchai</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Модель</span>
                <span className="spec-value">SC4H140.2G2</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Номинальная мощность</span>
                <span className="spec-value">103 кВт (140 л. с.) при 2 000 об/мин</span>
              </div>
            </div>

            <div className="specs-group">
              <h3>ЗАПРАВОЧНЫЕ ЕМКОСТИ</h3>
              <div className="spec-item">
                <span className="spec-name">Топливный бак</span>
                <span className="spec-value">200 л</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Моторное масло</span>
                <span className="spec-value">14 л</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Бак гидравлического масла</span>
                <span className="spec-value">110 л</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Система охлаждения</span>
                <span className="spec-value">32 л</span>
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

export default RoadRollerDetails6114;