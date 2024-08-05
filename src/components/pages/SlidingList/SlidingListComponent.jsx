import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './SlidingListComponent.css';

const SlidingListComponent = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 5;

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - itemsPerPage;
      console.log('Previous:', newIndex);
      return newIndex < 0 ? Math.max(0, items.length - itemsPerPage) : newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + itemsPerPage;
      console.log('Next:', newIndex);
      return newIndex >= items.length ? 0 : newIndex;
    });
  };

  useEffect(() => {
    setCurrentIndex(0);
    console.log('Items length changed:', items.length);
  }, [items.length]);

  console.log('Rendering with currentIndex:', currentIndex);

  return (
    <div className="sliding-list-container">
      <Button onClick={handlePrevious} className="arrow-button">←</Button>
      <div className="sliding-list-content">
        {items.slice(currentIndex, currentIndex + itemsPerPage).map((item) => (
          <div key={item.id} className="sliding-list-item">
            <img src={item.img} alt={item.name} />
            {/* <h3>{item.name}</h3>
            <p>Age: {item.age}</p>
            <p>Profession: {item.profession}</p> */}
          </div>
        ))}
      </div>
      <Button onClick={handleNext} className="arrow-button">→</Button>
    </div>
  );
};

export default SlidingListComponent;