import { useState } from "react";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { BsArrowDownShort } from "react-icons/bs";

const ListItem = ({ title, content, status }) => {
  const [taskVisible, setTaskVisible] = useState(false);

  return (
    <li className="flex flex-col w-full mb-10 shadow-2xl shadow-gray-400 h-fit rounded-t-3xl rounded-b-3xl">
      {/* Gornji dio todo kartice  */}
      <div className="group ">
        <div
          role="button"
          onClick={() => setTaskVisible(!taskVisible)}
          className={`${
            status
              ? "bg-green-600 group-hover:bg-green-500"
              : "bg-blue-600 group-hover:bg-blue-500"
          } cursor-pointer transition duration-200 w-full rounded-t-3xl h-5`}
        ></div>
        <div
          role="button"
          onClick={() => setTaskVisible(!taskVisible)}
          className="flex items-center justify-between py-2 pl-4 font-semibold uppercase transition duration-300 cursor-pointer bg-slate-200 group-hover:bg-slate-100 text-slate-500 group-hover:text-slate-400"
        >
          <div
            className={"pr-5 text-xl group-hover:text-slate-400 text-slate-500"}
          >
            <BsArrowDownShort
              className={`transition duration-500 ${
                taskVisible && "rotate-180"
              }`}
            />
          </div>
          <h5 className="mr-auto">{title}</h5>

          <span className="gap-2 pr-4 text-slate-500 flex-util">
            <p>Obavljeno:</p>
            {status ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
          </span>
        </div>
      </div>
      {/* Donji dio todo kartice */}
      <div className="flex flex-col justify-between w-full text-left text-black bg-gradient-to-br from-slate-300 to-slate-200 rounded-b-3xl">
        {taskVisible ? (
          <>
            <p className="mt-4 ml-8 min-h-[10em] ">{content}</p>
            <div className="flex mt-auto">
              {status ? (
                <button className="w-full p-4 font-semibold text-white transition duration-300 bg-green-600 hover:bg-green-500 rounded-bl-3xl">
                  Označi da nije obavljeno
                </button>
              ) : (
                <button className="w-full p-4 font-semibold text-white transition duration-300 bg-blue-600 hover:bg-blue-500 rounded-bl-3xl">
                  Označi kao obavljeno
                </button>
              )}

              <button className="w-full p-4 font-semibold text-white transition duration-300 bg-red-600 hover:bg-red-500 rounded-br-3xl">
                Izbriši
              </button>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </li>
  );
};

export default ListItem;
