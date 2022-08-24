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
    <div className="min-h-screen flex">
      <div className="gradient-blu blue-background ">
        <img
          src="../assets/TodoIlustracija.png"
          alt="Ilustracija za registraciju"
          className="max-h-screen"
        />
      </div>
      <div className="gradient-white white-background">
        {/* form */}
        <div className="form-container">
          <div className="form-background">
            <h1 className="form-text">Prijavite se</h1>
            <form onSubmit={handleSubmit}>
              <input
                ref={usernameInput}
                type="text"
                className="form-input"
                placeholder="Korisnicko ime"
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
                type="password"
                className="form-input"
                name="lozinka"
                placeholder="Lozinka"
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
              <button type="submit" className="login-btn">
                Prijava
                <FaSignInAlt className="ml-2" />
              </button>
              <div className="flex-util group  h-full mt-4">
                <div>
                  <FaQuestionCircle className="text-gray-500 group-hover:text-blue-400 mr-2" />
                </div>
                <div className=" text-gray-600 group-hover:text-blue-400 cursor-pointer">
                  Zaboravio/la sam lozinku
                </div>
              </div>
            </form>
            <div className="text-red-500 mb-4 ml-1" ref={errorFeedback}></div>
          </div>
          <div className="text-gray-900 mt-6">
            Nemate napravljen profil?
            <a className="text-highlight" href="../register/">
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
