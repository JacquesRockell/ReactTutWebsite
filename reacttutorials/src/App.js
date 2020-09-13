import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import PageNotFound from './components/pages/PageNotFound';
import Home from './components/pages/Home';

import SimpleBar from 'simplebar-react';

import 'simplebar/dist/simplebar.min.css';

function App() {
  return (
    <div data-simplebar className="page">
      <Router>       
        <Header/>
        <SimpleBar style={{ maxHeight: '100vh' }}>
          <Switch> 
            <Route exact path="/" component={Home}/>                       
            <Route path="/" component={PageNotFound}/>
          </Switch>
          <Footer/>
        </SimpleBar>                          
      </Router>
    </div>
  );
}

export default App;
