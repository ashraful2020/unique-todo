import React from 'react';

const Finish = () => {
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
    );
};

export default Finish;
  