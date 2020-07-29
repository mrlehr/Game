import React, { useState } from 'react';
import { FaLock, FaLockOpen } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './style.scss';

const Level6 = () => {

  const [reveleadButton, setReveleadButton] = useState(false);
  const [wrongMessage, setWrongMessage] = useState(false);

  const [input, setInput] = useState({
    one: '', two: '', three: ''
  })

  const handleChange = (e) =>{
		setInput({...input, [e.target.name] : e.target.value});
  }
  
  const submit = (e) => {
    e.preventDefault()
    const one = input.one;
    const two = input.two;
    const three = input.three;

    if(one == 0 && two == 4 && three == 2) {
      setReveleadButton(true)
      setWrongMessage(false)
    } else {
      setWrongMessage(true)
      setReveleadButton(false)
    }
  }


return(
  <div className="level">
    <p className="level__enonce font color margin">Crack le code</p>

  { 
    reveleadButton ? <FaLockOpen className="lockClose" /> : <FaLock className="lockClose" /> 
  }

    <form onSubmit={submit} className="formLock">
      <div className="miniWrapper" >
      <input
        name="one"
        onChange={handleChange}
        value={input.one}
        className="singleInput font"
        maxLength="1"
        />
      <input
      name="two"
      onChange={handleChange}
      value={input.two}
      className="singleInput font"
      maxLength="1"
        />
      <input
      name="three"
      onChange={handleChange}
      value={input.three}
      className="singleInput font"
      maxLength="1"
        />
      </div>
      <button
        className="submitMagicCarre font"
      > DEBLOQUER</button>
    </form>


  <div className="crackCode">
    <div className="crackCode__clue">
      <div className="crackCode__displayNumber">
        <div className="crackCode__number font" >6</div>
        <div className="crackCode__number font" >8</div>
        <div className="crackCode__number font" >2</div>
      </div>
      <p className="crackCode__text">
        Un des numéros est correct et bien placé
      </p>
    </div>

    <div className="crackCode__clue">
      <div className="crackCode__displayNumber">
        <div className="crackCode__number font" >6</div>
        <div className="crackCode__number font" >1</div>
        <div className="crackCode__number font" >4</div>
      </div>
      <p className="crackCode__text">
        Un des numéros est correct mais mal placé
      </p>
    </div>

    <div className="crackCode__clue">
      <div className="crackCode__displayNumber">
        <div className="crackCode__number font" >2</div>
        <div className="crackCode__number font" >0</div>
        <div className="crackCode__number font" >6</div>
      </div>
      <p className="crackCode__text">
        Deux numéros sont correct mais mal placés
      </p>
    </div>

    <div className="crackCode__clue">
      <div className="crackCode__displayNumber">
        <div className="crackCode__number font" >7</div>
        <div className="crackCode__number font" >3</div>
        <div className="crackCode__number font" >8</div>
      </div>
      <p className="crackCode__text">
        Aucun des numéros n'est correct
      </p>
    </div>

    <div className="crackCode__clue">
      <div className="crackCode__displayNumber">
        <div className="crackCode__number font" >7</div>
        <div className="crackCode__number font" >8</div>
        <div className="crackCode__number font" >0</div>
      </div>
      <p className="crackCode__text">
      Un des numéros est correct mais mal placé
      </p>
    </div>
  </div>

  { reveleadButton &&
    <div className="divRevealed" >
      <Link to="7" className="revealedButton font "> Y E A H </Link>
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


export default Level6;
