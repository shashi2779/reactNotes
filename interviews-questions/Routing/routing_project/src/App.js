import './App.css';
import Nav from './components/Nav'
import About from './components/About';
import Home from './components/Home'
// npm i react-router-dom@5.3.1
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />

          <Switch>
          <Route path={'/'}>
            <Home></Home>
          </Route>

          <Route path={'/about'}>
            <About></About>
          </Route>
         </Switch>
       
      </BrowserRouter>
    </>
  );
}

export default App;
