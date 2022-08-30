import AddTodoHeader from "./AddTodoHeader";
import TodoList from "./TodoList";

const MyTodos = () => (
  <section className="flex-1 min-h-screen gradient-white">
    <AddTodoHeader />
    <h2 className="pt-5 pb-6 mt-3 text-3xl font-semibold tracking-wider text-center">
      Moji zadatci:
    </h2>
    <TodoList
      link="https://algebra-todoapp.brehak.com/api/todoOwn"
      imePodstanja="myTodos"
    />
  </section>
);

export default MyTodos;
