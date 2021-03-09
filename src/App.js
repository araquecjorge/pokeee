import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import { ProviderAuth } from './Provider/Auth'
import Login from './components/login'
import Pokedex from './components/Pokedex'
function App (){
  return(
    <ProviderAuth>
      <Router>
        <Switch>
          <Route path='/pokedex'>
            <Pokedex/>
          </Route>
          <Route path='/'>
              <Login/>
          </Route>
        </Switch>
      </Router>
    </ProviderAuth>
  )
}

export default App;