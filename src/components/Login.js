import React from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";

import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { change } from "../store/form/formSlice";
import { login } from "../store/user/userSlice";

const Login = () => {
  const usernameInput = useRef(null);
  const passwordInput = useRef(null);
  const errorFeedback = useRef(null);

  const navigate = useNavigate();
  const { form, user } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.username !== "") {
      navigate(`/dashboard`);
    } else if (user.error !== "") {
      errorFeedback.current.innerHTML = user.error;
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.username.length >= 3) {
      dispatch(
        login({
          url: "https://algebra-todoapp.brehak.com/api/auth/login",
          payload: { username: form.username, password: form.password },
        })
      );
    } else {
      errorFeedback.current.innerHTML =
        "Dogodila se pogreška. Provjerite jeste li odabrali username sa minimalno 3 slova.";
    }
  };

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
        <div className='w-[35em] 2xl:min-w-[50em] px-2 flex justify-center flex-col'>
          <div className='bg-white px-6 py-8 rounded shadow-2xl  text-black w-full'>
            <h1 className='mb-8 text-4xl font-semibold text-center text-blue-600'>
              Prijavite se
            </h1>
            <form onSubmit={handleSubmit}>
              <input
                ref={usernameInput}
                type='text'
                className='block bg-gray-100 focus:bg-white w-full p-3 rounded mb-4'
                placeholder='Korisnicko ime'
                value={form.username}
                onChange={() =>
                  dispatch(
                    change({
                      stateName: "username",
                      value: usernameInput.current.value,
                    })
                  )
                }
                required
              />
              <input
                ref={passwordInput}
                type='password'
                className='block bg-gray-100 focus:bg-white w-full p-3 rounded mb-4'
                name='lozinka'
                placeholder='Lozinka'
                value={form.password}
                onChange={() =>
                  dispatch(
                    change({
                      stateName: "password",
                      value: passwordInput.current.value,
                    })
                  )
                }
                required
              />
              <button
                type='submit'
                className='w-full text-center py-3 rounded bg-green text-white font-semibold tracking-wider bg-blue-600 hover:bg-blue-500 focus:outline-none my-1 flex justify-center items-center'>
                Prijava
                <FaSignInAlt className='ml-2' />
              </button>
              <div className='flex justify-center items-center group  h-full mt-4'>
                <div>
                  <FaQuestionCircle className='text-gray-500 group-hover:text-blue-400 mr-2' />
                </div>
                <div className=' text-gray-600 group-hover:text-blue-400 cursor-pointer'>
                  Zaboravio/la sam lozinku
                </div>
              </div>
            </form>
            <div className='text-red-500 mb-4 ml-1' ref={errorFeedback}></div>
          </div>
          <div className='text-gray-900 mt-6'>
            Nemate napravljen profil?
            <a
              className='no-underline border-b border-blue text-blue-600 hover:text-blue-500 px-1 font-semibold'
              href='../register/'>
              Registrirajte se
            </a>
          </div>
        </div>

        {/* form end */}
      </div>
    </div>
  );
};

export default Login;
