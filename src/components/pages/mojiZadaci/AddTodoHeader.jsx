import { useState } from "react";
import AddTodoPopupModal from "./AddTodoPopupModal";

// react icons
import { IoIosAddCircleOutline, IoMdClose } from "react-icons/io";

const AddTodoHeader = () => {
  const [formVisible, setFormVisible] = useState(false);

  const toggle = () => {
    setFormVisible(!formVisible);
  };

  return (
    <div>
      <div className="gap-5 flex items-center justify-around bg-slate-800 py-5 px-5 md:px-0 ">
        <h4 className="text-md md:text-xl text-white">
          Ovdje možete dodavati nove List iteme
        </h4>
        <button
          onClick={toggle}
          className="px-10 py-2 text-lg font-semibold text-white bg-blue-600 rounded-2xl hover:bg-blue-500">
          {formVisible ? (
            <div className="flex-util">
              <IoMdClose className="mr-2" /> Zatvori
            </div>
          ) : (
            <div className="flex-util">
              <IoIosAddCircleOutline className="mr-2" /> Dodaj
            </div>
          )}
        </button>
      </div>
      {formVisible && (
        <AddTodoPopupModal
          formVisible={formVisible}
          setFormVisible={setFormVisible}
          toogle={toggle}
        />
      )}
    </div>
  );
};

export default AddTodoHeader;
