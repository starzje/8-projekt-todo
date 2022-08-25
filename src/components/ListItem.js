import React from "react";

const ListItem = ({ title, content, status }) => {
  return (
    <li
      className={
        (status ? "bg-green-500" : "bg-blue-500") +
        " w-1/2  rounded-2xl text-white break-all text-lg flex flex-col items-center justify-between "
      }>
      <div className='flex flex-col justify-center items-center text-start '>
        <span className='text-xl   w-full text-center rounded-t-lg font-bold p-4'>
          {title}
        </span>
        <p className='p-4 w-full '>{content}</p>
      </div>
      <div className='flex justify-center items-center w-full mt-5'>
        <button className='bg-green-700 border border-blue-500 text-white py-2.5  rounded-l-2xl w-full hover:bg-green-600 shadow-lg shadow-slate-500 transition duration-200'>
          Obavljeno
        </button>
        <button className='bg-red-500 border border-blue-500 text-white py-2.5  rounded-r-2xl w-full hover:bg-red-400 shadow-lg shadow-slate-500 transition duration-200 '>
          Obriši
        </button>
      </div>
    </li>
  );
};

export default ListItem;
