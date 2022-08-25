import React from "react";
import ListItem from "./ListItem";

const TodoList = () => {
  const itemi = [
    { title: "djkghkjds", content: "hfbgvsfvbh", status: false },
    { title: "Drugi", content: "dsajkhfjkdhf", status: true },
  ];
  return (
    <div>
      <ul className='flex-util flex-col gap-3'>
        {itemi.map((item, key) => {
          return <ListItem {...item} key={key} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
