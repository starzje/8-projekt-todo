import ListItem from "./ListItem";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../../../store/todos/todosSlice";
import { useEffect } from "react";

const TodoList = ({ link, imePodstanja }) => {
  const { todos, user } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getTodos({
        url: link,
        method: "GET",
        token: user.token,
        payload: {},
      })
    );
  }, []);

  return (
    <div className='p-7'>
      <ul className='flex-col gap-2 flex-util'>
        {todos[imePodstanja].map((item) => {
          return <ListItem {...item} user={user} key={item._id} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
