import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <div>
            <h2>Обратная связь</h2>
            <p>Телефон: +7 123 456 78 90</p>
            <p>What’sApp: +7 123 456 78 90</p>
            <p>Telegram: @example</p>
            <ContactForm />
        </div>
    );
}

export default Contact;