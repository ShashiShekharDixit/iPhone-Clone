import React from 'react';
import AppIcon from '../AppIcon/AppIcon.component';
import './Home.styles.css';

const apps = [
  { name: 'Photos', icon: 'path/to/photos-icon.png' },
  { name: 'Music', icon: 'path/to/music-icon.png' },
  { name: 'Settings', icon: 'path/to/settings-icon.png' },
  { name: 'Messages', icon: 'path/to/messages-icon.png' },
  // Add more apps as needed
];

const Home = () => {
  return (
    <div className="home">
      <div className="app-grid">
        {apps.map((app, index) => (
          <AppIcon key={index} name={app.name} icon={app.icon} />
        ))}
      </div>
    </div>
  );
};

export default Home;