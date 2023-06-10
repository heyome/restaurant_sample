import React from 'react';

const ValueCube = ({ title, content }) => {
  const cubeStyle = {
    width: '200px',
    height: '200px',
    backgroundColor: 'gray',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'center', // Add this line to center the text
  };

  return (
    <div style={cubeStyle}>
      <div style={{ marginBottom: '10px' }}>
        <strong>{title}</strong>
      </div>
      <div>{content}</div>
    </div>
  );
};

export default ValueCube;
