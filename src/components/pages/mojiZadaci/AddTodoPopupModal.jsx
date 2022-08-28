import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { change, resetAll } from "../../../store/form/formSlice";
import { addTodo } from "../../../store/todos/todosSlice";

// react icons
import { IoMdClose } from "react-icons/io";

const AddTodoPopupModal = ({ formVisible, setFormVisible, toogle }) => {
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
    <form className="my-8 mx-7 flex-util relative z-[0]">
      <div className="flex flex-col items-center justify-center w-full p-4 shadow-2xl gradient-blu rounded-3xl ">
        <div className="flex  items-center mb-4 text-white text-2xl">
          <h4 className="font-semibold ">Dodaj Novi Zadatak</h4>
          <IoMdClose
            role="button"
            onClick={toogle}
            className=" ml-auto absolute top-4 right-5 text-4xl hover:text-slate-200 "
          />
        </div>
        <input
          className="title-input "
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
          className="text-area-input"
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
          required></textarea>
        <div className="flex items-center w-full gap-5">
          <button onClick={handleAddTodo} className="submit-btn ">
            {" "}
            Dodaj
          </button>
          <button
            onClick={toogle}
            className=": bg-red-500 border font-semibold  border-red-500 text-white py-2.5 px-4 rounded-2xl w-full hover:bg-red-400 shadow-lg shadow-slate-500 transition duration-200 ">
            Odustani
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddTodoPopupModal;
