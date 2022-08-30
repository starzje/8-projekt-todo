import { Link } from "react-router-dom";
import PieChart from "./PieChart";

// react icons
import { FaTasks, FaBookOpen } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex-col flex-1 h-screen flex-util p-7 gradient-white">
      <h1 className="text-3xl 2xl:text-4xl font-semibold mb-4 ">
        Moj Todo App
      </h1>
      <div className="w-[200px]  md:w-[400px] 2xl:w-[700px] ">
        <PieChart />
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
