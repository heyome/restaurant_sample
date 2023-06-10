import React from 'react';

const SocialMedia = ({ content, links }) => {
  return (
    <div className="social-media-container">
      <h1>Connect With Us</h1>
      <p>{content}</p>
      <div className="social-links">
        {links.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noreferrer">
            {link.platform}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
