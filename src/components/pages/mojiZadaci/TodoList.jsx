import ListItem from "./ListItem";

const TodoList = () => {
  const itemi = [
    {
      title: "Prvi item",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet temporibus ad inventore assumenda dolorum incidunt sed a laudantium voluptatem expedita!",
      status: false,
    },
    {
      title: "Drugi",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet temporibus ad inventore assumenda dolorum incidunt sed a laudantium voluptatem expedita!",
      status: true,
    },
    {
      title: "Ovo je treci todo",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet temporibus ad inventore assumenda dolorum incidunt sed a laudantium voluptatem expedita!`,
      status: true,
    },
    {
      title: "Neki naslov",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet temporibus ad inventore assumenda dolorum incidunt sed a laudantium voluptatem expedita!`,
      status: false,
    },
  ];
  return (
    <div className="p-7">
      <ul className="flex-col gap-2 flex-util">
        {itemi.map((item, key) => {
          return <ListItem {...item} key={key} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
