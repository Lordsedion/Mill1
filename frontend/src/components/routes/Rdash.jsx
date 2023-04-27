import React from 'react';
import './NotFound.css'; // Importing the CSS file for styling
import error from '../../images/404.png'

function NotFound() {
  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <img src={error} alt="404 Error" className="not-found-image" />
      <p>But don't worry, we've got you covered with some fun facts:</p>
      <ul className="not-found-facts">
        <li>Octopuses have three hearts.</li>
        <li>Elephants can't jump.</li>
        <li>Bees can recognize human faces.</li>
        <li>Chewing gum while peeling onions will keep you from crying.</li>
      </ul>
    </div>
  );
}

export default NotFound;
