// == Import npm
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const Level2 = () => {
  
  const [reveleadButton, setReveleadButton] = useState(false);
  const [wrongMessage, setWrongMessage] = useState(false);


  const [input, setInput] = useState({
    one: '',
    two: '',
    three: '',
  });

  function changeTitle() {
    window.parent.document.title = 'Le code est 6 - 3 - 1'; 
}


  const handleChange = (event) =>{
		setInput({...input, [event.target.name] : event.target.value});
	}


  const submit = (e) => { 
    e.preventDefault()
    
    const total = (Number(input.one) + Number(input.two) + Number(input.three));

    if (total == 10) {
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
    <h2 className="level__congrtulation font">Bravo on continue</h2>
      <p className="level__enonce font color">Le code est caché sur l'écran</p>
      <form onSubmit={submit} >
        <input
          name="one"
          className="singleInput font"
          placeholder="0"
          value={input[0]}
          onChange={handleChange}
          maxLength="1"
        />
        <input
          name="two"
          className="singleInput font"
          placeholder="0"
          value={input[1]}
          onChange={handleChange}
          maxLength="1"
        />
        <input
          name="three"
          className="singleInput font"
          placeholder="0"
          value={input[2]}
          onChange={handleChange}
          maxLength="1"
        />

        <input type="submit" className="submit"/>

    </form>

  { reveleadButton &&
    <div className="divRevealed" >
      <Link to="3" className="revealedButton font "> Y E A H </Link>
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

export default Level2;

