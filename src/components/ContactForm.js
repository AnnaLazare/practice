import React, { useState } from 'react';
import './styles/ContactForm.css';
const ContactForm = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // обработка отправки формы
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <label>
                Имя:
                <input type="text" name="name" value={form.name} onChange={handleChange} required />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={form.email} onChange={handleChange} required />
            </label>
            <label>
                Сообщение:
                <textarea name="message" value={form.message} onChange={handleChange} required></textarea>
            </label>
            <button type="submit">Отправить</button>
        </form>
    );
}

export default ContactForm;