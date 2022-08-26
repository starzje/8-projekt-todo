import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { change, resetAll } from "../store/form/formSlice";
import { addTodo } from "../store/todos/todosSlice";

const DodajNoviTodoPopup = ({ formVisible, setFormVisible, toogle }) => {
  const { form, user } = useSelector((state) => state);
  const dispatch = useDispatch();

  const titleInput = useRef(null);
  const contentInput = useRef(null);

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        url: "https://algebra-todoapp.brehak.com/api/todo",
        method: "POST",
        token: user.token,
        payload: {
          title: form.title,
          content: form.content,
          status: "FALSE",
        },
      })
    );
    dispatch(resetAll());
    setFormVisible(!formVisible);
  };

  return (
    <form className="mb-8 flex-util">
      <div className="flex flex-col items-center justify-center w-full p-4 shadow-2xl gradient-blu rounded-3xl ">
        <h4 className="mb-4 text-2xl font-semibold text-white">
          Dodaj Novi Zadatak
        </h4>
        <input
          className="bg-gray-200 border mb-4 border-blue-800 placeholder-gray-500 placeholder-opacity-60 p-2.5 w-full rounded-2xl outline-none shadow-lg focus:bg-white focus:border-gray-500  "
          type="text"
          placeholder="Naziv Zadatka"
          ref={titleInput}
          value={form.title || ""}
          onChange={() =>
            dispatch(
              change({
                stateName: "title",
                value: titleInput.current.value,
              })
            )
          }
          required
        />
        <textarea
          className="block w-full h-32 px-4 py-3 mb-4 leading-tight text-gray-700 bg-gray-200 border border-gray-200 appearance-none resize-none rounded-2xl focus:outline-none focus:bg-white focus:border-gray-500"
          id="message"
          placeholder="Dodaj Opis svom zadatku"
          ref={contentInput}
          value={form.content || ""}
          onChange={() =>
            dispatch(
              change({
                stateName: "content",
                value: contentInput.current.value,
              })
            )
          }
          required
        ></textarea>
        <div className="flex items-center w-full gap-5">
          <button
            onClick={handleAddTodo}
            className="bg-blue-500 font-semibold border border-blue-500 text-white py-2.5
                px-4 rounded-2xl w-full hover:bg-blue-400 shadow-lg
                shadow-slate-500 transition duration-200 "
          >
            {" "}
            Dodaj
          </button>
          <button
            onClick={toogle}
            className=": bg-red-500 border font-semibold  border-red-500 text-white py-2.5 px-4 rounded-2xl w-full hover:bg-red-400 shadow-lg shadow-slate-500 transition duration-200 "
          >
            Odustani
          </button>
        </div>
      </div>
    </form>
  );
};

export default DodajNoviTodoPopup;
