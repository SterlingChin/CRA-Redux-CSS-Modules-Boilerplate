import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';

const App = () => (
  <div>
    <Header />
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App;
