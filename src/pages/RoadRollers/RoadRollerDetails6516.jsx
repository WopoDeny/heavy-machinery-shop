import React from 'react';
import { Link } from 'react-router-dom';
import './RoadRollerDetails.css';

const RoadRollerDetails6516 = () => {
  return (
    <div className="roller-details-page">
      <section className="page-hero">
        <div className="container">
          <h1>LIUGONG 6516E</h1>
          <p>Пневмоколесный каток профессионального класса</p>
        </div>
      </section>

      <div className="container main-content">
        <div className="roller-overview">
          <div className="roller-gallery">
            <div className="main-image">
              <img src="https://via.placeholder.com/800x500?text=LIUGONG+6516E" alt="LIUGONG 6516E" />
            </div>
            <div className="thumbnail-grid">
              <img src="https://via.placeholder.com/200x150?text=Вид+спереди" alt="Вид спереди" />
              <img src="https://via.placeholder.com/200x150?text=Вид+сбоку" alt="Вид сбоку" />
              <img src="https://via.placeholder.com/200x150?text=Кабина" alt="Кабина" />
              <img src="https://via.placeholder.com/200x150?text=Колеса" alt="Колесная система" />
            </div>
          </div>

          <div className="roller-highlights">
            <h2>Ключевые характеристики</h2>
            <div className="highlight-cards">
              <div className="highlight-card">
                <div className="highlight-value">16 000 кг</div>
                <div className="highlight-label">Рабочий вес</div>
              </div>
              <div className="highlight-card">
                <div className="highlight-value">132 л.с.</div>
                <div className="highlight-label">Мощность</div>
              </div>
              <div className="highlight-card">
                <div className="highlight-value">1 778 кг</div>
                <div className="highlight-label">Нагрузка на колесо</div>
              </div>
              <div className="highlight-card">
                <div className="highlight-value">16 км/ч</div>
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
            Пневмоколесный каток LIUGONG 6516E обеспечивает высочайшее качество уплотнения за счет:
          </p>
          <ul className="features-list">
            <li>Эффекта разминания и прокатки колес - вертикальное давление в сочетании с горизонтальными силами обеспечивает отличную равномерную отделку поверхности</li>
            <li>Запатентованной системы подвески шин с наклоняемым передним валом (±8°), что обеспечивает максимальный контакт с землей для каждого колеса</li>
            <li>Оптимальной компактности и повышенной безопасности, предотвращающей опрокидывание катка</li>
            <li>Уникальной колесной системы (4 передних + 5 задних колес) с перекрытием 45мм</li>
          </ul>
        </div>

        <div className="specs-section">
          <h2>ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ</h2>
          
          <div className="specs-grid">
            <div className="specs-group">
              <h3>МАССА И ГАБАРИТЫ</h3>
              <div className="spec-item">
                <span className="spec-name">Эксплуатационная масса с балластом</span>
                <span className="spec-value">16 000 кг</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Габаритные размеры (Д×Ш×В)</span>
                <span className="spec-value">4800 × 2310 × 3270 мм</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Ширина уплотнения</span>
                <span className="spec-value">2250 мм</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Дорожный просвет</span>
                <span className="spec-value">290 мм</span>
              </div>
            </div>

            <div className="specs-group">
              <h3>ДВИГАТЕЛЬ</h3>
              <div className="spec-item">
                <span className="spec-name">Модель</span>
                <span className="spec-value">Cummins 4BTAA3.9-C130</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Мощность</span>
                <span className="spec-value">97 кВт (132 л.с.) при 2500 об/мин</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Крутящий момент</span>
                <span className="spec-value">519 Н·м</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Система подачи воздуха</span>
                <span className="spec-value">С турбонагнетателем</span>
              </div>
            </div>

            <div className="specs-group">
              <h3>КОЛЕСНАЯ СИСТЕМА</h3>
              <div className="spec-item">
                <span className="spec-name">Количество шин</span>
                <span className="spec-value">4 передних, 5 задних</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Типоразмер шин</span>
                <span className="spec-value">11.00-20-16 PR</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Давление в шинах</span>
                <span className="spec-value">200-800 кПа</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Нагрузка на колесо</span>
                <span className="spec-value">1778 кг</span>
              </div>
            </div>

            <div className="specs-group">
              <h3>ТРАНСМИССИЯ</h3>
              <div className="spec-item">
                <span className="spec-name">Тип</span>
                <span className="spec-value">Гидравлический</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Рабочая скорость</span>
                <span className="spec-value">7 км/ч</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Транспортная скорость</span>
                <span className="spec-value">16 км/ч</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Радиус поворота</span>
                <span className="spec-value">8000 мм</span>
              </div>
            </div>
          </div>
        </div>

        <div className="features-section">
          <h2>ДОПОЛНИТЕЛЬНОЕ ОБОРУДОВАНИЕ</h2>
          <ul className="features-list">
            <li>Централизованная пневмосистема</li>
            <li>Система подъема кабины с электроприводом</li>
            <li>Проблесковые маячки</li>
            <li>Дополнительные распылители воды</li>
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

export default RoadRollerDetails6516;