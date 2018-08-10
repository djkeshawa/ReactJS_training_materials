import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';
import preload from '../data.json';
import {Provider} from 'react-redux';
import store from './store';

const FourOhFour = () => <h1>404</h1>

const App = () => (
  <BrowserRouter>
  {/* provider is a higher order component */}
  <Provider store={store}>
  <div className="app">
  <Switch>
  <Route exact path="/" component={Landing}/>
  <Route path="/search" component={props => <Search shows={preload.shows} {...props}/>}/>
  <Route path="/details/:id" component={(props) => <Details show={preload.shows.find(show => show.imdbID === props.match.params.id)}
   /> } />
  {/* tells that nothing else matches (no router path matches) render this component */}
  <Route component={FourOhFour}/>
  </Switch>
  </div>
  </Provider>
  </BrowserRouter>
);

export default App;