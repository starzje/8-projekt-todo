import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { change } from "../store/form/formSlice";

const Register = () => {
  const usernameInput = useRef(null);
  const passwordInput = useRef(null);
  const confirmPasswordInput = useRef(null);

  const form = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const handleSubmit = () => {};

  return (
    <div className='min-h-screen flex'>
      <div className='bg-gradient-to-br from-blue-600 hidden to-blue-900 w-4/5 h-screen md:flex justify-center items-center'>
        <img
          src='../assets/TodoIlustracija.png'
          alt='Ilustracija za registraciju'
          className='max-h-screen'
        />
      </div>
      <div className='bg-gradient-to-b from-white to-slate-300 w-full h-screen flex justify-center'>
        {/* form */}
        <div className='w-[35em] 2xl:min-w-[50em]  px-2 flex justify-center flex-col'>
          <div className='bg-white px-6 py-8 rounded shadow-2xl  text-black w-full'>
            <h1 className='mb-8 text-4xl font-semibold text-center text-blue-600'>
              Novi korisnik
            </h1>
            <form onSubmit={handleSubmit}>
              <input
                ref={usernameInput}
                type='text'
                className='block w-full p-3 rounded mb-4 bg-gray-100 focus:bg-white'
                placeholder='Korisničko ime'
                value={form.username}
                onChange={() =>
                  dispatch(
                    change({
                      stateName: "username",
                      value: usernameInput.current.value,
                    })
                  )
                }
              />
              <input
                type='password'
                className='block bg-gray-100 focus:bg-white w-full p-3 rounded mb-4'
                name='lozinka'
                placeholder='Lozinka'
              />
              <input
                type='password'
                className='block bg-gray-100 focus:bg-white w-full p-3 rounded mb-4'
                name='potvrdite_lozinku'
                placeholder='Potvrdite lozinku'
              />
              <button
                type='submit'
                className='w-full text-center py-3 rounded bg-green text-white font-semibold tracking-wider bg-blue-600 hover:bg-blue-500 focus:outline-none my-1  flex justify-center items-center'>
                Registracija
                <FaSignInAlt className='ml-2' />
              </button>
            </form>
            <div className='text-center text-sm text-gray-400 mt-4'>
              Registracijom prihvaćate uvjete određene našom Politikom o
              privatnosti.
            </div>
          </div>
          <div className='text-gray-900 mt-6'>
            Imate registiran profil?
            <a
              className='no-underline border-b border-blue text-blue-600 hover:text-blue-500 px-1 font-semibold'
              href='../login/'>
              Logirajte se
            </a>
          </div>
        </div>

        {/* form end */}
      </div>
    </div>
  );
};

export default Register;
