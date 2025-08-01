import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './component/layout/Header';
import Footer from './component/layout/Footer';
import Slider from './component/page/Slider';
import Greate from './component/page/Greate';
import Specialities from './component/page/Specialities';

function App() {
  return (
    <Router>
      <Header />
      <Slider />
      <Greate />
      <Specialities />


      {/* <Routes>
        <Route path="/" element={ } />
      </Routes> */}
      <Footer />
    </Router>
  );
}

export default App;
