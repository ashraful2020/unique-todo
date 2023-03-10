import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';

const Home = () => {
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
        <div className='container'>
             <Navigation />
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
    );
};

export default Home;