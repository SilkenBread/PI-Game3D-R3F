import React, { useRef } from "react";

import logo from '../../../assets/logo1.png';
import vid from '../../../assets/bur4.mp4';
import { NavLink } from "react-router-dom";

export const LoginForm = ({ onSubmit }) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const username = usernameRef.current.value;
  //   const password = passwordRef.current.value;
  //   onSubmit({ username, password });
  // };

  return (
    <div className="bg-slate-800 flex justify-center items-center h-screen overflow-hidden">
      <div className="w-1/2 h-screen hidden lg:block bg-gray-300 ">
        <video loop autoPlay muted>
          <source src={vid} className="scale-125" type="video/mp4" />
        </video>

      </div>
      <div className="lg:p-36 md:p-52 sm: p-8 w-full lg:w-1/2">
        <div>
          <img
            src={logo}
            alt="Placeholder Image"
            className="w-1/2 h-full"
          />
        </div>
        <form>
          <div className="mb-4">
            <label for="username" className="block text-gray-400">
              Usuario
            </label>
            <input
              ref={usernameRef}
              type="text"
              id="username"
              name="username"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label for="password" className="block text-gray-400">
              Contraseña
            </label>
            <input
              ref={passwordRef}
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-6 text-blue-500">
            <a className="hover:underline">Unete a la experiencia Hoze</a>
          </div>
          <NavLink to='/Level1'>
            <button
              // onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
            >
              Jugar 🚀
            </button>
          </NavLink>
        </form>
      </div>
    </div>
  );
};
