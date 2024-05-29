import React from 'react';
import { useState } from 'react';
import Card from '../components/Card';
import './styles/Aside.css';
import '../pages/styles/News.css';

const Aside = () => {
  const [items, setItems] = useState([
    {
      title: 'Марк 2',
      description: 'Mark 2 1 000 000о',
      imageUrl: 'https://lowdaily.ru/wp-content/uploads/2020/09/Toyota-Mark-II-Bad-Habits-lowdaily.jpg'
    },
    {
      title: 'В Ростове прошел день города',
      description: 'В ростове прошел день города, мы все рады этому',
      imageUrl: 'https://s13.stc.yc.kpcdn.net/share/i/12/13369402/wr-960.webp'
    },
    {
      title: 'Русский медвежонок',
      description: '1 место в стране по русскому языку',
      imageUrl: 'https://leksis.ru/wp-content/uploads/2021/03/6a315301c5cc93b7f6c62a47a53de39d-e1614695536793.jpg'
    }
  ]);

  return (
    <aside className="aside">
        <div className="aside-container">
        {items.map((item, index) => (
          <div key={index} className="aside-card">
            <Card
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Aside;