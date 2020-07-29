// == Import npm
import React, { useState } from 'react';
// import { FaBaby } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './style.scss';

const Level3 = () => {
  
  function changeTitle() {
    window.parent.document.title = 'The Game'; 
}

  const [input, setInput] = useState('');
  const [reveleadButton, setReveleadButton] = useState(false);
  const [wrongMessage, setWrongMessage] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const submit = (e) => {
    e.preventDefault()
    if (input == 3) {
      setReveleadButton(true)
      setWrongMessage(false)
    } else {
      setWrongMessage(true)
      setReveleadButton(false)
    }
  }


changeTitle();

return(
  <div className="level">
    <h2 className="level__congrtulation font">Whaou ! on continue </h2>
      <p className="level__enonce font color">Resoudre l'énigme ci dessous</p>
      <div className="numberWithBull font color "> 2 + 6 + 8 + 0 = <span className="resultGreen"> 4 </span> </div>
      <div className="numberWithBull font color"> 9 + 3 + 4 + 1 = <span className="resultGreen"> 1 </span> </div>
      <div className="numberWithBull font color"> 0 + 6 + 8 + 9 =<span className="resultGreen"> 5 </span> </div>
       <form onSubmit={submit}>
      <div className="numberWithBull font color"> 2 + 6 + 8 + 3 = 
        <input
          onChange={handleChange}
          value={input}
          className="resultGreen__input font"
          maxLength="2" /> </div>
      </form>

  { reveleadButton &&
    <div className="divRevealed" >
      <Link to="4" className="revealedButton font "> Y E A H </Link>
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
export default Level3;
