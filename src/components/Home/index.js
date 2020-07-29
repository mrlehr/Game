// == Import npm
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';


const Home = () => {

  const [name, setName] = useState ('');
  const [inputValue, setInputValue] = useState ('');
  const [nameRevealed, setNameRevealed] = useState (false);
  

  const handleChangeInput = (e) => {
    setInputValue(e.target.value)
    // inputValue.toLowerCase();
  }

  const submitName = (e) => {
    e.preventDefault()
    setName(e.target.value)
    setNameRevealed(true)
    
  }

  const handleKeyUp = (e) => {
    if (e.key === 'Enter' ) {
      submitName(e)
    }  
  }


return(
  <div className="home">
    <h1 className="home__title font"> The Game</h1>
    <p className="home__message">
      Il faut passer tous les niveaux courage !
    </p>
      <form onSubmit={submitName} className="home__form" >
        <label className="home__inputLabel font color" >Quel est ton nom ?</label>
        <input
          placeholder="Mettez votre nom ici !"
          value={inputValue}
          onChange={handleChangeInput}
          onKeyUp={handleKeyUp}
          className="home__input"
          type="text"/>
      </form>

      {
        nameRevealed &&
        <div className="home__revelation">
          <p className="home__pret">
            Salut <span className="home__pret--gros font" >
              {name} 
            </span> Tu es prêt(e). Premièrement trouve ou il faut cliquer ?
          </p>
          <Link 
            className="home__revelation--button font color"
            to="level/1"
                > I C I 
          </Link>
        </div>
      }



  </div>
);
}
// == Export
export default Home;
