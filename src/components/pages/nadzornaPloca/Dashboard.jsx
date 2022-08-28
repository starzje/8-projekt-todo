import { useState } from "react";
import { Link } from "react-router-dom";
// chartJS
import { UserData } from "../../../ChartData";
import PieChart from "./PieChart";
// react icons
import { FaTasks, FaBookOpen } from "react-icons/fa";

const Dashboard = () => {
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

  return (
    <div className="flex-col flex-1 h-screen flex-util p-7 gradient-white">
      <h1 className="text-3xl 2xl:text-4xl font-semibold mb-4 ">
        Moj Todo App
      </h1>
      <div className="w-[200px]  md:w-[400px] 2xl:w-[700px] ">
        <PieChart chartData={userData} className="cursor-pointer" />
      </div>
      <div className="flex-util gap-10">
        <Link className="nav-btn-blue" to="../my-todos">
          <FaTasks />
          Pogledaj moje zadatke
        </Link>
        <Link className="nav-btn-blue" to="../all-todos">
          <FaBookOpen />
          Pogledaj sve zadatke
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
