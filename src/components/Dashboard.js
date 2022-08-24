import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../store/todos/todosSlice";

// react icons
import { FiArrowLeftCircle } from "react-icons/fi";
import { GiAbstract052 } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { RiTaskFill } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { form, user } = useSelector((state) => state);

  const [openDashboard, setOpenDashboard] = useState(true);
  const Meni = [
    { title: "Početna", icon: <AiFillHome /> },
    { title: "Moji zadatci", icon: <RiTaskFill /> },
    { title: "Svi zadatci", icon: <FaTasks /> },
  ];

  const doadajDummyTodo = () => {
    dispatch(
      addTodo({
        url: "https://algebra-todoapp.brehak.com/api/todo",
        method: "POST",
        token: user.token,
        payload: {
          title: "djgjkfdghjk",
          content: "dbgsdbgjkdsbg",
          status: "hdgvhsdfb",
        },
      })
    );
  };

  return (
    <div className="flex ">
      {/* Side dashboard container*/}
      <div
        className={` ${
          openDashboard ? "w-72 2xl:w-96" : "w-20 "
        } gradient-blu dashboard-blu`}
      >
        {/* Toggle dashboard button*/}
        <FiArrowLeftCircle
          className={`arrow ${!openDashboard && "rotate-180"}`}
          onClick={() => setOpenDashboard(!openDashboard)}
        />
        {/* Logo container*/}
        <div className="gap-4 flex-util ">
          <GiAbstract052
            className={`logo-icon ${!openDashboard && "scale-0 opacity-0 "}`}
          />
          <h1 className={`logo-text ${!openDashboard && "scale-0 opacity-0 "}`}>
            TodoApp
          </h1>
        </div>
        {/* Menu items */}
        <ul className="pt-6 mt-3 w-full">
          {Meni.map((Meni, index) => (
            <li
              key={index}
              className={`list-items 
              ${index === 0 && "bg-blue-500"} ${
                !openDashboard && "justify-center"
              }`}
            >
              {/* ICONS */}
              <div>{Meni.icon}</div>
              {/* MENU TEXT */}
              <div className={`${!openDashboard && "hidden"} duration-200`}>
                {Meni.title}
              </div>
            </li>
          ))}
        </ul>
        {/* Display current user information */}
        <div
          className={`text-white mt-auto p-2 mb-5 transition duration-500 ${
            !openDashboard && "scale-0 text-xs opacity-0 "
          }`}
        >
          Korisnik: <span className="font-semibold">{user.username}</span>
        </div>
        {/* Logout button */}
        <button className={`dashboard-btn`}>
          <BiLogOut className="text-lg " /> {openDashboard && "Odjavi se"}
        </button>
      </div>
      {/* Page content - components */}
      <div className="h-screen flex-1 p-7 gradient-white">
        {/* OVDJE MOGU IĆI DRUGI COMPONENTI */}
        <h1 className="text-2xl font-semibold ">
          Ovdje mogu ići različiti komponenti za druge stranice, dok dashboard
          ostaje isti
        </h1>
        <button
          className="mt-10 bg-blue-500 text-white py-3 px-6 rounded-xl shadow-xl hover:bg-blue-400"
          onClick={doadajDummyTodo}
        >
          DOdaj dummy todo
        </button>{" "}
      </div>
    </div>
  );
};

export default Dashboard;
