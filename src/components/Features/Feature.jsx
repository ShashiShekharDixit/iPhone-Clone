import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    { id: 1, image: '/feature1.jpg', text: 'A15 Bionic Chip for blazing speed.' },
    { id: 2, image: '/feature2.jpg', text: 'A camera that redefines clarity.' },
    { id: 3, image: '/feature3.jpg', text: 'Battery life that lasts all day.' }
  ];

  return (
    <section className="features">
      <h2>Features</h2>
      <div className="feature-list">
        {features.map((feature) => (
          <div key={feature.id} className="feature-item">
            <img src={feature.image} alt={feature.text} />
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
