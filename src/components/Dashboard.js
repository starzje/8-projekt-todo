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
    <div className="flex-col flex-1 h-screen flex-util p-7 gradient-white">
      <h1 className="text-2xl font-semibold ">Dashboard s informacijama</h1>
      <button
        className="px-6 py-3 mt-10 text-white bg-blue-500 shadow-xl rounded-xl hover:bg-blue-400"
        onClick={doadajDummyTodo}
      >
        DOdaj dummy todo
      </button>{" "}
    </div>
  );
};

export default Dashboard;
