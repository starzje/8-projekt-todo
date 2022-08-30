import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../../../store/todos/todosSlice";
import { useEffect } from "react";
// chartJS

function PieChart() {
  const { todos, user } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getTodos({
        url: "https://algebra-todoapp.brehak.com/api/todoOwn",
        method: "GET",
        token: user.token,
        payload: {},
      })
    );
  }, []);

  const data = todos.myTodos;
  const totalTodos = data.length;
  const completedTodos = data.filter((todo) => todo.status).length;
  const uncompletedTodos = totalTodos - completedTodos;
  const UserData = [
    {
      id: 1,
      isFinished: "Broj ukupnih zadataka : " + totalTodos,
      numberOfItems: totalTodos,
    },
    {
      id: 2,
      isFinished: "Zadaci koji još nisu završeni : " + uncompletedTodos,
      numberOfItems: uncompletedTodos,
    },
    {
      id: 3,
      isFinished: "Broj ispunjenih zadataka : " + completedTodos,
      numberOfItems: completedTodos,
    },
  ];

  const [chartData, setChartData] = useState({
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

  return (
    <div>
      <Doughnut data={chartData} />
    </div>
  );
}

export default PieChart;
