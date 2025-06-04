import React from 'react';
import './ProfileCard.css';  // Import the CSS styles

const ProfileCard = () => {
  return (
    <div className="profile-card-container">
      <div className="profile-card">
        <div className="profile-header">
          <img 
            className="profile-image" 
            src="shandie.jpg" 
            alt="Profile Pic" 
          />
        </div>
        <div className="profile-body">
          <h2>Shandie Brillantes</h2>
          <p>Photographer</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
          <div className="stats">
            <p>❤️ 10.4k | 💬 5k | 👍 10k</p>
          </div>
          <div className="buttons">
            <button className="subscribe-btn">Subscribe</button>
            <button className="message-btn">Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
