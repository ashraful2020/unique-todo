import React from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Nav from './nav';
import Home from './pages/Home/Home';

function App() {

  const Todos = [
    {
      todo: "Lorem ipsum dolor ."
    }, {
      todo: "Lorem ipsum dolor sit amet ."
    }, {
      todo: "Lorem ipsum dolor sit amet consectetur ."
    }, {
      todo: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. "
    }, {
      todo: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident cum animi voluptatem ."
    }]
  return (
    <>
      <div className="App">

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<h1>Home app</h1>} />
          <Route path='/about' element={<h1>about app</h1>} />
          <Route path='/contact' element={<h1>contact app</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
