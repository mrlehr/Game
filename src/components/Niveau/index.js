import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const Niveau = () => {
  

return(
  <div className="niveau">
    <Link to="/" className="niveau__levelStyle font" >Début</Link>
    <Link to="level/1" className="niveau__levelStyle font" >Level 1</Link>
    <Link to="level/2" className="niveau__levelStyle font" >Level 2</Link>
    <Link to="level/3" className="niveau__levelStyle font" >Level 3</Link>
    <Link to="level/4" className="niveau__levelStyle font" >Level 4</Link>
    <Link to="level/5" className="niveau__levelStyle font" >Level 5</Link>
    <Link to="level/6" className="niveau__levelStyle font" >Level 6</Link>

  </div>
);
}


export default Niveau;
