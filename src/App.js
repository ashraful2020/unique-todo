import React from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './pages/Home/Home';
import Finish from './pages/FinishTodo/Finish';

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
          <Route path='/finish-todo' element={<Finish/>} />
          <Route path='/account' element={<h1>account app</h1>} />
          <Route path='/login' element={<h1>login app</h1>} />
          <Route path='/signup' element={<h1>signup app</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
