// Welcome.js
import React from 'react';

const Welcome = ({ welcome }) => {
    const styles = {
        container: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          color: 'white',
          textAlign: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(5px)', // Optional: Adds a blur effect to the background
          '@media (maxWidth: 600px)': {
            fontSize: '14px',
          },
        },
        title: {
          fontSize: '3em',
          fontWeight: 'bold',
          '@media (maxWidth: 600px)': {
            fontSize: '2em',
          },
        },
        subtitle: {
          fontSize: '1.5em',
          '@media (maxWidth: 600px)': {
            fontSize: '1em',
          },
        },
      };
      

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>{welcome.title}</h1>
            <h2 style={styles.subtitle}>{welcome.subtitle}</h2>
        </div>
    );
};

export default Welcome;
