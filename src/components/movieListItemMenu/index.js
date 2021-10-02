import React, {useState} from "react";
import { ThreeDotsVertical } from 'react-bootstrap-icons';
import { Toast } from 'react-bootstrap';

import './movieListItemMenu.css';

const MovieListItemMenu = () =>{
    const [show, setShow] = useState(true);
    const toggleMenu = () => setShow(!show);
  
    return (
      <div className="MovieListItemMenu">
        <button className="MovieListItemMenu-Toggle" onClick={toggleMenu}>
        <ThreeDotsVertical />
        </button>
        <Toast onClose={toggleMenu} show={!show}>
          <Toast.Header/>
          <Toast.Body>
            <ul className="MovieListItemMenu-Controls">
              <li><span className="Controls-Span">Edit</span></li>
              <li><span className="Controls-Span">Delete</span></li>
            </ul>
          </Toast.Body>
        </Toast>
      </div>
    );
}

export default MovieListItemMenu;
