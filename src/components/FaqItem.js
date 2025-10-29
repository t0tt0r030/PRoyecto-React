import React, { useState } from 'react';

const FaqItem = ({ question, answer }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    };
    const itemClassName = isOpen ? 'faq-item active' : 'faq-item';


    return (
        <div className={itemClassName}>
            <div className="faq-question" onClick={toggleAnswer}>
                <h4>{question}</h4>
                <i className="fas fa-chevron-down" aria-hidden="true"></i>
            </div>
            {/* La respuesta se controla con la clase 'active' */}
            <div className="faq-answer">
                <p>{answer}</p>
            </div>
        </div>
    );
};

export default FaqItem;