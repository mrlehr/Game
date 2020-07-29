// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

const Nav = () => (
  <>
    <div className="nav">
      <nav className="nav__links">
        <NavLink
          exact className="nav__link font "
          to="/"
         >
          Accueil
        </NavLink>

        <NavLink
          exact className="nav__link font "
          to="/niveau"
           >
          Niveaux
        </NavLink>

        {/* <NavLink  className="nav__link"  to="infos" >Infos</NavLink> */}

      </nav>     
    </div>

  </>
);

// == Export
export default Nav;
