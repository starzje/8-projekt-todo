import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import Sidebar from "./Sidebar";

const ZasticeneRute = () => {
  const logiran = useSelector((state) => {
    if (state.user.username !== "" && state.user.token !== "") return true;
    else return false;
  });

  return !logiran ? (
    <div className="flex ">
      <Sidebar />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ZasticeneRute;
