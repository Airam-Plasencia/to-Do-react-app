import React from 'react';


const Error404 = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
       <img 
        src="/img/giphy.gif" 
        alt="Error 404" 
        style={{ width: '100%', maxWidth: '500px', margin: '20px 0' }} 
      />
      <p style={{ fontSize: '1.5em' }}>Página no encontrada</p>
    </div>
  );
};

export default Error404;