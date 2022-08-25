import React from "react";
import { useState } from "react";

import { logout } from "../store/user/userSlice";

import { NavLink } from "react-router-dom";

// react icons
import { FiArrowLeftCircle } from "react-icons/fi";
import { GiAbstract052 } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { RiTaskFill } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

import { useSelector, useDispatch } from "react-redux";

const Sidebar = () => {
  const [openDashboard, setOpenDashboard] = useState(true);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);

  const Meni = [
    { title: "Nadzorna ploča", icon: <AiFillHome />, link: "/dashboard" },
    { title: "Moji zadatci", icon: <RiTaskFill />, link: "/my-todos" },
    { title: "Svi zadatci", icon: <FaTasks />, link: "/all-todos" },
  ];

  return (
    <div
      className={` ${
        openDashboard ? "w-72 2xl:w-96" : "w-20 "
      } gradient-blu dashboard-blu`}>
      {/* Toggle dashboard button*/}
      <FiArrowLeftCircle
        className={`arrow ${!openDashboard && "rotate-180"}`}
        onClick={() => setOpenDashboard(!openDashboard)}
      />
      {/* Logo container*/}
      <div className='gap-4 flex-util '>
        <GiAbstract052
          className={`logo-icon ${!openDashboard && "scale-0 opacity-0 "}`}
        />
        <h1 className={`logo-text ${!openDashboard && "scale-0 opacity-0 "}`}>
          TodoApp
        </h1>
      </div>
      {/* Menu items */}
      <ul className='pt-6 mt-3 w-full'>
        {Meni.map((item, index) => (
          <li key={index} className={`${!openDashboard && "justify-center"}`}>
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                "list-items" + (isActive ? " bg-blue-500" : "")
              }>
              {/* ICONS */}
              <div>{item.icon}</div>
              {/* MENU TEXT */}
              <div className={`${!openDashboard && "hidden"} duration-200`}>
                {item.title}
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
      {/* Display current user information */}
      <div
        className={`text-white mt-auto p-2 mb-5 transition duration-500 ${
          !openDashboard && "scale-0 text-xs opacity-0 "
        }`}>
        Korisnik: <span className='font-semibold'>{user.username}</span>
      </div>
      {/* Logout button */}
      <button className={`dashboard-btn`} onClick={() => dispatch(logout())}>
        <BiLogOut className='text-lg ' /> {openDashboard && "Odjavi se"}
      </button>
    </div>
  );
};

export default Sidebar;
