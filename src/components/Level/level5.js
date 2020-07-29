import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const Level5 = () => {

  const [reveleadButton, setReveleadButton] = useState(false);
  const [wrongMessage, setWrongMessage] = useState(false);
 
  const [input, setInput] = useState({
    one: '', two: '', three: '', four: '', five: '', six: '',
    seven: '', eight: '', three: '',nine: ''
  });

  const handleChange = (e) =>{
		setInput({...input, [e.target.name] : e.target.value});
	}


  const verification = () => {

    const one = input.one
    const two = input.two
    const three = input.three
    const four = input.four
    const five = input.five
    const six = input.six
    const seven = input.seven
    const eight = input.eight
    const nine = input.nine
  
    if (one == 2 && two == 7 && three == 6 && four == 9 && five == 5 && six == 1 && seven == 4 && eight == 3 && nine == 8 ) {
      setReveleadButton(true)
      setWrongMessage(false)
    } else {
      setWrongMessage(true)
      setReveleadButton(false)
    }
  }

  const submit = (e) => {
    e.preventDefault()
    verification(e)
    
  }



return(
  <div className="level">
    <h2 className="level__congrtulation font">Encore ? Allez !</h2>
      <p className="level__enonce font color">Placez les chiffres de 1 à 9 dans la grille de manière à ce que la somme des chiffres de chaque ligne, chaque colonne, et chaque diagonale soit égale à 15.</p>
      <div className="level__carreMagique">
    <form onSubmit={submit} >
      <input
        name="one"
        onChange={handleChange}
        className="level__inputCarreMagique font"
        value={input.one}
        placeholder="?"
        maxLength="1"
      />
      <input
        name="two"
        onChange={handleChange}
        className="level__inputCarreMagique font"
        value={input.two}
        placeholder="?"
        maxLength="1"
      />
      <input
        name="three"
        onChange={handleChange}
        className="level__inputCarreMagique font"
        value={input.three}
        placeholder="?"
        maxLength="1"
      />
      <input
        name="four"
        onChange={handleChange}
        className="level__inputCarreMagique font"
        value={input.four}
        placeholder="?"
        maxLength="1"
      />
      <input
        name="five"
        onChange={handleChange}
        className="level__inputCarreMagique font"
        value={input.five}
        placeholder="?"
        maxLength="1"
      />
      <input
        name="six"
        onChange={handleChange}
        className="level__inputCarreMagique font"
        value={input.six}
        placeholder="?"
        maxLength="1"
      />
      <input
        name="seven"
        onChange={handleChange}
        className="level__inputCarreMagique font"
        value={input.seven}
        placeholder="?"
        maxLength="1"
      />
      <input
        name="eight"
        onChange={handleChange}
        className="level__inputCarreMagique font"
        value={input.eight}
        placeholder="?"
        maxLength="1"
      />
      <input
        name="nine"
        onChange={handleChange}
        className="level__inputCarreMagique font"
        value={input.nine}
        placeholder="?"
        maxLength="1"
      />
    <button
      className="submitMagicCarre font"
    > Soumettre</button>

    </form>

  { reveleadButton &&
    <div className="divRevealed" >
      <Link to="6" className="revealedButton font "> Y E A H </Link>
    </div>
  }

  { wrongMessage &&
    <div className="wrongMessage">
      <h3 className="h3 font color ">Essaye encore !</h3>
    </div>
  }


    </div>
  </div>
);
}


export default Level5;
