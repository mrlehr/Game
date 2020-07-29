// == Import npm
import React from 'react';
import Nav from '../Nav';
import Home from '../Home';
import Niveau from '../Niveau';
import Level1 from '../Level/level1';
import Level2 from '../Level/level2';
import Level3 from '../Level/level3';
import Level4 from '../Level/level4';
import Level5 from '../Level/level5';
import Level6 from '../Level/level6';
import Level7 from '../Level/level7';
import NotFoundPage from '../NotFoundPage';
import { Switch, Route } from 'react-router-dom';
import Background from '../../assets/images/wood.jpg';

import './style.scss';

const App = () => {

  const sectionStyle = {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${Background})`
  };

return(
  <div style={ sectionStyle } className="app">
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/niveau" component={Niveau} />
      <Route exact path="/level/1" component={Level1} />
      <Route exact path="/level/2" component={Level2} />
      <Route exact path="/level/3" component={Level3} />
      <Route exact path="/level/4" component={Level4} />
      <Route exact path="/level/5" component={Level5} />
      <Route exact path="/level/6" component={Level6} />
      <Route exact path="/level/7" component={Level7} />
      <Route component={NotFoundPage} />
    </Switch>

  </div>
);
}
// == Export
export default App;
