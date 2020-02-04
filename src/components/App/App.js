import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainLayouts from '../MainLayouts/MainLayouts';
import Faq from '../FAQ/FAQ';

const App = () => (
  <BrowserRouter>
    <MainLayouts>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/info' component={Info} />
        <Route exact path='/faq' component={Faq} />
      </Switch>
    </MainLayouts>
  </BrowserRouter>
);

export default App;