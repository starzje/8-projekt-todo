import TodoList from "../mojiZadaci/TodoList";
import ListItem from "../mojiZadaci/ListItem";
import { change } from "../../../store/form/formSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getTodos } from "../../../store/todos/todosSlice";
import Form from "./Form";

const AllTodos = () => {
  const [showSearchedTodos, setShowSearchedTodos] = useState(false);
  const [searchedTodos, setSearchedTodos] = useState([]);
  const { user, form, todos } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(change({ stateName: "search", value: e.target.value }));
  };

  useEffect(() => {
    dispatch(
      getTodos({
        url: "https://algebra-todoapp.brehak.com/api/todos",
        method: "GET",
        token: user.token,
        payload: {},
      })
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSearchedTodos(true);
    const filteredTodos = todos.todos.filter((todo) =>
      todo.title.toLowerCase().includes(form.search.toLowerCase())
    );
    setSearchedTodos(filteredTodos);
  };

  return (
    <section className="flex-1 flex-util flex-col w-full min-h-screen gradient-white  ">
      <div className="gap-5 flex items-center justify-between bg-gradient-to-br w-full from-slate-900 to-slate-700 shadow-lg py-6 px-5 md:px-7 mb-auto ">
        <h4 className="text-md md:text-xl text-white ">
          Ovdje možete pregledavati sve zadatke
        </h4>
        <Form handleSubmit={handleSubmit} handleChange={handleChange} />
      </div>
      <div className="w-full mb-auto">
        <h2 className="pt-5 pb-6 mt-3 text-3xl font-semibold tracking-wider text-center ">
          Svi zadatci:
        </h2>
        <div className="px-7 w-full md:px-0">
          {!showSearchedTodos ? (
            <TodoList
              link="https://algebra-todoapp.brehak.com/api/todos"
              imePodstanja="todos"
            />
          ) : (
            <ul className="flex-col gap-2 flex-util">
              {searchedTodos.map((item) => {
                return <ListItem {...item} user={user} key={item._id} />;
              })}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default AllTodos;
