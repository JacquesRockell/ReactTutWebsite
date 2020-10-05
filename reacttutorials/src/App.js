import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

//Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import PageNotFound from './components/pages/PageNotFound';
import Home from './components/pages/Home';
import Tutorials from './components/pages/Tutorials';


function App() {
  return (
    <div data-simplebar className="page">
      <Router>
      <Header/> 
      <SimpleBar style={{ maxHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/tutorials/*" element={<Tutorials />}/>
          <Route path="*" element={<PageNotFound />}/>
        </Routes>                                                  
        <Footer/> 
      </SimpleBar> 
      </Router>           
    </div>
  );
}

export default App;
