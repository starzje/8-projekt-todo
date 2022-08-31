import { Doughnut } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../../../store/todos/todosSlice";
import { useEffect } from "react";

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

  let data = {
    labels: [
      `Broj ukupnih zadataka : ${todos.myTodos.length}`,
      `Zadaci koji još nisu završeni : ${
        todos.myTodos.filter((todo) => !todo.status).length
      }`,
      `Zadaci koji su završeni : ${
        todos.myTodos.filter((todo) => todo.status).length
      }`,
    ],
    datasets: [
      {
        label: "Todo Lista",
        data: [
          todos.myTodos.length,
          todos.myTodos.filter((todo) => !todo.status).length,
          todos.myTodos.filter((todo) => todo.status).length,
        ],
        backgroundColor: ["#1e7be6", "rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        borderColor: "white",
        borderWidth: 3,
        hoverOffset: 4,
        cutout: "60%",
      },
    ],
  };

  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
}

export default PieChart;
