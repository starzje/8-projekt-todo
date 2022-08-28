import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { change } from "../store/form/formSlice";
import { login } from "../store/user/userSlice";

// react icons
import { FaQuestionCircle, FaSignInAlt } from "react-icons/fa";

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
    <div className="flex min-h-screen">
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
              <div className="h-full mt-4 flex-util group">
                <div>
                  <FaQuestionCircle className="mr-2 text-gray-500 group-hover:text-blue-400" />
                </div>
                <div className="text-gray-600 cursor-pointer  group-hover:text-blue-400">
                  Zaboravio/la sam lozinku
                </div>
              </div>
            </form>
            <div className="mb-4 ml-1 text-red-500" ref={errorFeedback}></div>
          </div>
          <div className="mt-6 text-gray-900">
            Nemate napravljen profil?
            <Link className="text-highlight" to="../register/">
              Registrirajte se
            </Link>
          </div>
        </div>

        {/* form end */}
      </div>
    </div>
  );
};

export default Login;
