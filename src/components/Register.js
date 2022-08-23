import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { change } from "../store/form/formSlice";
import { register } from "../store/user/userSlice";

const Register = () => {
  const usernameInput = useRef(null);
  const passwordInput = useRef(null);
  const confirmPasswordInput = useRef(null);
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
    if (form.username.length >= 3 && form.password === form.passwordRepeat) {
      dispatch(
        register({
          url: "https://algebra-todoapp.brehak.com/api/auth/register",
          payload: { username: form.username, password: form.password },
        })
      );
    } else {
      errorFeedback.current.innerHTML =
        "Dogodila se pogreška. Provjerite je li se šifre podudaraju, te provjerite da ste odabrali username sa minimalno 3 slova.";
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
                required
              />
              <input
                ref={passwordInput}
                type='password'
                className='block bg-gray-100 focus:bg-white w-full p-3 rounded mb-4'
                value={form.password}
                onChange={() =>
                  dispatch(
                    change({
                      stateName: "password",
                      value: passwordInput.current.value,
                    })
                  )
                }
                placeholder='Lozinka'
                required
              />
              <input
                ref={confirmPasswordInput}
                type='password'
                className='block bg-gray-100 focus:bg-white w-full p-3 rounded mb-4'
                value={form.passwordRepeat}
                onChange={() =>
                  dispatch(
                    change({
                      stateName: "passwordRepeat",
                      value: confirmPasswordInput.current.value,
                    })
                  )
                }
                placeholder='Potvrdite lozinku'
                required
              />
              <button
                type='submit'
                className='w-full text-center py-3 rounded bg-green text-white font-semibold tracking-wider bg-blue-600 hover:bg-blue-500 focus:outline-none my-1  flex justify-center items-center'>
                Registracija
                <FaSignInAlt className='ml-2' />
              </button>
            </form>
            <div className='text-red-500 mb-4 ml-1' ref={errorFeedback}></div>
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
