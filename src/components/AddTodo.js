import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { change } from "../store/form/formSlice";
import { addTodo } from "../store/todos/todosSlice";
import { resetAll } from "../store/form/formSlice";

const AddTodo = () => {
  const [formVisible, setFormVisible] = useState(false);

  const titleInput = useRef(null);
  const contentInput = useRef(null);

  const { form, user } = useSelector((state) => state);
  const dispatch = useDispatch();

  const toogle = (e) => {
    e.preventDefault();
    setFormVisible(!formVisible);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        url: "https://algebra-todoapp.brehak.com/api/todo",
        method: "POST",
        token: user.token,
        payload: {
          title: form.title,
          content: form.content,
          status: "FALSE",
        },
      })
    );
    dispatch(resetAll());
    setFormVisible(!formVisible);
  };

  return (
    <>
      {formVisible ? (
        <form className=' flex-util'>
          <div className='gradient-blu shadow-2xl flex flex-col justify-center items-center w-1/2 p-4 rounded-3xl'>
            <h4 className='text-2xl mb-4 text-white font-semibold'>
              Dodaj Novi Zadatak
            </h4>
            <input
              className='bg-gray-200 border mb-4 border-blue-800 placeholder-gray-500 placeholder-opacity-60 p-2.5 w-full rounded-2xl outline-none shadow-lg focus:bg-white focus:border-gray-500  '
              type='text'
              placeholder='Naziv Zadatka'
              ref={titleInput}
              value={form.title || ""}
              onChange={() =>
                dispatch(
                  change({
                    stateName: "title",
                    value: titleInput.current.value,
                  })
                )
              }
              required
            />
            <textarea
              className=' appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-200 rounded-2xl py-3 px-4 mb-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-32 resize-none'
              id='message'
              placeholder='Dodaj Opis svom zadatku'
              ref={contentInput}
              value={form.content || ""}
              onChange={() =>
                dispatch(
                  change({
                    stateName: "content",
                    value: contentInput.current.value,
                  })
                )
              }
              required></textarea>
            <div className='flex gap-5'>
              <button
                onClick={toogle}
                className=': bg-red-500 border border-red-500 text-white py-2.5 px-4 rounded-2xl w-full hover:bg-red-400 shadow-lg shadow-slate-500 transition duration-200 '>
                Odustani
              </button>
              <button
                onClick={handleAddTodo}
                className='bg-blue-500 border border-blue-500 text-white py-2.5
                px-4 rounded-2xl w-full hover:bg-blue-400 shadow-lg
                shadow-slate-500 transition duration-200 '>
                {" "}
                Dodaj
              </button>
            </div>
          </div>
        </form>
      ) : (
        <button onClick={toogle} className='dashboard-btn'>
          Dodaj novi task
        </button>
      )}
    </>
  );
};

export default AddTodo;
