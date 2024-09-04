import React from 'react';
import '../styles/Menu.css';

const translations = {
  English: { home: "Home", movies: "Movies", tvShows: "TV Shows", sports: "Sports", live: "Live" },
  French: { home: "Accueil", movies: "Films", tvShows: "Séries TV", sports: "Sports", live: "Direct" },
  German: { home: "Startseite", movies: "Filme", tvShows: "Fernsehshows", sports: "Sport", live: "Live" },
  Russian: { home: "Главная", movies: "Фильмы", tvShows: "Телешоу", sports: "Спорт", live: "Прямой эфир" },
  Spanish: { home: "Inicio", movies: "Películas", tvShows: "Series de TV", sports: "Deportes", live: "En vivo" },
  Chinese: { home: "主页", movies: "电影", tvShows: "电视节目", sports: "运动", live: "直播" },
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
