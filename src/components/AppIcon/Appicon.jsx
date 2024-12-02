import React from 'react';
import './AppIcon.styles.css';

const AppIcon = ({ name, icon }) => {
  return (
    <div className="app-icon">
      <img src={icon} alt={`${name} icon`} />
      <p>{name}</p>
    </div>
  );
};

export default AppIcon;