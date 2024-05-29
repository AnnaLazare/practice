import './styles/Modal.css';
import React, { useState } from 'react';

const Modal = ({ isEdit, onClose, source, onAdd, onEdit, onDelete }) => {

  const [imageUrl, setImageUrl] = useState(source.imageUrl);
  const [title, setTitle] = useState(source.title);
  const [description, setDescription] = useState(source.description);

  const handleSave = () => {
    const item = { imageUrl, title, description };
    !isEdit ? onAdd(item) : onEdit(item);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  const handleDelete = () => {
    onDelete();
    onClose();
  }

  return (
    <div className={'modal'}>
      <div className="modal-content">
        <h2>Новость</h2>
        <div className="form-group">
          <label htmlFor="photo">Фото:</label>
          <input type="text" id="photo" placeholder="вставьте ссылку" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="title">Заголовок:</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Описание:</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        <div className="button-group">
          <button onClick={handleCancel}>Отмена</button>
          <button className='delete' onClick={handleDelete}>Удалить</button>
          <button className='save' onClick={handleSave}>{!isEdit ? 'Добавить' : 'Сохранить'}</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;