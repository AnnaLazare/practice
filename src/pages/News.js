import React from 'react';
import { useState } from 'react';
import Card from '../components/Card';
import './styles/News.css';
import Modal from '../components/Modal';

const NewsComponent = () => {

  const [news, setNews] = useState([
    {
      title: 'В Ростове прошел день города',
      description: 'В ростове прошел день города, мы все рады этому',
      imageUrl: 'https://s13.stc.yc.kpcdn.net/share/i/12/13369402/wr-960.webp'
    },
    {
      title: 'ЦБ РФ повысила ставки',
      description: 'Повышение ставки',
      imageUrl: 'https://jetlend.ru/wp-content/uploads/f321b34fc6f747e3b5b7448a4aaf00ea.jpg'
    },
    {
      title: 'В ростове было замечено северное сияние',
      description: 'Было красиво',
      imageUrl: 'https://privet-rostov.ru/uploads/posts/2023-04/aurora-borealis-gb5d805e5e_1280.jpg'
    },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const changeNews = (index) => {
    setSelectedNews(index);
    openModal();
  };

  const onDelete = (index) => {
    const updatedNews = [...news];
    updatedNews.splice(index, 1);
    setNews(updatedNews);
  };



  return (
    <div>
      <h1>Новости</h1>
      <button className='add-btn' onClick={openModal}>Добавить новость</button>
      {modalOpen &&
        <Modal
          onClose={closeModal}
          isEdit={selectedNews !== null}
          source={news[selectedNews] || {}}
          onAdd={(item) => selectedNews === null && setNews([...news, item])}
          onEdit={(item) => {
            const updatedNews = [...news];
            updatedNews[selectedNews] = item;
            setNews(updatedNews);
          }}
          onDelete={() => onDelete(selectedNews)}
        />
      }
      <div className="news-container">
        {news.map((item, index) => (
          <div key={index} className="news-card">
            <Card
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              onCardClick={() => changeNews(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsComponent;