import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../store/todos/todosSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { form, user } = useSelector((state) => state);

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

  return <button onClick={doadajDummyTodo}>DOdaj dummy todo</button>;
};

export default Dashboard;
