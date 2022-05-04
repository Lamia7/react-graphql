import { Switch, Route } from 'react-router-dom'

import './App.css';
import CharactersList from './pages/CharactersList';
import Character from './pages/Character';

function App() {
  return (
    <div className="App">
      {/* <CharactersList /> */}
      <Switch>
        <Route strict exact path="/" component={CharactersList} />
        <Route strict exact path="/:id" component={Character} />
      </Switch>
    </div>
  );
}

export default App;
