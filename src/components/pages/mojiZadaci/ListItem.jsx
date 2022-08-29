import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeMyTodo, deleteMyTodo } from "../../../store/todos/todosSlice";

// react icons
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { BsArrowDownShort } from "react-icons/bs";

const ListItem = ({ _id, title, content, status, user }) => {
  const [taskVisible, setTaskVisible] = useState(false);
  const dispatch = useDispatch();

  const handleChangeStatus = () => {
    dispatch(
      changeMyTodo({
        url: "https://algebra-todoapp.brehak.com/api/todo",
        method: "PUT",
        token: user.token,
        payload: {
          id: _id,
          title,
          content,
          status: !status,
        },
      })
    );
  };

  const handleDeletion = () => {
    dispatch(
      deleteMyTodo({
        url: "https://algebra-todoapp.brehak.com/api/todo",
        method: "DELETE",
        token: user.token,
        payload: {
          id: _id,
        },
      })
    );
  };

  return (
    <li className="flex flex-col w-full mb-10 shadow-2xl shadow-gray-400 h-fit rounded-t-3xl rounded-b-3xl">
      {/* Gornji dio todo kartice  */}
      <div
        className="group"
        role="button"
        onClick={() => setTaskVisible(!taskVisible)}>
        <div
          className={`${
            status
              ? "bg-green-600 group-hover:bg-green-500"
              : "bg-blue-600 group-hover:bg-blue-500"
          } cursor-pointer transition duration-200 w-full rounded-t-3xl h-5`}></div>
        <div className="dodaj-task-btn">
          <div
            className={
              "pr-5 text-xl group-hover:text-slate-400 text-slate-500"
            }>
            <BsArrowDownShort
              className={`transition duration-500 ${
                taskVisible && "rotate-180"
              }`}
            />
          </div>
          <h5 className="mr-auto">{title}</h5>

          <span className="gap-2 pr-4 text-slate-500 flex-util">
            <p className="text-xs md:text-base">Obavljeno:</p>
            {status ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
          </span>
        </div>
      </div>
      {/* Donji dio todo kartice */}
      <div className="flex flex-col justify-between w-full text-left text-black bg-gradient-to-br from-slate-300 to-slate-200 rounded-b-3xl">
        {taskVisible ? (
          <>
            <p className="my-4 ml-8 min-h-[10em] ">{content}</p>
            <div className="flex mt-auto">
              {status ? (
                <button
                  onClick={handleChangeStatus}
                  className="nije-obavljeno-btn">
                  Označi da nije obavljeno
                </button>
              ) : (
                <button onClick={handleChangeStatus} className="obavljeno-btn">
                  Označi kao obavljeno
                </button>
              )}
              <button onClick={handleDeletion} className="izbrisi-btn">
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
