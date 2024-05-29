import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Section.css';

const Section = () => {
    return (
        <nav className="section">
            <ul>
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/news">Новости</Link></li>
                <li><Link to="/about">Об авторе</Link></li>
                <li><Link to="/products">Продукты и услуги</Link></li>
                <li><Link to="/contact">Обратная связь</Link></li>
            </ul>
        </nav>
    );
}

export default Section;