import React, { useEffect } from 'react';
import "../styles/exceededWarning.css"

function ExceededWarning({ message }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      const warningElement = document.getElementById('exceeded-warning');
      if (warningElement) {
        warningElement.remove();
      }
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div id="exceeded-warning" className="exceeded-warning">
      <p className="exceeded-warning__message">{message}</p>
    </div>
  );
}

export default ExceededWarning;
