import TodoList from "../mojiZadaci/TodoList";
const AllTodos = () => {
  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <section className="flex-1 flex-util flex-col w-full min-h-screen  gradient-white">
      <div className="gap-5 flex items-center justify-between bg-gradient-to-br w-full from-slate-900 to-slate-700 shadow-lg py-6 px-5 md:px-7 ">
        <h4 className="text-md md:text-xl text-white">
          Ovdje možete pregledavati sve zadatke
        </h4>
        <form onSubmit={handleSearch}>
          <input
            className="rounded-l-full py-2 px-3"
            type="text"
            placeholder="Pronađi zadatak"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 py-2 px-3 rounded-r-full text-white hover:bg-blue-500 transition duration-300">
            Pretraži
          </button>
        </form>
      </div>
      <h2 className="pt-5 pb-6 mt-3 text-3xl font-semibold tracking-wider text-center ">
        Svi zadatci:
      </h2>
      <TodoList
        link="https://algebra-todoapp.brehak.com/api/todos"
        imePodstanja="todos"
      />
    </section>
  );
};

export default AllTodos;
