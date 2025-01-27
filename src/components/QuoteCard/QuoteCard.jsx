import React from 'react';
import './QuoteCard.css';

const QuoteCard = ({ quote, nombre, rol, avatar }) => {
  return (
    <div className="quote-card">
      <div className="quote-card-content">
        <span className="quote-icon">“</span>
        <p className="quote-text">{quote}</p>
      </div>
      <div className="quote-card-footer">
        <img src={avatar} alt={nombre} className="quote-avatar" />
        <div>
          <p className="quote-name">{nombre}</p>
          <p className="quote-role">{rol}</p>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;