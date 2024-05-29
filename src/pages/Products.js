import React from 'react';
import { useState } from 'react';
import Card from '../components/Card';
import './styles/News.css';
import Modal from '../components/Modal';

const ProductsComponent = () => {

  const [products, setProducts] = useState([
    {
      title: 'Марк 2',
      description: 'Mark 2 1 000 000о',
      imageUrl: 'https://lowdaily.ru/wp-content/uploads/2020/09/Toyota-Mark-II-Bad-Habits-lowdaily.jpg'
    },
    {
      title: 'Стол',
      description: 'Крутой стол 2 000р',
      imageUrl: 'https://www.stolberi.ru/upload/iblock/081/0140f3cd_286c_11ea_8086_fcaa145d5838_7580c5f0_cc36_11ea_489b_005056bdce03.jpg'
    },
    {
      title: 'Ручка',
      description: 'Черная ручка 20р',
      imageUrl: 'https://files.toomanygifts.ru/images/media/cache/product_full/product_image/67c3/62e1b8d7a3318162527681.jpg'
    },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState(null);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const changeProducts = (index) => {
    setSelectedProducts(index);
    openModal();
  };

  const onDelete = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };



  return (
    <div>
      <h1>Товары</h1>
      <button className='add-btn' onClick={openModal}>Добавить товар</button>
      {modalOpen &&
        <Modal
          onClose={closeModal}
          isEdit={selectedProducts !== null}
          source={products[selectedProducts] || {}}
          onAdd={(item) => selectedProducts === null && setProducts([...products, item])}
          onEdit={(item) => {
            const updatedProducts = [...products];
            updatedProducts[selectedProducts] = item;
            setProducts(updatedProducts);
          }}
          onDelete={() => onDelete(selectedProducts)}
        />
      }
      <div className="news-container">
        {products.map((item, index) => (
          <div key={index} className="news-card">
            <Card
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              onCardClick={() => changeProducts(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsComponent;
