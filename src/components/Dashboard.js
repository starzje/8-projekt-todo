import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../store/todos/todosSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);

  const doadajDummyTodo = () => {
    dispatch(
      addTodo({
        url: "https://algebra-todoapp.brehak.com/api/todo",
        method: "POST",
        token: user.token,
        payload: {
          title: "djgjkfdghjk",
          content: "dbgsdbgjkdsbg",
          status: "hdgvhsdfb",
        },
      })
    );
  };

  return (
    <div className='h-screen flex-1 p-7 gradient-white'>
      {/* OVDJE MOGU IĆI DRUGI COMPONENTI */}
      <h1 className='text-2xl font-semibold '>
        Ovdje mogu ići različiti komponenti za druge stranice, dok dashboard
        ostaje isti
      </h1>
      <button
        className='mt-10 bg-blue-500 text-white py-3 px-6 rounded-xl shadow-xl hover:bg-blue-400'
        onClick={doadajDummyTodo}>
        DOdaj dummy todo
      </button>{" "}
    </div>
  );
};

export default Dashboard;
