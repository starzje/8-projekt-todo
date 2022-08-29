import TodoList from "../mojiZadaci/TodoList";
const AllTodos = () => {
  return (
    <section className='flex-1 flex-util h-screen p-7 gradient-white'>
      AllTodos go here
      <TodoList
        link='https://algebra-todoapp.brehak.com/api/todos'
        imePodstanja='todos'
      />
    </section>
  );
};

export default AllTodos;
