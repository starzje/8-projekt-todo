import React from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
  return (
    <div className="min-h-screen flex">
      <div className="bg-gradient-to-br from-blue-600 hidden to-blue-900 w-4/5 h-screen md:flex justify-center items-center">
        <img
          src="../assets/TodoIlustracija.png"
          alt="Ilustracija za registraciju"
          className="max-h-screen"
        />
      </div>
      <div className="bg-gradient-to-b from-white to-slate-300 w-full h-screen flex justify-center">
        {/* form */}
        <div className="w-[35em] 2xl:min-w-[50em] px-2 flex justify-center flex-col">
          <div className="bg-white px-6 py-8 rounded shadow-2xl  text-black w-full">
            <h1 className="mb-8 text-4xl font-semibold text-center text-blue-600">
              Prijavite se
            </h1>
            <form>
              <input
                type="text"
                className="block bg-gray-100 focus:bg-white w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
              />
              <input
                type="password"
                className="block bg-gray-100 focus:bg-white w-full p-3 rounded mb-4"
                name="lozinka"
                placeholder="Lozinka"
              />
              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green text-white font-semibold tracking-wider bg-blue-600 hover:bg-blue-500 focus:outline-none my-1 flex justify-center items-center"
              >
                Prijava
                <FaSignInAlt className="ml-2" />
              </button>
              <div className="flex justify-center items-center group  h-full mt-4">
                <div>
                  <FaQuestionCircle className="text-gray-500 group-hover:text-blue-400 mr-2" />
                </div>
                <div className=" text-gray-600 group-hover:text-blue-400 cursor-pointer">
                  Zaboravio/la sam lozinku
                </div>
              </div>
            </form>
          </div>
          <div className="text-gray-900 mt-6">
            Nemate napravljen profil?
            <a
              className="no-underline border-b border-blue text-blue-600 hover:text-blue-500 px-1 font-semibold"
              href="../register/"
            >
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
