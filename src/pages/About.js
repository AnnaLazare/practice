import React from 'react';
import { useState } from 'react';
import Card from '../components/Card';
import './styles/News.css';
import Modal from '../components/Modal';

const About = () => {
    const [achievements, setAchievements] = useState([
    {
      title: 'Русский медвежонок',
      description: '1 место в стране по русскому языку',
      imageUrl: 'https://leksis.ru/wp-content/uploads/2021/03/6a315301c5cc93b7f6c62a47a53de39d-e1614695536793.jpg'
    },
    {
      title: 'Красный диплом ЮФУ',
      description: 'Диплом с отличием',
      imageUrl: 'https://img.tsargrad.tv/cache/1/b/gjkd.jpg/w720h405fill.jpg'
    },
    {
      title: 'Должность императора собственной квартиры',
      description: 'Император квартиры',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Imperial_State_Crown2.JPG/800px-Imperial_State_Crown2.JPG'
    },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAchievements, setSelectedAchievements] = useState(null);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const changeAchievements = (index) => {
    setSelectedAchievements(index);
    openModal();
  };

  const onDelete = (index) => {
    const updatedAchievements = [...achievements];
    updatedAchievements.splice(index, 1);
    setAchievements(updatedAchievements);
  };

  return (
    <div>
      <h1>Об авторе</h1>
      <h3 className='about'>Меня зовут Анна</h3>
      <h3 className='about'>Этот проект мы постарались сделать как можно лучше</h3>
      <h3 className='about'>Моя почта: alazare@sfedu.ru</h3>
      <button className='add-btn' onClick={openModal}>Добавить достижение</button>
      {modalOpen &&
        <Modal
          onClose={closeModal}
          isEdit={selectedAchievements !== null}
          source={achievements[selectedAchievements] || {}}
          onAdd={(item) => selectedAchievements === null && setAchievements([...achievements, item])}
          onEdit={(item) => {
            const updatedAchievements = [...achievements];
            updatedAchievements[selectedAchievements] = item;
            setAchievements(updatedAchievements);
          }}
          onDelete={() => onDelete(selectedAchievements)}
        />
      }
      <div className="news-container">
        {achievements.map((item, index) => (
          <div key={index} className="news-card">
            <Card
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              onCardClick={() => changeAchievements(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;