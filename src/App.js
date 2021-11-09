import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';
import { About, Contact, Home, Works, Error } from './pages/index';
import { Header, Navbar, Footer } from './components/index';

function App() {
  return (
    <>
      <Router>
        <Helmet>
          <title>Display - Digital agency</title>
          <meta name='description' content='best digital agency' />
        </Helmet>
        <Header />
        <Navbar />

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/works'>
            <Works />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
