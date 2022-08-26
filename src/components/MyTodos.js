import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const MyTodos = () => {
  return (
    <div className="flex-1 min-h-screen p-7 gradient-white">
      <AddTodo />
      <h2 className="pt-5 pb-6 text-2xl font-semibold tracking-wider text-center">
        Moji zadaci:
      </h2>
      <TodoList />
    </div>
  );
};

export default MyTodos;
