import TodoList from "../mojiZadaci/TodoList";
import Form from "./Form";
const AllTodos = () => {
  return (
    <section className="flex-1 flex-util flex-col w-full min-h-screen gradient-white ">
      <div className="gap-5 flex items-center justify-between bg-gradient-to-br w-full from-slate-900 to-slate-700 shadow-lg py-6 px-5 md:px-7  ">
        <h4 className="text-md md:text-xl text-white ">
          Ovdje možete pregledavati sve zadatke
        </h4>
        <Form />
      </div>
      <h2 className="pt-5 pb-6 mt-3 text-3xl font-semibold tracking-wider text-center ">
        Svi zadatci:
      </h2>
      <div className="px-7 w-full md:px-0">
        <TodoList
          link="https://algebra-todoapp.brehak.com/api/todos"
          imePodstanja="todos"
        />
      </div>
    </section>
  );
};

export default AllTodos;
