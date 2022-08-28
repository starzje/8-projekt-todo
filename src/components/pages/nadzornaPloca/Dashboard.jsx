import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addTodo } from "../../../store/todos/todosSlice";

// chartJS
import { UserData } from "../../../ChartData";
import PieChart from "./PieChart";

const Dashboard = () => {
  const { user } = useSelector((state) => state);

  // iscrtavanje charta
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.isFinished),
    datasets: [
      {
        label: "Todo Lista",
        data: UserData.map((data) => data.numberOfItems),
        backgroundColor: ["#1e7be6", "rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        borderColor: "white",
        borderWidth: 3,
        hoverOffset: 4,
        cutout: "60%",
      },
    ],
  });

  // const dispatch = useDispatch();

  // const doadajDummyTodo = () => {
  //   dispatch(
  //     addTodo({
  //       url: "https://algebra-todoapp.brehak.com/api/todo",
  //       method: "POST",
  //       token: user.token,
  //       payload: {
  //         title: "djgjkfdghjk",
  //         content: "dbgsdbgjkdsbg",
  //         status: "hdgvhsdfb",
  //       },
  //     })
  //   );
  // };

  return (
    <div className="flex-col flex-1 h-screen flex-util p-7 gradient-white">
      <h1 className="text-3xl 2xl:text-4xl font-semibold mb-4 ">
        Moj Todo App
      </h1>
      <div className="w-[200px]  md:w-[400px] 2xl:w-[700px] ">
        <PieChart chartData={userData} className="cursor-pointer" />
      </div>
      <Link
        className="px-6 py-3 mt-10 text-white bg-blue-500 shadow-xl rounded-xl hover:bg-blue-400"
        to="../my-todos">
        Dodaj Novi Todo Item
      </Link>
    </div>
  );
};

export default Dashboard;
