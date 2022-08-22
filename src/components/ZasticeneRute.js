import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

const ZasticeneRute = () => {
  const logiran = useSelector((state) => {
    if (state.user.username !== "" && state.user.token !== "") return true;
    else return false;
  });

  return logiran ? <Outlet /> : <Navigate to='/login' replace />;
};

export default ZasticeneRute;
