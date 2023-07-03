import './App.css';
import Home from './components/Home'
import About from './components/About'
import Nav from './components/Nav'

// npm i react-router-dom@5.3.1
import React, { BrowserRouter, Switch, Route } from 'react-router-dom';


// import { lazy } from 'react';
// const Home = lazy(() => import('./components/Home'))
// const About = lazy(() => import('./components/About'))
// const Nav = lazy(() => import('./components/Nav'))


function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>

          <Route path={'/'}>
            <Home />
          </Route>

          <Route path={'/about'}>
            <About />
          </Route>

        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
