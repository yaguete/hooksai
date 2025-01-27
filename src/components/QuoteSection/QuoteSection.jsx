import React, { useEffect, useRef } from 'react';
import QuoteCard from '../QuoteCard/QuoteCard';
import './QuoteSection.css';

const quotes = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    nombre: "Ryan",
    rol: "Architect",
    avatar: "/public/images/Testimonials/QuoteRyan.png",
  },
  {
    quote: "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    nombre: "Jordi",
    rol: "Contractor",
    avatar: "/public/images/Testimonials/QuoteJordi.png",
  },
  {
    quote: "Some clients bring in a small image and want it larger. I no longer need to ask them for the original file to enhance it in Photoshop. Now I can fix it right away, right before printing.",
    nombre: "Sarah",
    rol: "Copyshop manager",
    avatar: "/public/images/Testimonials/QuoteSarah.png",
  },
  {
    quote: " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    nombre: "Amelia",
    rol: "Mechanical Engineer",
    avatar: "/public/images/Testimonials/QuoteAmelia.png",
  },
  {
    quote: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    nombre: "Marc",
    rol: "Graphic designer",
    avatar: "/public/images/Testimonials/QuoteMarc.png",
  },
];

/*Lo del scroll infinito. Si llega al final, vuelve al principio. Si no, sigue avanzando el ancho de una tarjeta
const scrollQuotes = useRef(null);
useEffect(() => {
    const scrollInterval = setInterval(() => {
        if(scrollQuotes.current){
            const { scrollWidth, scrollLeft, clientWidth } = scrollQuotes.current;

            if (scrollLeft + clientWidth >= scrollWidth) {
                scrollQuotes.current.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                scrollQuotes.current.scrollBy({ left: 300, behavior: 'smooth' });
            }
        }
    }, 3000); //cada 3 segundos se mueve
    
    return () => clearInterval(scrollInterval);
}, []);


const QuoteSection = () => {
  return (
    <div className="quote-section-container">
        <div className="quote-section" ref={scrollQuotes}>
        {quotes.map((quote, index) => (
            <QuoteCard key={index} {...quote} />
        ))}
         </div>
    </div>
  );
};

export default QuoteSection;*/ 

const QuoteSection = () => {
    return (
      <div className="quote-section-container">
          <div className="quote-section">
          {quotes.map((quote, index) => (
              <QuoteCard key={index} {...quote} />
          ))}
           </div>
      </div>
    );
  };
  
  export default QuoteSection;