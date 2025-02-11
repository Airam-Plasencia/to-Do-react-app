import React from 'react';


const Error404 = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
       <img 
        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTllajNud3lqd3dvMGQ3dndicGlrMm1tNTVjYzBpZWlyaG9lZjJuaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/a93jwI0wkWTQs/giphy.gif" 
        alt="Error 404" 
        style={{ width: '100%', maxWidth: '500px', margin: '20px 0' }} 
      />
      <p style={{ fontSize: '1.5em' }}> Error 404 </p>
      <p style={{ fontSize: '1.5em' }}>  Página no encontrada</p>
    </div>
  );
};

export default Error404;