import React from 'react';

const CopyRight = () => {
  const newVar = {
    fontSize: '12px',
    color: 'white', 
    textAlign: 'center',
    border:'2px solid #fff',
    borderTop: '2px',
    padding: '20px',
    borderBottom:'none',
    borderRight:'none',
    borderLeft:'none'
  };
  const currentDate = new Date();
  return (
    <div>
      <h2 style={newVar}>{currentDate.getFullYear()} @ All copyrights to Jayasriraam &#128515;</h2>
    </div>
  );
};

export default CopyRight;
