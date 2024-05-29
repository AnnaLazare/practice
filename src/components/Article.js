import React from 'react';
import './styles/Article.css';

const Article = ({ children }) => {
    return (
        <div className="article">
            {children}
        </div>
    );
}

export default Article;