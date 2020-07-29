// == Import npm
import React from 'react';
import { FaBaby } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './style.scss';

const Level1 = () => {
  

return(
  <div className="level">
    <h2 className="level__congrtulation font">Félicitations on continue</h2>
      <p className="level__enonce font color" >Clique sur le 
        <Link to="2" className="level__revelation" > bébé</Link> 
      </p>
      <div className="level__bebe"> <FaBaby /> </div>
  </div>
);
}
// == Export
export default Level1;
