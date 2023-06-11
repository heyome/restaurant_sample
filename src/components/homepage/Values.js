import React from 'react';
import ValueCube from './ValueCube';

const Values = ({ values }) => {
  const chunks = Array.from({ length: Math.ceil(values.length / 3) }, (_, index) =>
    values.slice(index * 3, index * 3 + 3)
  );

  return (
    <div className="values-container" style={{ backgroundColor: 'black', padding: '20px' }}>
      <h1 style={{ color: 'white', textAlign: 'center' }}>Our Values</h1>
      {chunks.map((chunk, index) => (
        <div key={index} className="value-row" style={{ display: 'flex', justifyContent: 'center' }}>
          {chunk.map((value, idx) => (
            <ValueCube key={idx} title={value.title} content={value.content} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Values;
