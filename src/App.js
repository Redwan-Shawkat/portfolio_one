import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';

import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/education' element={<Education/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/experience' element={<Experience/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
