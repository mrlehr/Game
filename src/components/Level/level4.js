import React, { useState } from 'react';
import carre from '../../assets/images/carre.png';
import { Link } from 'react-router-dom';
// import { FaBaby } from 'react-icons/fa';

import './style.scss';

const Level4 = () => {

  const [count, setCount] = useState('');
  const [reveleadButton, setReveleadButton] = useState(false);
  const [wrongMessage, setWrongMessage] = useState(false);
  
  const handleChange = (e) => {
    setCount(e.target.value)
  }

  const submit = (e) => {
    e.preventDefault()
    if(count == 40) {
      setReveleadButton(true)
      setWrongMessage(false)
    } else {
      setReveleadButton(false)
      setWrongMessage(true)
    }
  }


return(
  <div className="level">
    <h2 className="level__congrtulation font">Encore ? Allez !</h2>
      <p className="level__enonce font color">Combien de carré peut tu compter ?</p>
      <img className="level__enigmeCarre" src={carre} alt="enigme"/>
    <div className="level__countDiv">
      <form onSubmit={submit}>
        <input
          onChange={handleChange}
          value={count}
          className="level__resultDiv font" 
          placeholder="?"
          maxLength="2"
          />
      </form>
    </div>

  { reveleadButton &&
    <div className="divRevealed" >
      <Link to="5" className="revealedButton font "> Y E A H </Link>
    </div>
  }

  { wrongMessage &&
    <div className="wrongMessage">
      <h3 className="h3 font color ">Essaye encore !</h3>
    </div>
  }

  </div>
);
}
// == Export
export default Level4;
