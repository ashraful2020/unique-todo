import React from 'react';
import { Route, Routes} from 'react-router-dom'
import './App.css';
import Nav from './nav';

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
      <div className="App container">
        <p className='fs-1 text-primary text-opacity-50 text-center fw-bold display-1'> Unique Todo Application </p>
        <Nav />
        <div className='w-50 mx-auto'>
          <form className="form-floating">
            <input className="form-control is-valid" id="floatingInputInvalid" placeholder="name@example.com hello " />
            <label for="floatingInputInvalid">Enter Your Todo </label>
          </form>
        </div>
        <div className='w-50 mx-auto text-start fs-6 text-success'>


          {
            Todos.map((data, _i) => <div className="form-check" key={_i}>
              <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
              <label className="form-check-label" for="flexCheckIndeterminate">
                {data.todo}
              </label>
            </div>)
          }

        </div>
      </div>
      <Routes>
        <Route path='/home' element={<h1>Home app</h1>}/>
        <Route path='/about' element={<h1>about app</h1>}/>
        <Route path='/contact' element={<h1>contact app</h1>}/>
      </Routes>
    </>
  );
}

export default App;
