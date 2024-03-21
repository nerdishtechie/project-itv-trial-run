import React from 'react';
//  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Header from './components/Header';
import Countries from './components/Countries';
import Footer from './components/Footer';
// import Italy from './components/Italy';
import Austria from './components/Austria';
import Belgium from './components/Belgium';
import Croatia  from './components/Croatia';
import Czech from './components/Czech';
import Denmark from './components/Denmark';
import Estonia from './components/Estonia';
import Finland from './components/Finland';
import France from './components/France';
import Germany from './components/Germany';
import Greece from './components/Greece';
import Hungary from './components/Hungary';
import Iceland from './components/Iceland';
import Italy from './components/Italy';
import Latvia from './components/Latvia';
import Liechtenstein from './components/Liechtenstein';
import Lithuania from './components/Lithuania';
import Luxembourg from './components/Luxembourg';
import Malta from './components/Malta';
import Netherlands from './components/Netherlands';
import Norway from './components/Norway';
import Poland from './components/Poland';
import Portugal from './components/Portugal';
import Slovakia from './components/Slovakia';
import Slovenia from './components/Slovenia';
import Spain from './components/Spain';
import Sweden from './components/Sweden';
import Switzerland from './components/Switzerland';
import './App.css';
// import Italy from './components/Italy';
function App(){
  return(
    <BrowserRouter>
    <div>
      <Header />
      
      <Routes>
        <Route path='/' element={<Countries />}/>
        <Route path='/Austria' element={<Austria />}/>
        <Route path='/Belgium' element={<Belgium />}/>
        <Route path='/Czech' element={<Czech />}/>
        <Route path='/Denmark' element={<Denmark />}/>
        <Route path='/Estonia' element={<Estonia />}/>
        <Route path='/France' element={<France />}/>
        <Route path='/Germany' element={<Germany />}/>
        <Route path='/Hungary' element={<Hungary />}/>
        <Route path='/Latvia' element={<Latvia />}/>
        <Route path='/Lithuania' element={<Lithuania />}/>
        <Route path='/Malta' element={<Malta />}/>
        <Route path='/Netherlands' element={<Netherlands />}/>
        <Route path='/Finland' element={<Finland />}/>
        <Route path='/Greece' element={<Greece />}/>
        <Route path='/Iceland' element={<Iceland />}/>
        <Route path='/Italy' element={<Italy />}/>
        <Route path='/Luxembourg' element={<Luxembourg />}/>
        <Route path='/Norway' element={<Norway />}/>
        <Route path='/Croatia' element={<Croatia />}/>
        <Route path='/Liechtenstein' element={<Liechtenstein />}/>
        <Route path='/Poland' element={<Poland />}/>
        <Route path='/Portugal' element={<Portugal />}/>
        <Route path='/Sweden' element={<Sweden />}/>
        <Route path='/Slovakia' element={<Slovakia />}/>
        <Route path='/Slovenia' element={<Slovenia />}/>
        <Route path='/Spain' element={<Spain />}/>
        <Route path='/Switzerland' element={<Switzerland />}/>
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
    
  );
}
export default App;