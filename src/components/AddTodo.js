import { useState } from "react";
import DodajNoviTodoPopup from "./DodajNoviTodoPopup";

const AddTodo = () => {
  const [formVisible, setFormVisible] = useState(false);

  const toogle = (e) => {
    e.preventDefault();
    setFormVisible(!formVisible);
  };

  return (
    <div>
      {formVisible ? (
        <DodajNoviTodoPopup
          formVisible={formVisible}
          setFormVisible={setFormVisible}
          toogle={toogle}
        />
      ) : (
        <div className="flex-col w-full gap-5 py-5 text-white flex-util rounded-t-3xl">
          <button
            onClick={toogle}
            className="w-full px-5 py-3 text-2xl font-semibold text-white bg-blue-600 rounded-2xl hover:bg-blue-500 "
          >
            Dodaj Novi Zadatak
          </button>
        </div>
      )}
    </div>
  );
};

export default AddTodo;
