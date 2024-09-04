
import React from 'react';
import '../styles/Menu.css';

const translations = {
  English: { 
    home: "Welcome to the Home Page. Explore our content and enjoy!", 
    movies: "Welcome to the Movies Section. Find your favorite films here.", 
    tvShows: "Welcome to TV Shows. Discover the latest and greatest series.", 
    sports: "Welcome to the Sports Area. Catch up on all the latest sports news and events.", 
    live: "Welcome to Live Broadcasting. Watch live events as they happen." 
  },
  French: { 
    home: "Bienvenue sur la page d'accueil. Explorez notre contenu et profitez-en !", 
    movies: "Bienvenue dans la section Films. Trouvez vos films préférés ici.", 
    tvShows: "Bienvenue dans Séries TV. Découvrez les dernières et meilleures séries.", 
    sports: "Bienvenue dans la zone Sports. Suivez toutes les dernières nouvelles et événements sportifs.", 
    live: "Bienvenue dans la diffusion en direct. Regardez les événements en direct." 
  },
  German: { 
    home: "Willkommen auf der Startseite. Entdecken Sie unsere Inhalte und genießen Sie!", 
    movies: "Willkommen im Bereich Filme. Finden Sie hier Ihre Lieblingsfilme.", 
    tvShows: "Willkommen bei Fernsehshows. Entdecken Sie die neuesten und besten Serien.", 
    sports: "Willkommen im Sportbereich. Erfahren Sie alles über die neuesten Sportnachrichten und -ereignisse.", 
    live: "Willkommen beim Live-Streaming. Sehen Sie Live-Events, während sie geschehen." 
  },
  Russian: { 
    home: "Добро пожаловать на главную страницу. Исследуйте наш контент и наслаждайтесь!", 
    movies: "Добро пожаловать в раздел Фильмы. Найдите свои любимые фильмы здесь.", 
    tvShows: "Добро пожаловать в Телешоу. Откройте для себя последние и лучшие сериалы.", 
    sports: "Добро пожаловать в раздел Спорт. Следите за последними новостями и событиями в спорте.", 
    live: "Добро пожаловать в прямой эфир. Смотрите события в режиме реального времени." 
  },
  Spanish: { 
    home: "Bienvenido a la página de inicio. Explora nuestro contenido y disfrútalo.", 
    movies: "Bienvenido a la sección de Películas. Encuentra tus películas favoritas aquí.", 
    tvShows: "Bienvenido a Series de TV. Descubre las últimas y mejores series.", 
    sports: "Bienvenido al área de Deportes. Mantente al tanto de las últimas noticias y eventos deportivos.", 
    live: "Bienvenido a la transmisión en vivo. Mira eventos en vivo a medida que ocurren." 
  },
  Chinese: { 
    home: "欢迎来到主页。探索我们的内容并享受！", 
    movies: "欢迎来到电影区。找到你喜欢的电影。", 
    tvShows: "欢迎来到电视节目区。发现最新和最受欢迎的系列。", 
    sports: "欢迎来到体育区。了解最新的体育新闻和事件。", 
    live: "欢迎来到直播。观看实时发生的事件。" 
  },
};


const images = {
  home: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_IO4v3NBVGGky3UDOtQWMnNXgO80MPepO4A&s',
  movies: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPJ2998BPBrKJJgbB2sR4DwNECOWsiUebqCw&s',
  tvShows: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2d-4T_wip3-JMSh0jI45acgKfXuL_fEWYvg&s',
  sports: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG_HPQ0FhmdZPXIHbANniyQyVWO1m7mk0zKg&s',
  live: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkzHrbgaGelYBdFzwK7NR3MteYWLI6MWs8aA&s',
};

const Menu = ({ language }) => {
  const menuItems = translations[language];

  return (
    <div className="menu">
      {Object.keys(menuItems).map((key) => (
        <div key={key} className="menu-item" style={{ backgroundImage: `url(${images[key]})` }}>
          <div className="overlay">
            <h2>{menuItems[key]}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
